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
                    <Link to="/">Treenit</Link>
                </li>
                <li>
                    <Link to="/">Lepo</Link>
                </li>
                <li>
                    <Link to="/">Ravinto</Link>
                </li>
            </ul>
        </div>
    );
} 