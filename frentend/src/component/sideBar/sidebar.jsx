import React from 'react'
import SearchBox from './searchBox'
import Conversations from './conversations'
import LogoutButton from './logoutButton'

function SideBar() {  
  return (
    <div className=' flex flex-col border-r border-slate-500 p-4'>
      <SearchBox/>
      <div className=' divider px-3'></div>
      <Conversations/>
      <LogoutButton/>
    </div>
  )
}

export default SideBar