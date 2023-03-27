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
    <div className='grid h-screen place-items-center'>
        <h1 className="text-7xl mt-40 z-10">BE KIND TO YOUR MIND</h1>
        <img src={UserPageFoto} className="max-w-l min-h-full"/>
    </div>
    </>
  )
}

export default UserPage