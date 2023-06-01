import React, { useState } from 'react';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import ErrorMessage from '../../../components/ErrorMessage';
import { FormValues } from '../../../types/Register';

import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { UserContext } from '../../../state/context';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const FormSchema = z.object({
   name: z.string().min(1, { message: 'Username is required.' }),
   email: z.string().email(),
   password: z
      .string()
      .min(8)
      .regex(/^(?=.*[!@#$%^&*])/, {
         message:
            'Password must contain at least one special character (!@#$%^&*), and must be atleast 8 characters.',
      }),
   passwordConfirm:
      z.string() /* .refine(passwordConfirm => passwordConfirm === FormSchema.password, { message: "Passwords do not match." }) */,
   location: z.string().min(1, { message: 'Location is required.' }),
   agreeTerms: z.literal(true, {
      errorMap: () => ({ message: 'You must accept Terms and Conditions' }),
   }),
});

const createAccount = async (data: FieldValues) => {
   try {
      console.log(import.meta.env.VITE_API_URL);
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const response = await fetch(
         `${import.meta.env.VITE_API_URL}/api/users`,
         {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(data),
            redirect: 'follow',
         }
      );

      if (!response.ok) throw new Error('Failed to register user.');

      const resData = await response.json();

      if (resData.status === 'fail') throw new Error(resData.message);

      return resData;
   } catch (error: any) {
      console.error(error.message);
      throw new Error(error.message);
   }
};

function Register() {
   const navigate = useNavigate();
   const { userState, setUserState }: any = useContext(UserContext);
   const [isError, setIsError] = useState<boolean>(false);
   const [errorMessage, setErrorMessage] = useState<string | null>(null);

   const onSubmit: SubmitHandler<FieldValues> = async (fieldData) => {
      try {
         const data = await createAccount(fieldData);
         console.log(data);

         // save data to state
         const userData = {
            token: data.token,
            user: data.user,
            stats: data.stats,
         };
         setUserState(userData);

         // navigate back to landing page
         navigate('/');
      } catch (error: any) {
         setErrorMessage(error.message);
         setIsError(true);
      }
   };

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormValues>({
      resolver: zodResolver(FormSchema),
   });

   return (
      <>
         <h2>Registrera dig:</h2>
         <form onSubmit={handleSubmit(onSubmit)} className="flex-column">
            {isError && <ErrorMessage message={errorMessage} />}
            {errors.name && <ErrorMessage message={errors.name.message} />}
            <label>
               <input
                  type="text"
                  placeholder="Skapa ett användarnamn"
                  {...register('name')}
               />
            </label>

            <label>
               {errors.email && <ErrorMessage message={errors.email.message} />}
               <input
                  type="email"
                  placeholder="Skriv din mejl"
                  {...register('email')}
               />
            </label>
            {errors.password && (
               <ErrorMessage message={errors.password.message} />
            )}
            <label>
               <input
                  type="password"
                  placeholder="Skapa lösenord"
                  {...register('password')}
               />
            </label>

            {errors.passwordConfirm && (
               <ErrorMessage message={errors.passwordConfirm.message} />
            )}
            <label>
               <input
                  type="password"
                  placeholder="Bekräfta lösenord"
                  {...register('passwordConfirm')}
               />
            </label>

            {errors.location && (
               <ErrorMessage message={errors.location.message} />
            )}
            <label>
               <input
                  type="text"
                  placeholder="Välj län"
                  {...register('location')}
               />
            </label>

            {errors.agreeTerms && (
               <ErrorMessage message={errors.agreeTerms.message} />
            )}
            <label>
               <input type="checkbox" {...register('agreeTerms')} />
            </label>

            <button type="submit">Register</button>
         </form>
      </>
   );
}

export default Register;
