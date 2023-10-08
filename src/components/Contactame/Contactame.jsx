import React from "react";
import '../../assets/css/contactame.css'
import TextField from '@mui/material/TextField';
import contactame from '../../assets/img/contactame.jpg'

export const Contactame = () => {
    return (
        <section className="container">
            <div className="contain-contact">
                <div className="contain-contact-title">
                    <h1>Contáctame</h1>
                </div>
                <div className="contain-contact-form">
                    <div className="contain-contact-form-img">
                        <img src={contactame} alt="" />
                    </div>
                    <div className="contain-contact-form-form">
                        <form action="">

                            <div className="form-form_input">
                                <TextField id="standard-basic"
                                sx={{
                                    input: { color: "white" },
                                    label: { color: "white" },
                                    border: { borderBottom: "white" }
                                }} label="Nombre"
                                    variant="standard" />
                                <TextField id="standard-basic"
                                sx={{
                                    input: { color: "white" },
                                    label: { color: "white" },
                                    border: { borderBottom: "white" }
                                }} label="Email"
                                    variant="standard" />
                                <TextField id="standard-basic"
                                sx={{
                                    input: { color: "white" },
                                    label: { color: "white" },
                                    border: { borderBottom: "white" }
                                }} label="Teléfono"
                                    variant="standard" />
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}