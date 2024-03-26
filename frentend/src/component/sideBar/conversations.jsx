import React from 'react';
import Conversation from './conversation';
import useGetConversations from '../hooks/useGetConversation';
import { getRandomEmoji } from '../../utils/emoji';

function Conversations() {
  const { loading, conversations } = useGetConversations();
  // console.log("Conversation", conversations);
  return (
    <div className='flex flex-col py-2 overflow-auto'>

        {
          conversations.map((conversation, idx) => (
            <Conversation
              key={conversation._id} 
              conversation={conversation}
              emoji={getRandomEmoji()}
              lastIdx={idx === conversations.length - 1}
            />
          ))
        }

        {loading ? <span className='loading loading-spinner'></span> : null}
    </div>
  );
}

export default Conversations;
