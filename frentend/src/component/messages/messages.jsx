import React, { useEffect, useRef } from 'react';
import Message from './message'; // corrected import path
import useGetMessages from '../hooks/useGetMessages';
import MessageSkeleton from '../skeltens/skeltenMessage'
import useListenMessages from '../hooks/useKistenMessages';

function Messages() {
  const { loading, messages } = useGetMessages();
  useListenMessages()
  const lastMessageRef = useRef()
    useEffect(() => {
        setTimeout(()=>{
          lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
        },100)
    }, [messages])

  return (
    // <div style={{ maxHeight: '442px', overflowY: 'auto' }}>
      <div style={{ maxHeight: '442px', overflowY: 'auto' }} className='px-4'>
        {
          !loading && messages.length > 0 && messages.map((message) => ( // corrected condition
            <div key={message._id} ref={lastMessageRef}>
              <Message message={message}/>
            </div>
          ))
        }
        {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
        {!loading && messages.length === 0 && (
          <p className='text-center'>Send a message to start conversation</p>
        )}
      </div>
    // </div>
  );
}

export default Messages;
