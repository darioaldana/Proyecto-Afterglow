import { Navbar } from "../../components/NavBar/Navbar";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "../../context/AuthContext";
import { ChatContextProvider } from "../../context/ChatContext";

export function Layout() {
  return (
    <AuthContextProvider>
      <ChatContextProvider>
        <main>
          <Navbar />

          <section className="body bg-turquesa-1 box-border p-0 m-0">
            <Outlet />
          </section>
        </main>
      </ChatContextProvider>
    </AuthContextProvider>
  );
}

export default Layout;
