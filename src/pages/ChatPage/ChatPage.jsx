import React from "react";
import Sidebar from "../../components/Chating/Sidebar";
import Chat from "../../components/Chating/Chat";

function ChatPage() {
  return (
    <div className="bg-azul h-screen flex items-center justify-center">
      <div className="border border-solid border-white rounded-lg w-4/6 h-4/5 flex">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default ChatPage;
