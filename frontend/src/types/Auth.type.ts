// export type AuthType = {
//     user: string | null
// }

// export type ActionType = {
//     type: "LOGIN" | "LOGOUT"
//     payload: string
// } 

// export type AuthContextType = {
//     dispatch: React.Dispatch<ActionType>
// }
type UserType = {
    email: string
    password: string
}
export type AuthType = {
    user: UserType | null
}

export type ActionType = {
    type: "LOGIN" | "LOGOUT"
    payload: UserType| null
} 

export type AuthContextType = {
    dispatch: React.Dispatch<ActionType>
    user: UserType | null
}