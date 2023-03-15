import React from 'react'
import Sidebar from '../../components/Chating/Sidebar'
import Chat from '../../components/Chating/Chat'

const ChatPage = () => {
  return (
    <div className="home bg-turquesa-1 h-screen flex justify-center items-center">
      <div className="container border-white flex rounded-xl border-2 border-solid w-2/3 h-4/5 overflow-hidden">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default ChatPage