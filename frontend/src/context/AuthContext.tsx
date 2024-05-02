import { createContext, useReducer } from "react"

export const AuthContext = createContext({} as AuthContextType)

type AuthType = {
    user: string | null
}

type ActionType = {
    type: "LOGIN" | "LOGOUT", payload: string
} 

type AuthContextType = {
    dispatch: React.Dispatch<ActionType>
}

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