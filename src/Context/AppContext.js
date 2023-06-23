import { createContext, useState } from "react";
import { auth } from "../Components/Firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";


export const Appcontext = createContext();

export default function AppContextProvider({children}){
    const logout = ()=>{
        signOut(auth).then(() => {
            setLogin(false)
            setWork(false)
            toast.success("Logout successfully")
           }).catch((error) => {
             toast.error("error occured")
           });
    }
    const[login , setLogin] = useState(false);
    const [work , setWork] = useState(false)
    const value = {
        login,setLogin , logout , work , setWork
    }


return <Appcontext.Provider value={value}>
{children}
</Appcontext.Provider>
}