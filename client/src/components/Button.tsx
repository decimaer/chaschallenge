import React from 'react';
import { Props } from '../types/Button';

const Button = ({ text, styling }: Props) => {
   return (
      <button className={styling} type="button">
         {text}
      </button>
   );
};

export default Button;
