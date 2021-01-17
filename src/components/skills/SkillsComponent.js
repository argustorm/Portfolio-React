import React from 'react'

const SkillsComponent = () => {
    return (
        <div>
            {/* SKILLS */}
            <section className="skills" id="skills">
                <div className="max-width">
                    <h2 className="title">Mis habilidades</h2>
                    <div className="skills-content">
                        <div className="column left">
                            <div className="text">Mi experiencia</div>
                            <p>
                                Hace 1 año que me gradué como desa&shy;rrollador de aplicaciones multi&shy;plataforma "DAM",
                                desde entonces, he seguido apren&shy;diendo de forma auto&shy;didacta mediante cursos online.
                                <br/>También he tenido el placer de trabajar junto a profesionales y aprender mucho de ellos.
                                
                            </p>
                            {/* <a href="#">Read more</a> */}
                        </div>
                        <div className="column right">
                            <div className="bars">
                                <div className="info">
                                    <span>HTML</span>
                                    <span>90%</span>
                                </div>
                                <div className="line html"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>CSS</span>
                                    <span>50%</span>
                                </div>
                                <div className="line css"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>JavaScript</span>
                                    <span>70%</span>
                                </div>
                                <div className="line js"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>PHP</span>
                                    <span>80%</span>
                                </div>
                                <div className="line php"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>MySQL</span>
                                    <span>70%</span>
                                </div>
                                <div className="line mysql"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>React</span>
                                    <span>60%</span>
                                </div>
                                <div className="line react"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Angular</span>
                                    <span>40%</span>
                                </div>
                                <div className="line angular"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SkillsComponent;
