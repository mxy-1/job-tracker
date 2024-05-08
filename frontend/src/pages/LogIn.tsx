import { useState } from "react";
import { Link} from "react-router-dom";

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(true);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        console.log(email, password)
    }

    const handleClick = () => {
        setLogin(prevState => !prevState)
    }

    return (
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
            {
                login ?
                <p>Don't have an account? <Link to="/sign-up" onClick={handleClick}>Sign up</Link></p>
                : <p>Already have an account? <Link to="/log-in"  onClick={handleClick}>Log in</Link></p>
            }
            <button type="submit">Log In</button>
        </form>
    );
}

export default LogIn;