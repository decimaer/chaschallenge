import React from 'react';
import { Props } from '../types/Button';

const Button = ({ text }: Props) => {
   return <button type="button">{text}</button>;
};

export default Button;
