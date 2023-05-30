import React, { useState } from 'react';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import ErrorMessage from '../../../components/ErrorMessage';

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
   const [isError, setIsError] = useState(false);
   const [errorMessage, setErrorMessage] = useState(null);

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
      watch,
      formState: { errors },
   } = useForm({
      resolver: zodResolver(FormSchema),
   });
   console.log(errors);

   return (
      <div>
         <Header />
         {isError && <ErrorMessage message={errorMessage} />}
         <form onSubmit={handleSubmit(onSubmit)}>
            <label>
               <input
                  type="text"
                  placeholder="Enter your Username"
                  {...register('name')}
               />
            </label>{' '}
            <br />
            <label>
               <input
                  type="email"
                  placeholder="Enter your Email"
                  {...register('email')}
               />
               {/* <p>{errors.email && errors.email.message}</p> */}
            </label>{' '}
            <br />
            <label>
               <input
                  type="password"
                  placeholder="Password"
                  {...register('password')}
               />
            </label>{' '}
            <br />
            <label>
               <input
                  type="password"
                  placeholder="Confirm Password"
                  {...register('passwordConfirm')}
               />
            </label>{' '}
            <br />
            <label>
               <input
                  type="text"
                  placeholder="Location"
                  {...register('location')}
               />
            </label>{' '}
            <br />
            <label>
               <input type="checkbox" {...register('agreeTerms')} />
            </label>{' '}
            <br />
            <button type="submit">Register</button>
         </form>
         <Footer />
      </div>
   );
}

export default Register;
