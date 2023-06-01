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

import level1 from "/Assets_ChasChallenge/Cards/Nivåer/Nivå1_active.svg"
import level2 from "/Assets_ChasChallenge/Cards/Nivåer/Nivå2_active.svg"
import level3 from "/Assets_ChasChallenge/Cards/Nivåer/Nivå3_active.svg"
import level4 from "/Assets_ChasChallenge/Cards/Nivåer/Nivå4_active.svg"
import level5 from "/Assets_ChasChallenge/Cards/Nivåer/Nivå5_active.svg"

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
        pt-[103px] bg-purplePrimary'>
            <div className='flex flex-col justify-center items-center
            font-josefin font-bold text-fontGreen '>
                <h1 className="text-3xl">Välkommen</h1>
                <h1 className="text-3xl">User</h1>
            </div>
            <div className='w-[194px] h-[194px] border-4 rounded-full
            mt-[10px]'>
            </div>
            <div className='grid grid-cols-6 gap-3
            mt-[33px]'>
                <img src={level1} alt="" />
                <img src={level2} alt="" />
                <img src={level3} alt="" />
                <img src={level4} alt="" />
                <img src={level5} alt="" />
                <img src={presentSvg} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center mt-[27px]'>
                <h4 className='text-lg font-semibold text-fontDialogue'>Poäng: 000</h4>
                <p className='text-fontPink'>Poäng kvar till nästa nivå: 000</p>
            </div>
            <h3 className='mt-[46px] text-fontYellow'>Vad har du gjort idag?</h3>
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
            <h3 className='mt-4 text-xl font-semibold text-fontYellow'>Dina insatser hittills</h3>
            <div className='w-[302px] h-[142px] border-4 rounded-md mt-4 bg-[#AAAAAA]'>
            </div>
        </div>
    </div>
  )
}

export default Tasks