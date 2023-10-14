import React from "react";
import { Banner } from '../Banner/Banner'
import { Acerca } from '../Acerca/Acerca';
import { MenuProy } from '../MenuProy/MenuProy';
import { Contactame } from '../Contactame/Contactame';
import { Redes } from '../Redes/Redes';
import { Servicios } from '../Servicios/Servicios';

export const Home = () => {
    return (
        <>
            <Banner />
            <Acerca />
            <MenuProy />
            <Servicios />
            <Contactame />
            <Redes />
        </>
    )
}