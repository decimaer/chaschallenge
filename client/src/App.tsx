import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import Home from './features/LandingPage/Home';
import Register from './features/User/register/Register';
import Login from './features/User/login/Login';
import Tips from './features/Misc/tips/Tips';
import Contact from './features/Misc/contact/Contact';
import Profile from './features/User/profile/Profile';
import Rules from './features/Misc/rules/Rules';
import About from './features/Misc/about/About';
import Tasks from './features/LandingPage/Tasks';
import { UserContext } from './state/context';
import Header from './components/Header';
import Footer from './components/Footer';
import { UserData } from './types/StateTypes';


function App() {
   const [userState, setUserState] = useState<UserData>({});

   return (
      <UserContext.Provider value={{ userState, setUserState }}>
         <div className="App">
            <Header />
            <main
               className="flex flex-col  items-center 
         bg-purplePrimary px-[25px] pt-8"
            >
               <Routes>
                  <Route path="/" element={<Home />} />
                  {/* Temporary path while building */}
                  <Route path="/tasks" element={<Tasks />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/tips" element={<Tips />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/rules" element={<Rules />} />
                  <Route path="/about" element={<About />} />
                  {/* Error page   */}
                  <Route
                     path="*"
                     element={<h1>Error 404: Page not found!</h1>}
                  />
               </Routes>
            </main>
            <Footer />
         </div>
      </UserContext.Provider>
   );
}

export default App;
