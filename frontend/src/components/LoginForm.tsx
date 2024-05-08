import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./LoginForm.style.css"
import { useSignUp } from "../hooks/useSignUp"

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(true);

    const {signUp, error, isLoading} = useSignUp()

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        await signUp(email, password)
    }

    const handleClick = () => {
        setLogin(prevState => !prevState)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>{login ? "Log In" : "Sign up"}</h2>
                <label>Email:
                    <input
                        type="email"
                        onChange={e => setEmail(e.target.value)} />
                </label>
                <label>Password:
                    <input
                        type="password"
                        onChange={e => setPassword(e.target.value)} />
                </label>
                <button disabled={isLoading} type="submit" className={isLoading? "disabled submit" : "submit"}>{login ? "Log in" : "Sign up"}</button>

            </form>
            {
                login ?
                    <p className='account'>Don't have an account? <Link to="/sign-up" className='login' onClick={handleClick}>Sign up</Link></p>
                    : <p className='account'>Already have an account? <Link to="/log-in" className='login' onClick={handleClick}>Log in</Link></p>
            }
            {error && <p className='error'>{error}</p>}
        </div>
    );
}

export default LoginForm;