import React from 'react';
import { Link } from 'react-router-dom';
import Parralax from './Parralax';

const  Home = () => {
    return (
        <div className="home">
            <Parralax />
            <Link className="home-link" to="/nasaphoto">Voir La Photo Du Jour</Link>
        </div>
    );   
};

export default Home;