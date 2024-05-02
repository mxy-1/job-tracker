import { useState } from "react";

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Log In</h2>
            <label>Email:
                <input
                    type="email"
                    onChange={e=> setEmail(e.target.value)} />
            </label>

            <label>Password:
                <input
                    type="password"
                    onChange={e=> setPassword(e.target.value)} />
            </label>
            <button type="submit">Log In</button>
        </form>
    );
}

export default LogIn;