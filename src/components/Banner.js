import React, { useState } from 'react'
import './Banner.css'
import { FaSortDown } from "react-icons/fa";
import { Link } from "react-router-dom"



function Banner(props) {
    const [dropdown, setDropdownActive] = useState(false);
    var dropdownData = [
        {title:"DashBoard"},
        {title:"Information élève", tittleDropdownContainer:["Infos Famille ", "Infos élève"]},
    {title:"Atelier Administratif", tittleDropdownContainer:["Trombinoscope", "Liste des élèves"]},
    {title:"Atelier Encaissement", tittleDropdownContainer:["Gestion des Encaissements", "Devis","Facturation","Tableau de Bord CA"]},

]

    var showDropdown = () => {
        setDropdownActive(!dropdown)
        return (console.log(dropdown))
    }
    return (
        <div className="sidenav">
            { dropdownData.map((e,i)=>{

                return(
                    <>
                         <Link to="" onClick={() => showDropdown()} className="dropdown-btn">{e.title}
                    <FaSortDown className="fa fa-caret-down"></FaSortDown>
                </Link>
                      <div className={dropdown===true?"dropdown-container-active":"dropdown-container"}>
                      <a href="#">Link 1</a>

                  </div>
                    </>
               
                )
            })}
            <Link to="" onClick={() => showDropdown()} className="dropdown-btn">Dropdown
                <FaSortDown className="fa fa-caret-down"></FaSortDown>
            </Link>
            <div className={dropdown===true?"dropdown-container-active":"dropdown-container"}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
            <a href="#contact">Search</a>
        </div>


    )
}

export default Banner