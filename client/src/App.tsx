import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";

import './App.css'
import Home from './features/LandingPage/Home'
import Register from './features/User/register/Register';
import Login from './features/User/login/Login';
import Tips from './features/Misc/tips/Tips';
import Contact from './features/Misc/contact/Contact';
import Profile from './features/User/profile/Profile';
import Rules from './features/Misc/rules/Rules';
import About from './features/Misc/about/About';
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
              <Route path="/contact" element={<Contact />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/about" element={<About />} />
          {/* Error page   */}
          <Route path="*" element={<h1>Error 404: Page not found!</h1>} />
        </Routes>
      </div>
    </UserContext.Provider>
  )
}

export default App
