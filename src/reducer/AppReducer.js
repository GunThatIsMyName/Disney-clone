import { Loading, Login_AC, Logout_AC } from "../action/action";

export const initState = {
  user: {
    email: "",
    name: "",
    photo: "",
  },
  isAppLoading:false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    // User First Login Set Information here
    case Login_AC:
      const { displayName, email, photoURL } = action.payload;
      return {
        ...state,
        user: {
          ...state.user,
          email,
          name: displayName,
          photo: photoURL,
        },
        isAppLoading:false,
      };

    //   Logout
    case Logout_AC:
      return {
        ...state,
        user: {
          email: "",
          name: "",
          photo: "",
        },
      };

    // Loading 
    case Loading :
        return {...state,isAppLoading:true}

    // Defaut Setting (erorr)
    default:
      console.log("??");
  }
};
