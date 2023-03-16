import React from 'react'
import { useState } from "react";
import UserPageFoto from '../../assets/UserPage.png'
import {AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai"
import {CHAT_PAGE, HOME_URL, LOGIN_URL, REGISTER_URL, USER_PAGE, REVIEW_PAGE,CATALOG_PAGE,PROFILE_PAGE,DATE_PAGE } from "../../constants/urls";
import { Link} from "react-router-dom";
import styles from './UserPage.module.css'
function UserPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className='relative'>
      <button 
      onClick={() => setIsOpen((prev) => !prev)}
      className="bg-teal-400 p-4 w-20 flex items-start justify-between font-semibold text-md rounded-lg tracking-winder border-transparente active:border-white active:text-white">
        Menu
        {!isOpen ? (
          <AiOutlineCaretDown className='h-6 bg-teal-400'/>
        ):(
          <AiOutlineCaretUp className='h-6 bg-teal-400'/>
          )}
      </button>
      {isOpen && (
        <div className='bg-teal-400 absolute top-20 flex flex-col items-start rounded-lg p-2 w-50'>
          <div className='flex w-20 justify-between bg-teal-200 hover:bg-blue-300 cursor-pointer p-4 rounded-r-lg  hover:border-l-white border-l-4 '>
            <Link to={PROFILE_PAGE} className="bg-teal-200  hover:bg-blue-300">Profile</Link>
          </div>
          <div className='flex w-20 justify-between bg-teal-200 hover:bg-blue-300 cursor-pointer p-4 rounded-r-lg  hover:border-l-white border-l-4 '>
            <Link to={DATE_PAGE} className="bg-teal-200  hover:bg-blue-300">Appointments</Link>
          </div>
          <div className='flex w-20 justify-between bg-teal-200 hover:bg-blue-300 cursor-pointer p-4 rounded-r-lg  hover:border-l-white border-l-4 '>
            <Link to={CATALOG_PAGE} className="bg-teal-200  hover:bg-blue-300">Catalog</Link>
          </div>
          <div className='flex w-20 justify-between bg-teal-200 hover:bg-blue-300 cursor-pointer p-4 rounded-r-lg  hover:border-l-white border-l-4 '>
            <Link to={CHAT_PAGE} className="bg-teal-200  hover:bg-blue-300">Chat</Link>
          </div>
          <div className='flex w-20 justify-between bg-teal-200 hover:bg-blue-300 cursor-pointer p-4 rounded-r-lg  hover:border-l-white border-l-4 '>
            <Link to={REVIEW_PAGE} className="bg-teal-200  hover:bg-blue-300">Review</Link>
          </div>
        </div>
      )}
    </div>
    <div className='grid h-screen place-items-center'>
        <h1 className="text-7xl">BE KIND TO YOUR MIND</h1>
        <img src={UserPageFoto} className="max-w-l min-h-full"/>
    </div>
    </>
  )
}

export default UserPage