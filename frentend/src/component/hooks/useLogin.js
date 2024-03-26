import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../../context/authContext'

function useLogin() {
const [loading, setLoading] = useState(false)
const {setAuthUser} = useAuthContext()
const login = async (userName, password) => {
    try {
        setLoading(true);
        const res = await fetch("/api/auth/login", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userName, password })
        });

        

        const data = await res.json(); // Await the json() method

        if (data.error) {
            throw new Error(data.error);
        }

        localStorage.setItem("chat-user", JSON.stringify(data));
        setAuthUser(data);
    } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
};
return {loading, login}

}

export default useLogin