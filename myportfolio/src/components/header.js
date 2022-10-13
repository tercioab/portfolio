import React from "react";
import { Link } from "react-router-dom";
import '../styles/header.css'

export default function Header() {
    return (
        <header>
            <h2>
                WALTHÉRCIO
            </h2>

            <ul>
                
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/projetos" >PROJETOS</Link></li>
                <li><Link to="/sobre" >MAIS SOBRE MIM</Link></li>
            </ul>

        </header>
    )
}