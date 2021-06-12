import React from 'react';
import wall1 from '../images/quantum-1.jpg';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Online Tution Classes</h1>
                <div>
                    <Typed
                        className="typed-text"
                        strings={["Online tution", "Onlien Physics", "Online Classes"]}
                        typeSpeed={48}
                        backSpeed={60}
                        loop
                    />
                </div>
                <a href="#" className="btn-main-offer">Log In</a>
                
            </div>            
        </div>
    )
}

export default Header;
