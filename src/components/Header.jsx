import { useState } from "react"
export function Header(){
    //Usar una etiqueta < header > con título del club
    //Incluir un subtítulo o lema.
    //Aplicar estilos con Tailwind ej : fondo oscuro, texto centrado, etc.).
    return(
        <>
        <header className="p-8 border-2 border-b-black">
            <h1 className="text-5xl">Loop - El Verdadero Descanso</h1>
            <p className="text-xl">Bajale al ruido y subele a la vida con Loop.</p>
        </header>
        </>
    )
}