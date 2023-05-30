import { useState } from "react"


import Header from "../../components/Header"
import presentSvg from "/Assets_ChasChallenge/Cards/Nivåer/Present_closed.svg"
import taskOneDefault from "/Assets_ChasChallenge/Cards/Taskcards/Property 1=samlat, Property 2=default.svg"
import taskOneHover from "/Assets_ChasChallenge/Cards/Taskcards/Property 1=samlat, Property 2=hover.svg"
import taskOneInactive from "/Assets_ChasChallenge/Cards/Taskcards/Property 1=samlat, Property 2=inactive.svg"

import taskTwoDefault from "/Assets_ChasChallenge/Cards/Taskcards/Property 1=2ndhand, Property 2=default.svg"
import taskTwoHover from "/Assets_ChasChallenge/Cards/Taskcards/Property 1=2ndhand, Property 2=hover.svg"
import taskTwoInactive from "/Assets_ChasChallenge/Cards/Taskcards/Property 1=2ndhand, Property 2=inactive.svg"

import taskThreeDefault from "/Assets_ChasChallenge/Cards/Taskcards/Property 1=återvunnit, Property 2=default.svg"
import taskThreeHover from "/Assets_ChasChallenge/Cards/Taskcards/Property 1=återvunnit, Property 2=hover.svg"
import taskThreeInactive from "/Assets_ChasChallenge/Cards/Taskcards/Property 1=återvunnit, Property 2=inactive.svg"

import taskFourDefault from "/Assets_ChasChallenge/Cards/Taskcards/Property 1=pantat, Property 2=default.svg"
import taskFourHover from "/Assets_ChasChallenge/Cards/Taskcards/Property 1=pantat, Property 2=hover.svg"
import taskFourInactive from "/Assets_ChasChallenge/Cards/Taskcards/Property 1=pantat, Property 2=inactive.svg"

const Tasks = () => {
    const defaultTasks = [
        {src: taskOneDefault},
        {src: taskTwoDefault},
        {src: taskThreeDefault},
        {src: taskFourDefault},
    ]

    const hoverTasks = [
        {src: taskOneHover},
        {src: taskTwoHover},
        {src: taskThreeHover},
        {src: taskFourHover}
    ]

    const inactiveTasks = [
        {src: taskOneInactive},
        {src: taskTwoInactive},
        {src: taskThreeInactive},
        {src: taskFourInactive}
    ]
    
  return (
    <div>
        <Header />
        <div className='flex flex-col justify-center items-center 
        mt-[103px]'>
            <div className='flex flex-col justify-center items-center
            font-josefin font-bold'>
                <h1>VÄLKOMMEN</h1>
                <h1>USER</h1>
            </div>
            <div className='w-[194px] h-[194px] border-4 rounded-full
            mt-[10px]'>
            </div>
            <div className='grid grid-cols-6 gap-3
            mt-[33px]'>
                <div className='border-2 w-8 h-8 flex justify-center items-center'>1</div>
                <div className='border-2 w-8 h-8 flex justify-center items-center'>2</div>
                <div className='border-2 w-8 h-8 flex justify-center items-center'>3</div>
                <div className='border-2 w-8 h-8 flex justify-center items-center'>4</div>
                <div className='border-2 w-8 h-8 flex justify-center items-center'>5</div>
                <img src={presentSvg} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center mt-[27px]'>
                <h4 className='text-lg font-semibold'>Poäng: 000</h4>
                <p className=''>Poäng kvar till nästa nivå: 000</p>
            </div>
            <h3 className='mt-[46px] text-2xl'>Vad har du gjort idag?</h3>
                <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-8">
                    {hoverTasks.map((task, index) => (
                        <img 
                        key={index} 
                        src={task.src} 
                        alt="" />
                    ))}
                                        
                    <div className="grid grid-cols-2 grid-rows-2 gap-2 absolute">
                        {defaultTasks.map((task, index) => (
                            <img 
                            key={index} 
                            src={task.src} 
                            className="transition-opacity ease-in duration-100 opacity-100 hover:opacity-0" 
                            alt=""
                            onClick={() => console.log("clickidick")} />
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
            <h3 className='mt-4 text-xl font-semibold'>Dina insatser hittills:</h3>
            <div className='w-[302px] h-[142px] border-4 rounded-md mt-4'>
            </div>
        </div>
    </div>
  )
}

export default Tasks