import React from 'react';

import fb from '../../public/Assets_ChasChallenge/Icons/Menyikoner/facebook.svg';
import ig from '../../public/Assets_ChasChallenge/Icons/Menyikoner/Instagram.svg';

const Footer = () => {
   return (
      <footer className="bg-purpleHeader flex justify-center items-center  h-[43px] space-x-4">
         <a href="https://www.facebook.com">
            <img className="w-7 " src={fb} alt="Facebook" />
         </a>
         <a href="https://www.instagram.com">
            <img className="w-7" src={ig} alt="instagram" />
         </a>
      </footer>
   );
};

export default Footer;
