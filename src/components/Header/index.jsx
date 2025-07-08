import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../redux/api/auth";
import { auth_token_key } from "../../utils/ApiUrls";
import { removeUser } from "../../redux/slices/User";
import { useDispatch } from "react-redux";

const Header = () => {
  const [logoutHandler] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutHandler().unwrap();
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      localStorage.removeItem(auth_token_key);
      dispatch(removeUser());
      navigate("/login");
    }
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow rounded-xl mb-4">
      <h1 className="text-xl font-bold text-primary">Smart Home Dashboard</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
