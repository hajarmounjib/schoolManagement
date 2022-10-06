import React, { useState } from 'react'
import './Banner.css'
import { FaSortDown } from "react-icons/fa";
import { Link } from "react-router-dom"


function Banner(props) {
    const [dropdown, setDropdownActive] = useState(false);
    const dropdownData = [
        { dashboard: "" },
        { "Information élève": ["Infos Famille ", "Infos élève"] },
        { "Atelier Administratif": ["Trombinoscope", "Liste des élèves"] },
        { "Atelier Encaissement": ["Gestion des Encaissements", "Devis", "Facturation", "Tableau de Bord CA"] },
    ]
   

    var showDropdown = () => {
        setDropdownActive(!dropdown)
        return (console.log(dropdown))
    }
    return (
        <div className="sidenav">

            {dropdownData.map((name, j) => {

                console.log('list',Object.keys(name))


                return (
                    <>
                        <Link to="" key={j} onClick={() => showDropdown()} className="dropdown-btn">{Object.keys(name)}
                            <FaSortDown className="fa fa-caret-down"></FaSortDown>
                        </Link>
                        {Object.values(name).map((list, key) => {
                            return (
                                <>
                             {/*    {
                                    list.map((listDropdown,j)=>{
                                    return (<a href="#">{listDropdown} </a>)
                                    })
                                } */}
                                <a href="#">{list} </a>
                                </>

                            )
                        })} 

                    </>
                )
            })}


        </div>


    )
}

export default Banner