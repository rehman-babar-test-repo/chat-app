import React, { useState } from 'react'
import {BsSend} from 'react-icons/bs'
import useSendMessages from '../hooks/useSendMessages'
function MessageInput() {
  const [message, setMessage] = useState("")
  const {loading, sendMessage} = useSendMessages()
  const handleSubmit = async(e)=>{
    e.preventDefault();
    if (!message) return 
    await sendMessage(message)
    setMessage("");
  }
  return (
    <form className='px-4 my-3 ' onSubmit={handleSubmit}>
			<div className='w-full relative'>
				<input 
					type='text'
					className=' border
          			text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white
					fixed top-80
					'
					style={{top:"500px", width:"55%"}}
					placeholder='Send a message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type='submit' className=' inset-y-0 end-0 flex items-center pe-2
				 fixed top-80'
				 style={{top:"497px", marginRight: "25px" }}
				 >
					{loading ? <div className='loading loading-spinner'></div> : <BsSend />}
				</button>
			</div>
		</form>
  )
}

export default MessageInput