import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../state/context';
import { UserContextType } from '../../types/StateTypes';

import UserLevels from '../../components/UserLevels';
import UserTasks from '../../components/UserTasks';
import profilePic from '../../../public/Assets_ChasChallenge/Images/Avatarer/Property 1=Avatar1, Property 2=default.png'




const Tasks = () => {

   const user: any = useContext(UserContext)


   return (
      <>
         <div
            className="flex flex-col justify-center items-center
            font-josefin font-bold text-fontGreen mt-8"
         >
            <h1 className="text-3xl">Välkommen</h1>
            <h1 className="text-3xl mb-4">{user?.userState.user.name}</h1>
         </div>

         <img src={profilePic} alt="" className='w-[194px] h-[194px]' />

         {/* <div
            className="w-[194px] h-[194px] border-4 rounded-full
            mt-[10px] justify-center"
            ></div> */}
         <UserLevels />
         <div className="flex flex-col justify-center items-center mt-[27px]">
            <h4 className="text-lg font-semibold text-fontDialogue">
               Poäng: {user?.userState.stats.totalPoints}
            </h4>
            <p className="text-fontPink">Poäng kvar till nästa nivå: {((user?.userState.stats.level + 1) * 1000) - user?.userState.stats.totalPoints}</p>
         </div>
         <h3 className="mt-[46px] text-fontYellow">Vad har du gjort idag?</h3>
         <div className='flex justify-center items-center'>
            <UserTasks />
         </div>
      </>
   );
};

export default Tasks;
