import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../component/hooks/useLogin';
// import useLogin from '../../component/hooks/useLogin'
function Login() {
    const [userName, setUserName] =useState ("");
    const [password, setPassword] =useState ("");
    const {loading, login} = useLogin()
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await login(userName, password)
    }
return (
    <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
        <div className='p-6 w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className=' text-3xl text-gray-300 font-semibold text-center'>Login
            <span className=' text-blue-400'> ChatApp</span></h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className=' label p-2'>
                        <span className=' label-text text-base'>UserName</span>
                    </label>
                    <input type="text" 
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                    placeholder='Enter username' 
                    className=' input input-bordered h-10 w-full' />
                </div>

                <div>
                    <label className=' label p-2'>
                        <span className=' label-text text-base'>Password</span>
                    </label>
                    <input type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder='Enter password'
                    className=' input input-bordered h-10 w-full' />
                </div>
                <Link to="/signup" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                    Don't have an account?
                </Link>
                <div>
                    <button type='submit' className="btn btn-block btn-sm mt-2" disabled={loading}>
                        {loading? <span className='loading loading-spinner'></span> : "login"}
                    </button>
                </div>
            </form>
        </div>
    </div>
        )
}

export default Login