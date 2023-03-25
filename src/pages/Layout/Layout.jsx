import { Navbar } from "../../components/NavBar/Navbar";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "../../context/AuthContext";

export function Layout() {
  return (
    <AuthContextProvider>
      <main>
        <Navbar />

        <section className="body">
          <Outlet />
        </section>
      </main>
    </AuthContextProvider>
  );
}

export default Layout