import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearAuthState, setToken } from '../../utils/AuthSlice'; 

const useClearToken = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const { pathname } = location;
    const pagesToClearToken = ["/", "/signup", "/forgotpassword"];
    
    if (pagesToClearToken.includes(pathname)) {
      dispatch(clearAuthState());
      dispatch(setToken(null)); 
      navigate("/"); 
    }
  }, [location, dispatch, navigate]);
};

export default useClearToken;

