import React from 'react'
import { useState } from "react";
import UserPageFoto from '../../assets/UserPage.png'
import {AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai"
import {CHAT_PAGE, HOME_URL, LOGIN_URL, REGISTER_URL, USER_PAGE, REVIEW_PAGE,CATALOG_PAGE,PROFILE_PAGE, APPOINTMENTS_PAGE} from "../../constants/urls";
import { Link} from "react-router-dom";
import styles from './UserPage.module.css'
function UserPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className='grid h-screen place-items-center'>
        <h1 className="text-5xl mt-[80px] z-10 font-bold">BE KIND TO YOUR MIND</h1>
        <img src={UserPageFoto} className="max-w-md min-h-full"/>
        <Link to={CATALOG_PAGE}>
          <button className='block h-16 bg-red-600 text-white font-bold text-xl leading-6 cursor-pointer rounded-2xl w-60 hover:scale-105 hover:bg-red-500'>
            AGENDAR CITA
          </button>
        </Link>
    </div>
    </>
  )
}

export default UserPage