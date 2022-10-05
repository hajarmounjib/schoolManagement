import React from 'react'
import './Navigation.css'
import { FaRegUserCircle } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"

function Navigation(props) {


    return (
        <div className="banner">
            <img src='./logo.png' alt='logo' className='logo'></img>
            <div className='user-login'>
                <FaRegUserCircle size={40} color="#ec6e15" className='user-icon'></FaRegUserCircle>
                
                <div className="dropdown">
                    
                    <div className='dropbtn'> Hajar MOUNJIB <span></span>
                        <FaSortDown></FaSortDown>
                    </div>

                    <div className="dropdown-content">
                        <Link to="/banner">Mon Profil</Link>
                        <a href="#">Se déconnecter</a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navigation
