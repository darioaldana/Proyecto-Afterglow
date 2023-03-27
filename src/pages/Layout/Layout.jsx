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

          <section className="body">
            <Outlet />
          </section>
        </main>
      </ChatContextProvider>
    </AuthContextProvider>
  );
}

export default Layout;
