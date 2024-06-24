import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import "./LoginForm.style.css"
import { useSignUp } from "../hooks/useSignUp"
// import useLogIn from '../hooks/useLogIn';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(true);

    const { signUp, error, isLoading } = useSignUp()

    // const {logIn, error, isLoading} = useLogIn()
    const navigate = useNavigate()
    const { state } = useLocation()

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        let success

        if (login) {
            success = await signUp(email, password, false)

        } else {
            success = await signUp(email, password, true)
        }

        if (success && state) {
            navigate(state.prev)
        }
    }

    const handleClick = () => {
        setLogin(prevState => !prevState)
    }

    return (
        <div className='application-container-wrapper'>
            <div className='application-container'>
                <form onSubmit={handleSubmit}>
                    <h2 className='login-text'>{login ? "Log in" : "Sign up"}</h2>
                    <label>Email:
                        <input
                            type="email"
                            onChange={e => setEmail(e.target.value)}
                            autoComplete='email' />
                    </label>
                    <label>Password:
                        <input
                            type="password"
                            onChange={e => setPassword(e.target.value)} />
                    </label>
                    <button disabled={isLoading} type="submit" className="submit">{login ? "Log in" : "Sign up"}</button>
                </form>
                {
                    login ?
                        <p className='account'>Don't have an account? <Link to="/sign-up" className='login' onClick={handleClick}>Sign up</Link></p>
                        : <p className='account'>Already have an account? <Link to="/log-in" className='login' onClick={handleClick}>Log in</Link></p>
                }
                {error && <p className='error'>{error}</p>}
            </div>
        </div>
    );
}

export default LoginForm;