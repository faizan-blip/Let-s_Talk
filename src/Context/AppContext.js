import { createContext} from "react";
import { auth , google } from "../Components/Firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
export const Appcontext = createContext();

export default function AppContextProvider({children}){
    const Navigate = useNavigate()
    const logout = () => {
        signOut(auth)
          .then(() => {
            toast.success("Logged out successfully");
          })
          .catch((error) => {
            toast.error("An error occurred while logging out");
          });
      };

      const[user] = useAuthState(auth)
      console.log(user)

      const signin = async()=>{
        try{
     const res = await signInWithPopup(auth , google)
     console.log(res)
   setTimeout(() => {
     Navigate('/')
   },2000);
      }catch(err){
        const error = err.message
        toast.error(error)
      }
    }
    
    const nav = ()=>{
        if(user){
        Navigate('/match')
        } else{
            Navigate('/error')
        }
    }

    const value = {
     logout , signin , user , nav
    }


return <Appcontext.Provider value={value}>
{children}
</Appcontext.Provider>
}