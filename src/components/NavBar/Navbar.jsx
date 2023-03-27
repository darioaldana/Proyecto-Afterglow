import { Component } from "react";
import styles from "./NavbarStyles.module.css";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../firebase/auth-service";
import { useAuthContext } from "../../context/AuthContext";
import { HOME_URL, CATALOG_PAGE, REVIEW_PAGE, CHAT_PAGE, PROFILE_PAGE } from "../../constants/urls";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export function Navbar() {
  const navigate = useNavigate();
  const { user, isLoadingUser } = useAuthContext();
  const { currentUser } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout(() => navigate(HOME_URL));
  };

  if (!currentUser){
    return (
      <>
        <nav className={styles.NavbarItems}>
          <h1 className={styles.navbar_logo}>Afterglow</h1>
          <ul className={styles.nav_menu}>
            <li className={styles.nav_menu_li}>
              <Link to={CATALOG_PAGE}>
                <button className={styles.nav_links}>Catalog</button>
              </Link>
              <Link to="/about">
                <button className={styles.nav_links}>About</button>
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
  } else {
    return (
      <>
        <nav className={styles.NavbarItems}>
          <ul className={styles.nav_menu_logged}>
            <li className={styles.nav_menu_li}>
              <Link to={CATALOG_PAGE}>
                <button className={styles.nav_links}>Catalog</button>
              </Link>
              <Link to={REVIEW_PAGE}>
                <button className={styles.nav_links}>Feedback</button>
              </Link>
              <Link to={PROFILE_PAGE}>
                <button className={styles.nav_links}>Profile</button>
              </Link>
              <Link to={CHAT_PAGE}>
                <button className={styles.nav_links}>Chat</button>
              </Link>

              <button className={styles.nav_links} onClick={handleLogout}>Logout</button>

            </li>
          </ul>
        </nav>
        </>
    )
  }
  
}

export default Navbar