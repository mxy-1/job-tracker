import { createContext, useReducer, useEffect } from "react"
import { AuthType, AuthContextType, ActionType } from "../types/Auth.type"

export const AuthContext = createContext({} as AuthContextType)

export const authReducer = (state: AuthType, action: ActionType) => {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload }
        case "LOGOUT": {
            return { user: null }
        }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null 
    })

    // chcek if there is user logged in
    useEffect(() => {
        const user = localStorage.getItem("user")
        if (user) {
            dispatch({type:"LOGIN", payload: JSON.parse(user)})
        }
    }, []);

    console.log("AuthContext state:", state)

    return (
        <AuthContext.Provider value={{...state, dispatch}} >
        { children }
        </AuthContext.Provider>
    )
}