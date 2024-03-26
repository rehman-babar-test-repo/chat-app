import { useState } from 'react';
import { useAuthContext } from '../../context/authContext';
import toast from 'react-hot-toast';

function UseLogout() {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        try {
            setLoading(true); // Set loading to true when logout process starts
            const res = await fetch("/api/auth/logout", {
                method: "post",
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            localStorage.removeItem("chat-user");
            setAuthUser(null);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false); // Set loading to false when logout process finishes
        }
    }

    return { loading, logout }; // Return loading state and logout function
}

export default UseLogout;
