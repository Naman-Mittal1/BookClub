import React, {useState, useEffect} from 'react'

const ProfilePage = () => {

    const [user, setUser] = useState(null);
  
    useEffect(() => {
      getCurrentUser().then(user => setUser(user));
    }, []);
  
    const handleDelete = async () => {
      await deleteAccount();
      // redirect to home
    }
  
    function getCurrentUser() {
        return 0
      }
      
      function deleteAccount() {
        return 0
      }

    return (
      <>
        <h1>{user.name}</h1>  
        <p>{user.email}</p>
        <p>{user.username}</p>
  
        <button onClick={handleDelete}>
          Delete Account
        </button>
      </>
    )
  }

export default ProfilePage