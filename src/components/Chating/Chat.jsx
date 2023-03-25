import React, { useContext } from "react";
// import Cam from "../../img/cam.png";
// import Add from "../../img/add.png";
// import More from "../../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat flex-2">
      <div className="chatInfo h-12 bg-turquesa-3 flex items-center justify-between p-2.5 text-gray-400">
        <span className="text-lg font-medium">{data.user?.name}</span>
        <div className="chatIcons flex gap-2.5">
      {/* <img className="h-12 cursor-pointer" src={Cam} alt="" />
          <img className="h-12 cursor-pointer" src={Add} alt="" />
          <img className="h-12 cursor-pointer" src={More} alt="" /> */}
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
