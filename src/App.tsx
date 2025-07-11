import axios from 'axios';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const getUsers = async() => {
      const users = await axios.get('https://tangible-frog-production.up.railway.app/users')
      console.log(users)
    }
    getUsers()
  }, [])
  return (
    <div>
      
    </div>
  );
};

export default App;