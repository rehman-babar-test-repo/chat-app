import React, { useEffect, useState } from 'react'
import useConversation from '../../zustand/useConversation';
import toast from 'react-hot-toast';

function useGetMessages() {
    const [loading, setLoading] = useState(false);
    const {selectedConversation, setMessages, messages} = useConversation();

    useEffect(() => {
        const getMessage = async()=>{
            setLoading(true)
            try {
                const res = await fetch(`/api/messages/${selectedConversation._id}`)
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error)
                }
                setMessages(data)
            } catch (error) {
                toast.error(error.messages)
            } finally{
                setLoading(false)
            }
        }
        if(selectedConversation?._id) getMessage();
    }, [selectedConversation?._id, setMessages])

    return {loading, messages}
    

}

export default useGetMessages