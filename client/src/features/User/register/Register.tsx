import React, { useState } from 'react';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';

import { Schema, z } from 'zod';
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

function Register() {
   const onSubmit: SubmitHandler<FieldValues> = (data) => {
      // event.preventDefault();

      createAccount(data);
      console.log(data);
   };

   const createAccount = (data: FieldValues) => {
      console.log(import.meta.env.API_URL);
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      fetch(`http://127.0.0.1:8888/api/users`, {
         method: 'POST',
         headers: myHeaders,
         body: JSON.stringify(data),
         redirect: 'follow',
      })
         .then((response) => response.text())
         .then((result) => console.log(result))
         .catch((error) => console.log('error', error));
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
