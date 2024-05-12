import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearAuthState } from '../../utils/AuthSlice'; // Import your action creator for clearing the token

const useClearToken = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const { pathname } = location;
    const pagesToClearToken = ["/", "/signup", "/forgotpassword"];
    if (pagesToClearToken.includes(pathname)) {
      dispatch(clearAuthState()); // Dispatch the action to clear the token
      navigate("/"); // Navigate to the home page or any other desired location
    }
  }, [location, dispatch, navigate]);
};

export default useClearToken;

