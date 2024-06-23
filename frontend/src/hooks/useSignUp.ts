import { postLogIn, postSignUp } from '../utils/api';
import { useAuthContext } from './useAuthContext';
import { useState } from 'react';

export const useSignUp = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const {dispatch} = useAuthContext()

    const signUp = async (email: string, password: string, isSignUp: boolean) => {
        setIsLoading(true)
        setError(null)

        let response

        if (isSignUp) {
            response = await postSignUp(email, password)
        } else {
            response = await postLogIn(email, password)
        }
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
            return false
        } else if (response.ok) {
            // save user to local storage
            localStorage.setItem("user", JSON.stringify(json))

            // update authcontext
            dispatch({type: "LOGIN", payload: json})

            setIsLoading(false)
            return true
        }
    }

    return {signUp, isLoading, error}
}