import React from 'react';
import { Props } from '../types/ErrorMessage';

const ErrorMessage = ({ message }: Props) => {
   return <p className="text-red-600 font-bold">Error: {message}</p>;
};

export default ErrorMessage;
