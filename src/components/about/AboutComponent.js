import React from 'react';

const AboutComponent = () => {
    return (
        <div>
            {/* ABOUT */}
            <section className="about" id="about">
                <h2 className="title">
                    Sobre mi
                </h2>
                <div className="max-width">
                    <div className="about-content">
                        <div className="column left">
                            <img alt='img' src="../assets/model1.jpg" />
                        </div>
                        <div className="column right">
                            <div className="text">Soy Óscar y soy <span>Desarrollador Frontend</span></div>
                            <p>
                                Soy un joven de 21 años apasionado
                                por mundo de la informática y
                                nuevas tecnologías.
                                Resido en Valencia y me considero
                                una persona con valores, organizada
                                y muy trabajadora.
                                Disfruto trabajando tanto en equipo
                                como autónomamente y siempre
                                tengo ganas de aprender algo
                                nuevo.
                            </p>
                            <a href="assets/downloads/oscarsilla.pdf"
                                download="oscarsilla.pdf"
                            >
                                Descargar CV
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutComponent;