import {  useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../../context/authContext'

function useSignup() {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()

    const signup = async({fullName, userName, password, confermPassword, gender})=>{
    const success = handleInputErrors({fullName, userName, password, confermPassword, gender})
    if (!success) return;

    setLoading(true);
    try {
        const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, userName, password, confermPassword, gender })
            });
                
    const data =await res.json();
    if (data.error) {
        throw new Error(data.error)
    }
    console.log("Registration successful:", data);
    localStorage.setItem("chat-user", JSON.stringify(data))
    setAuthUser(data)

    } catch (error) {
        toast.error(error.message)
    } finally{
        setLoading(false);

    }
    }
    return {loading, signup}
}

export default useSignup

function handleInputErrors ({fullName, userName, password, confermPassword, gender}){
    if (!fullName || !userName || !password || !confermPassword || !gender) {
        toast.error('please fill in all fields')
        return false
    }
    if (password !== confermPassword) {
        toast.error('password do not match')
        return false
    }

    if (password < 6) {
        toast.error('password must be at least 6 character')
        return false
    }

    return true

}