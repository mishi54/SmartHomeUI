import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../redux/api/auth';
import { auth_token_key } from './ApiUrls';
import { removeUser } from '../redux/slices/User';

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logout();
      dispatch(removeUser());
      localStorage.removeItem(auth_token_key);
      navigate('/login');
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return logoutHandler;
};
