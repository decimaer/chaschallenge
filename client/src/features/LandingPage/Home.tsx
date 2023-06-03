import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

import imgController from '/public/Assets_ChasChallenge/Icons/Logo/Property 1=greenpinklight, Property 2=pictorial.svg';

const Home = () => {
   return (
      <>
         <img className="h-24" src={imgController} />
         <h2>Tänk globalt agera lokalt!</h2>
         <p>En inbjudande kul text som får folk att vilja gå med</p>

         <section>
            <p>Vill du också var med</p>
            <Link to={'register'}>
               <Button text="Skapa ett konto" />
            </Link>
         </section>
         <section>
            <p>Redan en i gänget?</p>
            <Link to={'login'}>
               <Button text="Logga in" />
            </Link>
         </section>
      </>
   );
};

export default Home;
