import { useState } from 'react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { UserContext } from '../../state/context';

import Tasks from './Tasks';

import imgMainLogo from '/public/Assets_ChasChallenge/Icons/Logo/App\ Icon.png';

const Home = () => {
   const { userState, setUserState }: any = useContext(UserContext);

   const [isLoggedIn, setLoggedIn] = useState(userState.token);

   return (
      <>
         {isLoggedIn ? (
            <Tasks />
         ) : (
            <>
               <img className="h-[auto] w-[28vw] mb-8" src={imgMainLogo} />
               <h2 className='text-fontDialogue mb-4'>Tänk globalt agera lokalt!</h2>
               <section className="w-full flex-col mb-[35px]">
                  <p className="text-center text-fontDialogue text-[18px] mb-2">
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
                  <p className="text-center text-fontDialogue text-[18px] mb-2">
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
