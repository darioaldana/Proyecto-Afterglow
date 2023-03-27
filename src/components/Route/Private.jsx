import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { HOME_URL } from "../../constants/urls"

function Private({ children }) {
  const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
      return <Navigate to={HOME_URL} />;
    }

    return children;
}

export default Private