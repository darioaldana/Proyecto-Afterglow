import React from "react";
import NavbarChat from "./NavbarChat"
import Search from "./Search"
import Chats from "./Chats"

const Sidebar = () => {
  return (
    <div className="sidebar flex-1 bg-cyan-600">
      <NavbarChat />
      <Search/>
      <Chats/>
    </div>
  );
};

export default Sidebar;
