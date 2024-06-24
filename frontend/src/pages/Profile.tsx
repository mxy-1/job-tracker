import LoginForm from "../components/LoginForm";
import UserProfile from "../components/UserProfile";
import { useAuthContext } from "../hooks/useAuthContext";

const Profile = () => {
    const { user } = useAuthContext()

    return (
        <div>
            {user ? <UserProfile /> : <LoginForm />}
        </div>
    )
}

export default Profile;