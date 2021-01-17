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
                            <div className="text">Óscar Silla <span>Desarrollador Frontend</span></div>
                            <p>
                                Soy un joven de 21 años apasionado
                                por mundo de la informática y
                                nuevas tec&shy;nologías.
                                Resido en Valencia y me considero
                                una persona con valores, organizada
                                y muy trabajadora.
                                Disfruto trabajando tanto en equipo
                                como autónomamente y siempre
                                tengo ganas de aprender algo
                                nuevo.
                            </p>
                            <a href="https://drive.google.com/file/d/1_3aBcp7Ft51uzbCIxjg86J5a0PNXMxX6/view?usp=sharing"
                                download="oscarsilla.pdf"
                            >
                                Curriculum Vitae
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutComponent;