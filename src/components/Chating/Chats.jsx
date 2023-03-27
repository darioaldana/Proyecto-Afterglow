import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../firebase/config";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="chats">
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div
          className="userChat p-2.5 flex items-center gap-2.5 text-white cursor-pointer hover:bg-cyan-900"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img className="bg-gray-400 w-6 h-6 rounded-full object-cover" src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span className="text-lg font-medium">{chat[1].userInfo.name}</span>
            <p className="text-sm text-gray-700">{`${(chat[1].lastMessage?.text).substring(0, 50) + "..."}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
