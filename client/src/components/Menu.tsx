import React from 'react';
import "./Menu.css"

const menuLinks = [
    {
        icon: "./home.png", //Path to icon, ex "./home.png"
        text: "Start", //Where it goes, ex "Contact us"
        path: "../features/User/login/Login.tsx", //The path to the site
    }
]

const Menu = ({ isOpen, setIsOpen }) => {
    //Importera om man är inloggad eller inte

    


    return (
        <>
            <img
                id='menu'
                src={isOpen ? "./close-menu.png" : "./open-menu.png"}
                alt={isOpen ? "Close Menu" : "Open Menu"}
                onClick={() => setIsOpen(!isOpen)}
            />

            <div id='menuDropdown'>
                {
                    //Is the menu open?
                    isOpen ? (
                        <div>
                            {
                                menuLinks.map((item) => {
                                    return (
                                        <a href={item.path} className='menuItem'>
                                            <img src={item.icon} alt="" />
                                            <h4>{item.text}</h4>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    ) : ( //Is it closed?
                        <div>

                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Menu;