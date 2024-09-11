import React, { useState } from 'react';
import '../Header.css'; // Importiere die CSS-Datei für die Header-Komponente
import Image from '../images/Logo.png';


export function Header() {

  return (
    <div id="header" className="hidden">
      <div className="container">
        <nav>
          <img src={Image} className="logo" alt="Logo" /> {/* Logo */}
          <ul id="sidemenu" className="hidden"> {/* Make sure the menu is initially hidden */}
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/experience">EXPERIENCE</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
//weiter machen, fürs handy und für alle screens