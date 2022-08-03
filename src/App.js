import React, { useEffect } from 'react'
import Login from './components/Login'
import Sounds from './components/Sounds';
import { reducerCases } from './utils/Constants';
import { useStateProvider } from './utils/StateProvider';

function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if(hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({ type: reducerCases.SET_TOKEN, token})
      // console.log(token);
    }

  }, [dispatch])
  return (
    <div>
      {
      
      token ? <Sounds /> : <Login />
      }
    </div>
  )
}

export default App