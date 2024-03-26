// import { createContext, useContext, useState } from "react";

// export const AuthContext = createContext();

// export const useAuthContext = () => {
//     return useContext(AuthContext)
// }

// export const AuthContextProvider = ({Children})=>{
//     const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || "")

//     return <AuthContext.Provider value={{authUser, setAuthUser}}>
        
//         <Children/>
//     </AuthContext.Provider>
// }

import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthContextProvider = ({children}) => { // Change 'Children' to 'children' here
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || "")

    return (
        <AuthContext.Provider value={{authUser, setAuthUser}}>
            {children} {/* Use 'children' instead of 'Children' */}
        </AuthContext.Provider>
    );
}


