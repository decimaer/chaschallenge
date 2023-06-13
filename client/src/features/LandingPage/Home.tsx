import { useState } from 'react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { UserContext } from '../../state/context';

import Tasks from './Tasks';

import imgController from '/public/Assets_ChasChallenge/Icons/Logo/Property 1=greenpinklight, Property 2=pictorial.svg';

const Home = () => {
   const { userState, setUserState }: any = useContext(UserContext);

   const [isLoggedIn, setLoggedIn] = useState(userState.token);

   return (
      <>
         {isLoggedIn ? (
            <Tasks />
         ) : (
            <>
               <img className="h-24" src={imgController} />
               <h2>Tänk globalt agera lokalt!</h2>
               <section className="w-full flex-col mb-[35px]">
                  <p className="text-center text-fontDialogue text-[18px] ">
                     Vill du också vara med?
                  </p>
                  <Link to={'register'}>
                     <Button
                        type="button"
                        text="Registrera dig"
                        preset="green"
                     />
                  </Link>
               </section>
               <section className="w-full flex-col">
                  <p className="text-center text-fontDialogue text-[18px]">
                     Jag är redan i gänget!
                  </p>
                  <Link to={'login'}>
                     <Button type="button" text="Logga in" preset="pink" />
                  </Link>
               </section>
            </>
         )}
      </>
   );
};

export default Home;
