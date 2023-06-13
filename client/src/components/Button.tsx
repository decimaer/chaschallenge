import React from 'react';
import { Props } from '../types/Button';

const presetStyling = {
   default: ' w-full h-[50px] rounded-[15px] font-manrope font-bold ',
   green: ' bg-buttonGreen ',
   pink: ' bg-buttonPink ',
};

const Button = ({ type, text, styling, preset }: Props) => {
   return (
      <button
         className={
            preset &&
            presetStyling.default +
               presetStyling[preset] +
               (styling ? styling : '')
         }
         type={type}
      >
         {text}
      </button>
   );
};

export default Button;
