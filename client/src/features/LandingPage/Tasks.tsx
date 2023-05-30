import { useContext, useState } from 'react';

import Header from '../../components/Header';
import presentSvg from '/Assets_ChasChallenge/Cards/Nivåer/Present_closed.svg';
import taskOneDefault from '/Assets_ChasChallenge/Cards/Taskcards/Property 1=samlat, Property 2=default.svg';
import taskOneHover from '/Assets_ChasChallenge/Cards/Taskcards/Property 1=samlat, Property 2=hover.svg';
import taskOneInactive from '/Assets_ChasChallenge/Cards/Taskcards/Property 1=samlat, Property 2=inactive.svg';

import taskTwoDefault from '/Assets_ChasChallenge/Cards/Taskcards/Property 1=2ndhand, Property 2=default.svg';
import taskTwoHover from '/Assets_ChasChallenge/Cards/Taskcards/Property 1=2ndhand, Property 2=hover.svg';
import taskTwoInactive from '/Assets_ChasChallenge/Cards/Taskcards/Property 1=2ndhand, Property 2=inactive.svg';

import taskThreeDefault from '/Assets_ChasChallenge/Cards/Taskcards/Property 1=återvunnit, Property 2=default.svg';
import taskThreeHover from '/Assets_ChasChallenge/Cards/Taskcards/Property 1=återvunnit, Property 2=hover.svg';
import taskThreeInactive from '/Assets_ChasChallenge/Cards/Taskcards/Property 1=återvunnit, Property 2=inactive.svg';

import taskFourDefault from '/Assets_ChasChallenge/Cards/Taskcards/Property 1=pantat, Property 2=default.svg';
import taskFourHover from '/Assets_ChasChallenge/Cards/Taskcards/Property 1=pantat, Property 2=hover.svg';
import taskFourInactive from '/Assets_ChasChallenge/Cards/Taskcards/Property 1=pantat, Property 2=inactive.svg';

import { UserContext } from '../../state/context';

const Tasks = () => {
   const defaultTasks = [
      { src: taskOneDefault, type: 'garbage', points: 200 },
      { src: taskTwoDefault, type: 'secondhand', points: 150 },
      { src: taskThreeDefault, type: 'recycle', points: 100 },
      { src: taskFourDefault, type: 'panta', points: 50 },
   ];

   const hoverTasks = [
      { src: taskOneHover },
      { src: taskTwoHover },
      { src: taskThreeHover },
      { src: taskFourHover },
   ];

   const inactiveTasks = [
      { src: taskOneInactive },
      { src: taskTwoInactive },
      { src: taskThreeInactive },
      { src: taskFourInactive },
   ];

   const { userState, setUserState }: any = useContext(UserContext);

   console.log(userState);

   const addTask = (type: string, points: number) => {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      //////FIX THIS//////Hard coded jwt, as context is empty
      myHeaders.append(
         'Authorization',
         `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzVlMjA2MjkwODdkODk1MDYxOTIzNCIsImlhdCI6MTY4NTQ0NzE3NCwiZXhwIjoxNjg4MDM5MTc0fQ.2WJWhh0ACCLkp071szQmMMFx6zo6bFfzORi4V82c_fk`
      );

      const newTask = {
         type: type,
         userId: "6475e20629087d8950619234", //////FIX THIS//////Hard coded userID, as context is empty
         points: points,
      };
      fetch(`http://127.0.0.1:8888/api/tasks`, {
         method: 'POST',
         headers: myHeaders,
         body: JSON.stringify(newTask),
         redirect: 'follow',
      })
         .then((response) => response.text())
         .then((result) => console.log(result))
         .catch((error) => console.log('error', error));
   };

   return (
      <div>
         <Header />
         <div
            className="flex flex-col justify-center items-center 
        mt-[103px]"
         >
            <div
               className="flex flex-col justify-center items-center
            font-josefin font-bold"
            >
               <h1>VÄLKOMMEN</h1>
               <h1>USER</h1>
            </div>
            <div
               className="w-[194px] h-[194px] border-4 rounded-full
            mt-[10px]"
            ></div>
            <div
               className="grid grid-cols-6 gap-3
            mt-[33px]"
            >
               <div className="border-2 w-8 h-8 flex justify-center items-center">
                  1
               </div>
               <div className="border-2 w-8 h-8 flex justify-center items-center">
                  2
               </div>
               <div className="border-2 w-8 h-8 flex justify-center items-center">
                  3
               </div>
               <div className="border-2 w-8 h-8 flex justify-center items-center">
                  4
               </div>
               <div className="border-2 w-8 h-8 flex justify-center items-center">
                  5
               </div>
               <img src={presentSvg} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center mt-[27px]">
               <h4 className="text-lg font-semibold">Poäng: 000</h4>
               <p className="">Poäng kvar till nästa nivå: 000</p>
            </div>
            <h3 className="mt-[46px] text-2xl">Vad har du gjort idag?</h3>
            <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-8">
               {hoverTasks.map((task, index) => (
                  <img key={index} src={task.src} alt="" />
               ))}

               <div className="grid grid-cols-2 grid-rows-2 gap-2 absolute">
                  {defaultTasks.map((task, index) => (
                     <img
                        key={index}
                        src={task.src}
                        className="transition-opacity ease-in duration-100 opacity-100 hover:opacity-0"
                        alt=""
                        onClick={() => addTask(task.type, task.points)}
                     />
                  ))}
               </div>
            </div>
            {/* <div className='flex relative'>
                {defaultTasks.map((task, index) => (
                    <div key={index} className="">
                        {task.src &&
                        <img
                        src={task.src}
                        className="absolute hover:opacity-0" />}   
                                                       
                        {hoverTasks[index].src && 
                        <img src={hoverTasks[index].src} className="" alt="" />                                                                                                                                                              
                        }
                    </div>
                ))}
            </div> */}
            <h3 className="mt-4 text-xl font-semibold">
               Dina insatser hittills:
            </h3>
            <div className="w-[302px] h-[142px] border-4 rounded-md mt-4"></div>
         </div>
      </div>
   );
};

export default Tasks;
