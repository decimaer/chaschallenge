import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type Props = {
   type: 'submit' | 'reset' | 'button' | undefined;
   text: string;
   styling?: string;
   preset?: 'green' | 'pink';
};
