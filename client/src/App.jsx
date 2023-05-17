import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route, Navigate } from "react-router-dom";

import './App.css'
import Home from './features/LandingPage/Home'
import Register from './features/User/register/Register';
import Login from './features/User/login/Login';
import { UserContext } from './state/context';

function App() {

	const [userState, setUserState] = useState({});


  return (
    <UserContext.Provider value={{userState, setUserState}}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
      {/*         <Route path="/contact" element={<Results />} />
          <Route path="/tips" element={<Results />} />
          <Route path="/profile" element={<Results />} />
          <Route path="/rules" element={<Results />} />
          <Route path="/about" element={<Results />} /> */}
          {/* Error page   */}
          <Route path="*" element={<h1>Error 404: Page not found!</h1>} />
        </Routes>
      </div>
    </UserContext.Provider>
  )
}

export default App
