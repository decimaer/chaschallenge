import React from 'react';
import "./Menu.css"
import { Link } from 'react-router-dom';

const menuLinks = [
    {
        icon: "./home.png", //Path to icon, ex "./home.png"
        text: "Start", //Where it goes, ex "Contact us"
        path: "/", //The path to the site
    },
    {
        icon: "./.png", //Path to icon, ex "./home.png"
        text: "Regler", //Where it goes, ex "Contact us"
        path: "/rules", //The path to the site
    },
    {
        icon: "./.png", //Path to icon, ex "./home.png"
        text: "Konto", //Where it goes, ex "Contact us"
        path: "/profile", //The path to the site
    },
    {
        icon: "./.png", //Path to icon, ex "./home.png"
        text: "Tips", //Where it goes, ex "Contact us"
        path: "/tips", //The path to the site
    },
    {
        icon: "./.png", //Path to icon, ex "./home.png"
        text: "Om oss", //Where it goes, ex "Contact us"
        path: "/about", //The path to the site
    },
    {
        icon: "./.png", //Path to icon, ex "./home.png"
        text: "Kontakt", //Where it goes, ex "Contact us"
        path: "/contact", //The path to the site
    },
    
]

const Menu = () => {
    //Importera om man är inloggad eller inte
    const [isOpen, setIsOpen] = React.useState(false);


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
                                menuLinks.map((item, index) => {
                                    return (
                                        <Link to={item.path} className='menuItem' key={index}>
                                            <img src={item.icon} alt="" />
                                            <h4>{item.text}</h4>
                                        </Link>
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