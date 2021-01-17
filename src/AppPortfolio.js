import React from 'react';
import AboutComponent from './components/about/AboutComponent';
import ContactComponent from './components/contact/ContactComponent';
import FooterComponent from './components/footer/FooterComponent';
import HomeComponent from './components/home/HomeComponent';
import NavbarComponent from './components/navbar/NavbarComponent';
import SkillsComponent from './components/skills/SkillsComponent';

const AppPortfolio = () => {

    return (
        <div>
            {/* NAVBAR */}
            <NavbarComponent />

            {/* HOME */}
            <HomeComponent />

            {/* ABOUT */}
            <AboutComponent />

            {/* SKILLS */}
            <SkillsComponent />

            {/* CONTACT */}
            <ContactComponent />

            {/* FOOTER */}
            <FooterComponent />
        </div>
    );
}

export default AppPortfolio;