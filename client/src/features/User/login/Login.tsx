import React, { useState } from 'react';
import { useForm, Resolver, FieldValues, SubmitHandler } from 'react-hook-form';

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
   const { userState, setUserState }: any = useContext(UserContext);

   const loginUser = (data: FieldValues) => {
      console.log(import.meta.env.API_URL);
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      fetch(`http://127.0.0.1:8888/api/users/login`, {
         method: 'POST',
         headers: myHeaders,
         body: JSON.stringify(data),
         redirect: 'follow',
      })
         .then((response) => response.text())
         .then((result): any => {
            console.log(userState);
            console.log(setUserState);

            setUserState({ ...userState, jwt: JSON.parse(result).token });
         })
         .then(() => {
            console.log(userState);
         })
         .catch((error) => console.log('error', error));
   };

   const [usernameOrEmail, setUsernameOrEmail] = useState('');
   const [password, setPassword] = useState('');

   const onSubmit: SubmitHandler<FieldValues> = (data) => {
      loginUser(data);

      console.log(usernameOrEmail, password);
   };

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm({
      resolver: zodResolver(LoginSchema),
   });
   console.log(errors);

   return (
      <>
         <h2>Logga in:</h2>
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
            <p className="text-center text-[14px] text-white underline">
               Har du glömt ditt lösenord? Klicka här!
            </p>
            <Button text="Logga in" type="submit" preset="pink" />
         </form>
      </>

   );
}

export default Login;
