import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <ul>
               <Link className="navbar-link" to="/">take me home</Link>
            </ul> 
        </div>
    )
    
}