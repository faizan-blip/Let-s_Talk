import { createContext , useState  , useEffect} from "react";
import { auth , google } from "../Components/Firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from "../Components/Firebase";
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
    const [friendmessages, setFriendmessages] = useState([]);
    useEffect(() => {
      const q = query(collection(db, 'friendmessages'), orderBy('timestamp'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let friendmessages = [];
        querySnapshot.forEach((doc) => {
          friendmessages.push({ ...doc.data(), id: doc.id });
        });
        setFriendmessages(friendmessages);
      });
      return () => unsubscribe();
    }, []);
  
    const [input, setInput] = useState('');
  
    const sendMessage = async (e) => {
      e.preventDefault();
      if (input === '') {
        toast.error('Enter a valid message');
        return;
      }
      const { uid, displayName } = auth.currentUser;
      await addDoc(collection(db, 'friendmessages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp(),
      });
      setInput('');
      // scroll.current.scrollIntoView({ behavior: 'smooth' });
    };






    const value = {
     logout , signin , user , nav , friendmessages ,sendMessage , input , setInput
    }


return <Appcontext.Provider value={value}>
{children}
</Appcontext.Provider>
}