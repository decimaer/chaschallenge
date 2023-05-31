import { createContext } from 'react';
import { UserContextType } from '../types/StateTypes';

export const UserContext = createContext<UserContextType | null>(null);
