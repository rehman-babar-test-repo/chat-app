import React from 'react'
import SideBar from '../../component/sideBar/sidebar'
import MessageContainer from '../../component/messages/messageContainer'

function Home() {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-0 bg-blue-400'>
      <SideBar/>
      <MessageContainer/>
    </div>
  )
} 

export default Home