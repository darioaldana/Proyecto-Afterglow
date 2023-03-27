import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { USER_PAGE } from "../../constants/urls"

function Public({ children }) {
  const { currentUser } = useContext(AuthContext);

    if (currentUser) {
      return <Navigate to={USER_PAGE} />;
    }

    return children;
}

export default Public