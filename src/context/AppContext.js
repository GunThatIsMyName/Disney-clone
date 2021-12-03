import { createContext, useContext, useReducer } from "react";
import { Login_AC } from "../action/action";
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
    const handleAuth = ()=>{
        popupLogin();
    }
    return (
        <AppContext.Provider value={{...state,handleAuth}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = ()=>{
    return useContext(AppContext)
}

export default AppProvider;