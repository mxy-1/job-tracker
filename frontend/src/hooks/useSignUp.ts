import { postSignUp } from '../utils/api';
import { useAuthContext } from './useAuthContext';
import { useState } from 'react';

export const useSignUp = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const {dispatch} = useAuthContext()

    const signUp = async (email: string, password: string) => {
        setIsLoading(true)
        setError(null)

        const response = await postSignUp(email, password)
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        } else if (response.ok) {
            // save user to local storage
            localStorage.setItem("user", JSON.stringify(json))

            // update authcontext
            dispatch({type: "LOGIN", payload: json})

            setIsLoading(false)
        }
    }

    return {signUp, isLoading, error}
}