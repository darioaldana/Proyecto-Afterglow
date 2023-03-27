import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../../firebase/config'
import { AuthContext } from '../../context/AuthContext'

const NavbarChat = () => {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser.photoURL)

  return (
    <div className='NavbarChat flex items-center bg-sky-700 justify-between text-gris h-12 p-2.5'>
      <span className="logo font-bold bg-sky-700">AfterGlow</span>
      <div className="user flex gap-2 bg-sky-700">
        <img className="bg-gris w-6 h-6 rounded-full object-cover" src={`${currentUser.photoURL}`} alt="" />
        <span className='bg-sky-700'>{currentUser.name}</span>
        <button className="bg-rojo text-gris text-xs border-none" onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default NavbarChat