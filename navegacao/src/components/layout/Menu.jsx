import  './Menu.css'
import React from 'react'

import { Link } from "react-router-dom";
const Menu = props => (
    <div className="Menu">
       <nav >
           <ul>
               <li>
                   <Link to="/">Home</Link>
               </li>
               <li>
                   <Link to="/param/1">Param 01</Link>
               </li>
               <li>
                   <Link to="/param/legal">Param 02 </Link>
               </li>
               <li>
                   <Link to="/about">About</Link>
               </li>

               <li>
                   <Link to="/naoexite">naoexiste</Link>
               </li>
           </ul>
       </nav>
    </div>
)

export default Menu