import React from 'react';
import { Link } from 'react-router-dom';
import hamburgerClosed from '/Assets_ChasChallenge/Icons/Menyikoner/Hamburger_closed.svg'
import hamburgerOpen from '/Assets_ChasChallenge/Icons/Menyikoner/Hamburger_open.svg'
import user from '/Assets_ChasChallenge/Icons/Menyikoner/user.svg'
import spela from '/Assets_ChasChallenge/Icons/Menyknappar/Property 1=Konto, Property 2=Aktiv.png'
import regler from '/Assets_ChasChallenge/Icons/Menyknappar/Property 1=Regler, Property 2=Aktiv.png'
import konto from '/Assets_ChasChallenge/Icons/Menyknappar/Property 1=Konto, Property 2=Aktiv.png'
import tips from '/Assets_ChasChallenge/Icons/Menyknappar/Property 1=Tips, Property 2=Aktiv.png'
import omoss from '/Assets_ChasChallenge/Icons/Menyknappar/Property 1=Omoss, Property 2=Aktiv.png'


const menuLinks = [
   {
      icon: spela, //Path to icon, ex "./home.png"
      path: '/', //The path to the site
   },
   {
      icon: regler, //Path to icon, ex "./home.png"
      text: 'Regler', //Where it goes, ex "Contact us"
      path: '/rules', //The path to the site
   },
   {
      icon: konto, //Path to icon, ex "./home.png"
      text: 'Konto', //Where it goes, ex "Contact us"
      path: '/profile', //The path to the site
   },
   {
      icon: tips, //Path to icon, ex "./home.png"
      text: 'Tips', //Where it goes, ex "Contact us"
      path: '/tips', //The path to the site
   },
   {
      icon: omoss, //Path to icon, ex "./home.png"
      text: 'Om oss', //Where it goes, ex "Contact us"
      path: '/about', //The path to the site
   },
   {
      icon: './.png', //Path to icon, ex "./home.png"
      text: 'Kontakt', //Where it goes, ex "Contact us"
      path: '/contact', //The path to the site
   },
];

const Menu = () => {
   //Importera om man är inloggad eller inte
   const [isOpen, setIsOpen] = React.useState(false);

   return (
      <>
      <div>

      </div>
         <img 
            src={user} 
            alt=""
            className='mr-[34px]' />
         <img
            id="menu"
            src={isOpen ? hamburgerOpen : hamburgerClosed}
            alt={isOpen ? 'Close Menu' : 'Open Menu'}
            className='h-[19px] w-[30px] mr-[19px]'
            onClick={() => setIsOpen(!isOpen)}
         />
         <div className='bg-purpleHeader absolute right-0 mt-9 rounded-bl-lg'>
            {
               //Is the menu open?
               isOpen ? (
                  <div className='p-4'>
                     {menuLinks.map((item, index) => {
                        return (
                           <Link
                              to={item.path}
                              className='rounded-lg'
                              key={index}
                           >
                              <img src={item.icon} className='mt-2' alt="" />
                           </Link>
                        );
                     })}
                  </div>
               ) : (
                  //Is it closed?
                  <div></div>
               )
            }
         </div>
      </>
   );
};

export default Menu;
