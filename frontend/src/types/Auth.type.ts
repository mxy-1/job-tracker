export type AuthType = {
    user: string | null
}

export type ActionType = {
    type: "LOGIN" | "LOGOUT"
    payload: string
} 

export type AuthContextType = {
    dispatch: React.Dispatch<ActionType>
}