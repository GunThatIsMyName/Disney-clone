import { Login_AC } from "../action/action"

export const initState = {
    user:{
        email:"",
        name:"",
        photo:"",
    }
}

export const reducer = (state,action)=>{
    switch (action.type) {
        // User First Login Set Information here
        case Login_AC:
            const {displayName,email,photoURL}=action.payload;
            return{
                ...state,
                user:{
                    ...state.user,
                    email,
                    name:displayName,
                    photo:photoURL
                }
            }

        // Defaut Setting (erorr)
        default:
            console.log("??")
    }
}