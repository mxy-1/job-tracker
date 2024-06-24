import { useLogOut } from '../hooks/useLogOut';
import { useAuthContext } from '../hooks/useAuthContext';

const UserProfile = () => {
    const { logOut } = useLogOut()
    const { user } = useAuthContext()

    const handleLogOut = () => {
        logOut()
    }

    return (
        <div>
            <p>{user?.email}</p>
            <button className='submit' onClick={handleLogOut}>Log Out</button>
        </div>
    );
}
 
export default UserProfile;