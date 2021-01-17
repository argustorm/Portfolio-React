import React from 'react';
import { cambiarClase } from './app';

const NavbarComponent = () => {
    return (
        <div>
            {/*  NAVBAR */}
            <header>
                <nav id="site-nav" className="site-nav">
                    <ul>
                        <li>
                            <a href="#home">
                                <i>Inicio</i>
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                                <i>Sobre mi</i>
                            </a>
                        </li>
                        <li>
                            <a href="#skills">
                                <i>Habilidades</i>
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                <i>Contacto</i>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div id="menu-toggle" className="menu-toggle" onClick={cambiarClase}>
                    <div className="hamburger">

                    </div>
                </div>
            </header>
            {/* JS */}
            <script src="./app.js"></script>
        </div>
    );
}

export default NavbarComponent;