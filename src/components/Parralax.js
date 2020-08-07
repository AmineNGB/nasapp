import React from 'react';
import bg from '../images/bg.jpg';
import moon from '../images/moon.png';
import mountain from '../images/mountain.png';
import road from '../images/road.png';

const Parralax = () => {
   

    return (
        
            <section className="bg-home">
                <img src={bg} id="bg" alt="bg"   />
                <img src={moon} id="moon" alt="moon"/>
                <img src={mountain} id="mountain" alt="mountain"/>
                <img src={road} id="road" alt="road"/>
                <h2 id="text">NASApp</h2>
            </section>
        
    );
};

export default Parralax;