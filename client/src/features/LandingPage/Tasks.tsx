import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../state/context';
import { UserContextType } from '../../types/StateTypes';

import UserLevels from '../../components/UserLevels';
import UserTasks from '../../components/UserTasks';





const Tasks = () => {
   

   return (
      <>
         <div
            className="flex flex-col justify-center items-center
            font-josefin font-bold text-fontGreen "
         >
            <h1 className="text-3xl">Välkommen</h1>
            <h1 className="text-3xl">User</h1>
         </div>
         <div
            className="w-[194px] h-[194px] border-4 rounded-full
            mt-[10px]"
         ></div>
         <UserLevels />
         <div className="flex flex-col justify-center items-center mt-[27px]">
            <h4 className="text-lg font-semibold text-fontDialogue">
               Poäng: 000
            </h4>
            <p className="text-fontPink">Poäng kvar till nästa nivå: 000</p>
         </div>
         <h3 className="mt-[46px] text-fontYellow">Vad har du gjort idag?</h3>
         <UserTasks />
      </>
   );
};

export default Tasks;
