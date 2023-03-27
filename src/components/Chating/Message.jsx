import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`flex gap-5 mb-2.5 ${
        message.senderId === currentUser.uid && "owner"
      }`}
    >
      <div className="messageInfo flex flex-col text-gray-500 font-light">
        <img
          className="w-10 h-10 rounded-50% object-cover"
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div
        className={`max-w-4/5 flex flex-col gap-2.5 ${
          message.senderId === currentUser.uid && "messageContent"
        }`}
      >
        <p
          className={`bg-white py-2.5 px-5 rounded-tl-lg rounded-b-lg ${
            message.senderId === currentUser.uid && "currentP"
          }`}
        >
          {message.text}
        </p>
        {message.img && <img className="w-1/2" src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
