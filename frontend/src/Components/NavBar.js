import React from "react";
import {Link} from "react-router-dom";

import "./NavBar.css"

export default function NavBar(props) {
    return (
        <div className="nav-bar">
            <ul>
                <li>
                    <text>Urheilijan treenipäiväkirja</text>
                </li>
                <li>
                    <Link to="treenit">Treenit</Link>
                </li>
                <li>
                    <Link to="lepo">Lepo</Link>
                </li>
                <li>
                    <Link to="ravinto">Ravinto</Link>
                </li>
            </ul>
        </div>
    );
} 