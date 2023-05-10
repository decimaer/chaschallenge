import React from 'react';
import Menu from './Menu';

const Header = () => {

    const [isOpen, setIsOpen] = React.useState(false);





    return (
        <header>
            <img src="" alt="" />
            <h2>GREEN HERO</h2>
            <Menu />
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Close' : 'Open'} </button>
            {isOpen && (
                <div>
                    <Menu />
                </div>

            )}
        </header>
    );
};

export default Header;