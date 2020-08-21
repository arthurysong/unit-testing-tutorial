import React from 'react';
import './styles.scss'

const Header = props => {
    // data-test atribute used to let other devs know it's used in test
    return <header data-test="headerComponent">
    {/* return <header className="headerComponent"> */}
        <div className="wrap">
            <div className="logo">
                Logo
                {/* <img className="logoIMG" /> */}
                <img data-test="logoIMG" />
            </div>
        </div>
    </header>
};

export default Header;