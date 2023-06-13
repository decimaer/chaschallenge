import React from 'react'
import { useState } from 'react';

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

const UserTasks = () => {

    const defaultTasks = [
        { src: taskOneDefault },
        { src: taskTwoDefault },
        { src: taskThreeDefault },
        { src: taskFourDefault },
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

     const [isHover, setHover] = useState(false)

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-fit mt-8 mb-8">
            {hoverTasks.map((task, index) => (
               <img key={index} src={task.src} alt="" 
               className="transition-opacity ease-in duration-150 opacity-100 hover:opacity-0"
               
               />
            ))}

            <div className="grid grid-cols-2 grid-rows-2 gap-4 absolute">
               {defaultTasks.map((task, index) => (
                  <img
                     key={index}
                     src={task.src}
                     className="transition-opacity ease-in duration-150 opacity-100 hover:opacity-0"
                     alt=""
                     onClick={() => console.log('clickidick')}
                     onMouseEnter={() => {}}
                  />
               ))}
            </div>
         </div>
  )
}

export default UserTasks