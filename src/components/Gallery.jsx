import { useState } from "react"
export function Gallery(){
    //Otra < section > dentro de main
    //Mostrar tarjetas con personajes, artistas, equipos o elementos del tema del club.
    //Al menos 3 tarjetas con: Imagen, Nombre o descripción Estilos con Tailwind
    const gallery_section = [
        {id:1,title:"Ayuda para Autismo",description:"No dejes el ruido fantasma arruine tu dia",img:"https://www.loopearplugs.com/cdn/shop/files/earplugs-for-autism.png?v=1735831478&width=441",alt:""},
        {id:2,title:"Perfectos para Dormir",description:"Un vecino ruidoso no sera un problema",img:"https://www.loopearplugs.com/cdn/shop/files/earplugs-for-sleeping.png?v=1735831560&width=441",alt:""},
        {id:3,title:"Aisla el Ruido del Tinitus",description:"Que tu condicion no te detenga de crear momentos especiales",img:"https://www.loopearplugs.com/cdn/shop/files/earplugs-for-tinnitus.png?v=1735831480&width=441",alt:""},
        {id:4,title:"Tu Mejor Aliado en Conciertos",description:"Conocemos lo mucho que disfrutaras los eventos en vivo",img:"https://www.loopearplugs.com/cdn/shop/files/earplugs-for-concerts.png?v=1735831477&width=441",alt:""},
        {id:5,title:"Earplugs para Festivales Musicales",description:"Todos te preguntaran por ellos",img:"https://www.loopearplugs.com/cdn/shop/files/earplugs-for-music-festivals.png?v=1735831478&width=441",alt:""},
        {id:6,title:"Para Musicos",description:"Para un look mas profesional",img:"https://www.loopearplugs.com/cdn/shop/files/earplugs-for-musicians.png?v=1735831477&width=441",alt:""}
    ]
    const [showImages,setShowImages] = useState(false)
    const clickShowImages = () => {
        setShowImages(true)
    }
    const hideImages = () =>{
        setShowImages(false)
    }
    return(
        <>
        <section>
            <div className="flex flex-col justify-center">
                <h2 className="text-center m-5 text-2xl">Multiples situaciones <strong>una</strong> solucion</h2>
                {showImages ? 
                    <button className="w-[150px] mx-auto shadow-lg hover:bg-orange-500 rounded-lg ease-in-out duration-300" onClick={hideImages}>Menos Detalles</button> 
                    :
                    <button className="w-[150px] mx-auto shadow-lg hover:bg-green-600 rounded-lg ease-in-out duration-300" onClick={clickShowImages}>Mas Detalles</button>
                }
            </div>
            <div className="flex flex-wrap justify-center p-8">
                {showImages && (
                gallery_section.map((gallery) => (
                    <div key={gallery.id} className="w-[300px] p-5 m-4 rounded shadow-lg border-2 border-t-black">
                        <img className="rounded-md" src={gallery.img} alt={gallery.alt}/>
                        <h2 className="font-bold p-3 ">{gallery.title}</h2>
                        <p className="text-sm p-2">{gallery.description}</p>
                    </div>
                    ))
                )
                }
            </div>
        </section>
        </>
    )
}