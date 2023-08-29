// UserMenu.jsx

import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../store/authSlice';

const UserMenu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    setIsOpen(false);
  }

  return (
    <div className="relative">
    
      <button onClick={() => setIsOpen(!isOpen)}>
        <Avatar /> 
      </button>

      {isOpen && (
        <div className="absolute right-0 w-40 bg-white shadow-md py-2">
          
          {user ? (
            <>
              <MenuItem>My Profile</MenuItem> 
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </>
          ) : (  
            <>
              <MenuItem>Login</MenuItem>
              <MenuItem>Register</MenuItem>
            </>
          )}

        </div>
      )}

    </div>
  );

}

export default UserMenu;