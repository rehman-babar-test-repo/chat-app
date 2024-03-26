import React, { useState } from 'react'
import GenderCheckBox from './genderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../component/hooks/useSignup'

function SignUp() {
  const [ inputs, setInputs ] = useState({
    fullName: '',
    userName: '',
    password: '',
    confermPassword: '',
    gender: '',
  })

  const handleGenderCheckBox = (gender)=> {
    setInputs({...inputs, gender})
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    // console.log(inputs);
    await signup(inputs)
  }

  const {loading, signup} = useSignup()
  return (
    <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
      <div className='p-6 w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-0'>
        <h1 className=' text-3xl text-gray-300 font-semibold text-center'>SignUp
        <span className=' text-blue-400'> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          
          <div>
            <label className='label'>
              <span className=' label-text text-base'>FullName</span>
            </label>
            <input type="text" 
            placeholder="Rehman Babar"
            value={inputs.fullName}
            onChange={(e)=> setInputs({...inputs, fullName: e.target.value})}
            className="input input-bordered w-full" />
          </div>

          {/* {console.log(inputs.fullName)} */}
          <div>
            <label className='label'>
              <span className=' label-text text-base'>UserName</span>
            </label>
            <input type="text" 
            value={inputs.userName}
            onChange={(e)=> setInputs({...inputs, userName: e.target.value})}
            placeholder="rajarehman327" 
            className="input input-bordered w-full" />
          </div>

          <div>
            <label className='label'>
              <span className=' label-text text-base'>password</span>
            </label>
            <input type="password" 
            value={inputs.password}
            onChange={(e)=> setInputs({...inputs, password: e.target.value})}
            placeholder="Enter password" 
            className="input input-bordered w-full " />
          </div>

          <div>
            <label className='label'>
              <span className=' label-text text-base'>Conferm Password</span>
            </label>
            <input type="text" 
            value={inputs.confermPassword}
            onChange={(e)=> setInputs({...inputs, confermPassword: e.target.value})}
            placeholder="Enter above password" 
            className="input input-bordered w-full " />
          </div>

          <GenderCheckBox onCheckBoxChange={handleGenderCheckBox} selectedGender={inputs.gender}/>

          <Link to="/login" className='text-sm hover:underline hover:text-blue-600  inline-block'>
                    Already have an account?
                </Link>
          <div>
          <button
          className="btn btn-block btn-sm mt-2 pr-2"
          disabled={loading}
          >{loading?<span className='loading loading-spinner'></span> : "SignUp"}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp