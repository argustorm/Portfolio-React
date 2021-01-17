//import axios from 'axios';
import React from 'react'
//import useForm from '../../hooks/useForm';

const ContactComponent = () => {

    /* const [data, handleOnChange] = useForm({
        name: '',
        email: '',
        subject: '',
        description: ''
    }); */

    //const {name, email, subject, description} = data;

    const handleOnSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            {/* CONTACT */}
            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title">Contacto</h2>
                    <div className="contact-content">
                        <div className="column left">
                            {/* <div className="text">Get in touch</div>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe consequuntur accusamus nemo
                                tempore non iure distinctio temporibus corrupti quasi sunt soluta optio, ex esse est rerum.
                                Alias necessitatibus itaque mollitia.
                            </p> */}
                            <div className="icons">
                                <div className="row">
                                    <i className="fas fa-user"></i>
                                    <div className="info">
                                        <div className="head name">Name</div>
                                        <div className="sub-title">Óscar Silla</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="info">
                                        <div className="head address">Address</div>
                                        <div className="sub-address">Valencia, España</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-envelope"></i>
                                    <div className="info">
                                        <div className="head email">Email</div>
                                        <div className="sub-email">oscarsilla00@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column right">
                            <div className="text">Contactemos!</div>

                            {/* Formulario de contacto */}
                            <form onSubmit={handleOnSubmit}>
                                <div className="fields">
                                    {/* <div className="field name">
                                        <input 
                                            type="text" 
                                            placeholder="Name" 
                                            required
                                            name='name'
                                            value={name}
                                            autoComplete='off' 
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                    <div className="field email">
                                        <input 
                                            type="email" 
                                            placeholder="Email" 
                                            required 
                                            name='email'
                                            value={email}
                                            autoComplete='off'
                                            onChange={handleOnChange}
                                        />
                                    </div> */}
                                    <div className="button">
                                        <a type="submit" href="mailto:oscarsilla00@gmail.com">
                                            Enviar mensaje
                                        </a>
                                    </div>
                                </div>
                                {/* <div className="field">
                                    <input 
                                        type="text"
                                        placeholder="Subject" 
                                        required 
                                        name='subject'
                                        value={subject}
                                        autoComplete='off'
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="field textarea">
                                    <textarea 
                                        cols="30" 
                                        rows="10" 
                                        placeholder="Describe project.." 
                                        required 
                                        name='description'
                                        value={description}
                                        autoComplete='off'
                                        onChange={handleOnChange}
                                    >
                                    </textarea>
                                </div> */}

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactComponent;
