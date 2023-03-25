import { Component } from "react";
import "./NavbarStyles.css";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../firebase/auth-service";
import { useAuthContext } from "../../context/AuthContext";
import { HOME_URL } from "../../constants/urls";

export function Navbar() {
  const navigate = useNavigate();
  const { user, isLoadingUser } = useAuthContext();

  const handleLogout = async () => {
    await logout(() => navigate(HOME_URL));
  };

  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Afterglow</h1>
        <ul className="nav-menu">
          <li>
            <Link to="/catalog">
              <button className="nav-links">Catalog</button>
            </Link>
            <Link to="/about">
              <button className="nav-links">About</button>
            </Link>
          </li>
        </ul>
        {!isLoadingUser && (
           <ul className="lista">
            {!!user ? (
              <>
                {/* <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
                  <Link to={PROFILE_URL} className={styles.link}>
                    <div className={styles.userAvatar} />
                    <span>{user.name}</span>
                  </Link>
                </li>
                <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
                  <button
                    type="button"
                    className={`${styles.link} ${styles.logoutBtn}`}
                    onClick={handleLogout}
                  >
                    <span>Salir</span>
                  </button>
                </li> */}
              </>
            ) : (
              <>
                {/* <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
                  <Link to={LOGIN_URL} className={styles.link}>
                    <span>Iniciar sesión</span>
                  </Link>
                </li>
                <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
                  <Link to={REGISTER_URL} className={styles.link}>
                    <span>Registro</span>
                  </Link>
                </li> */}
              </>
            )}
          </ul>
        )}
      </nav>
    </>
  );
}
