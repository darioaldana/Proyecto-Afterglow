import React from "react";
import Sidebar from "../../components/Chating/Sidebar";
import Chat from "../../components/Chating/Chat";

function ChatPage() {
  return (
    <div className="bg-turquesa-3 h-screen flex items-center justify-center flex-col">
      <div className="h-20">
      </div>
      <div className="border border-solid border-white rounded-lg w-4/6 h-4/5 flex overflow-hidden">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default ChatPage;
