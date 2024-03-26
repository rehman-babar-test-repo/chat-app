import React from 'react'
import { useAuthContext } from '../../context/authContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

function Message({message}) {
    const time = extractTime(message.createdAt)
    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversation()
    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? 'bg-blue-500' : '';
    const shakeClass = message.shouldShake? "shake" : ""
    
    
return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
        <time className=" chat-footer opacity-50 text-xs flex gap-1 items-center ">{time}</time>
</div>
        
    
)
}

export default Message