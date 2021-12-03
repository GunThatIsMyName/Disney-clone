import { createContext, useContext, useReducer } from "react";
import { Loading, Login_AC, Logout_AC } from "../action/action";
import { auth, googleProvider } from "../firebase";
import { initState, reducer } from "../reducer/AppReducer";

const AppContext = createContext();

const AppProvider = ({children})=>{
    const [state,dispatch]=useReducer(reducer,initState)

    const popupLogin = async()=>{
        try{
            const response = await auth.signInWithPopup(googleProvider);
            const {displayName,email,photoURL} = response.user;
            dispatch({type:Login_AC,payload:{displayName,email,photoURL}})
        }catch(error){
            console.log(error,"login Error")
        }
    }

    const logginOut = async()=>{
        try{
            await auth.signOut();
            dispatch({type:Logout_AC})
        }catch(error){
            console.log(error,"singed Out")
        }
    }
    
    const checkingLoginStatus=()=>{
        dispatch({type:Loading})
        try{
            auth.onAuthStateChanged((user)=>{
                if(user){
                    const {displayName,email,photoURL}=user;
                    dispatch({type:Login_AC,payload:{displayName,email,photoURL}})
                }
            })
        }catch(error){
            console.log(error,"Error")
        }
    }

    const handleAuth = ()=>{
        popupLogin();
    }
    const handleLogout=()=>{
        logginOut();
    }
    return (
        <AppContext.Provider value={{...state,handleAuth,handleLogout,checkingLoginStatus}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = ()=>{
    return useContext(AppContext)
}

export default AppProvider;