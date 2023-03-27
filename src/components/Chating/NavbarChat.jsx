import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../../firebase/config'
import { AuthContext } from '../../context/AuthContext'

const NavbarChat = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='NavbarChat flex items-center bg-sky-700 justify-between text-gris h-12 p-2.5'>
      <span className="logo font-bold">AfterGlow</span>
      <div className="user flex gap-10">
        <img className="bg-gris w-6 h-6 rounded-full object-cover" src={currentUser.photoURL} alt="" />
        <span>{currentUser.name}</span>
        <button className="bg-rojo text-gris text-xs border-none" onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default NavbarChat