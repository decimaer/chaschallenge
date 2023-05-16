import React from 'react';
import Menu from './Menu';
import "./Menu.css"
import "./Header.css"

const Header = () => {

    const [isOpen, setIsOpen] = React.useState(false);


    //


    return (
        <header>
            <img src="" alt="" />
            <h2>GREEN HERO</h2>
            <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    );
};

export default Header;