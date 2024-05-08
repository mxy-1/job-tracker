import { createContext, useReducer } from "react"
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

    console.log("AuthContext state:", state)

    return (
        <AuthContext.Provider value={{...state, dispatch}} >
        { children }
        </AuthContext.Provider>
    )
}