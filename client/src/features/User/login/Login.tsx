import React, { useState } from 'react';
import { useForm, Resolver, FieldValues, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


import { Schema, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useContext } from 'react';
import { UserContext } from '../../../state/context';
import Button from '../../../components/Button';

const LoginSchema = z.object({
   email: z.string().email(),
   password: z.string(),
});

function Login() {
   const navigate = useNavigate();
   const [isError, setIsError] = useState<boolean>(false);
   const [errorMessage, setErrorMessage] = useState<string | null>(null);
   const { userState, setUserState }: any = useContext(UserContext);

   const loginUser = async (data: FieldValues) => {
      try {
         console.log(import.meta.env.VITE_API_URL);
         const myHeaders = new Headers();
         myHeaders.append('Content-Type', 'application/json');
   
         const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/users/login`,
            {
               method: 'POST',
               headers: myHeaders,
               body: JSON.stringify(data),
               redirect: 'follow',
            }
         );
   
         if (!response.ok) throw new Error('Failed to login.');
   
         const resData = await response.json();
   
         if (resData.status === 'fail') throw new Error(resData.message);
   
         return resData;
      } catch (error: any) {
         console.error(error.message);
         throw new Error(error.message);
      }
   };

   const [usernameOrEmail, setUsernameOrEmail] = useState('');
   const [password, setPassword] = useState('');

/*    const onSubmit: SubmitHandler<FieldValues> = (data) => {
      loginUser(data);

      console.log(usernameOrEmail, password);
   }; */

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm({
      resolver: zodResolver(LoginSchema),
   });
   console.log(errors);


   const onSubmit: SubmitHandler<FieldValues> = async (fieldData) => {
      try {
         const data = await loginUser(fieldData);
         console.log(data);

         // save data to state
         const userData = {
            token: data.token,
            user: data.data.user,
            stats: data.data.stats,
         };
         setUserState(userData);

         // navigate back to landing page
         navigate('/');
      } catch (error: any) {
         setErrorMessage(error.message);
         setIsError(true);
      }
   };

   return (
      <>
         <h2 className='text-fontDialogue mb-4'>Logga in:</h2>
         <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
            <label>
               <input
                  type="text"
                  {...register('email')}
                  placeholder="Användarnamn eller mejl"
               />
            </label>{' '}
            <input
               type="password"
               {...register('password')}
               placeholder="Lösenord"
            />
            <p className="text-center text-[14px] text-white underline mb-4">
               Har du glömt ditt lösenord? Klicka här!
            </p>
            <Button text="Logga in" type="submit" preset="pink" />
         </form>
      </>

   );
}

export default Login;
