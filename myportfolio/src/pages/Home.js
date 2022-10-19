import React from "react";
import Button from "../components/button.js";
import '../styles/home.css'

export default function Home(){
    return (
        <>
        <section className="about">
            <h3>Sobre mim</h3>
            <p>
                Vim da area do design gráfico Atualmente estou em transição de carreira estudando desenvolvimento web full-stack na Trybe, já tendo concluido o bloco de fundamentos e front end, onde tive meus conhecimentos aprofundados em JS, React, redux, BootStrap, CSS, Html5,Linux , Git & Bash.	
                </p>
                <Button text="MAIS SOBRE MIM" link="/sobre" />
        </section>
        </>
    )
}

