import desImage from '../assets/descImage.jpg'
export function About(){
    //Texto explicando de qué trata el club.
    //Incluir una imagen relacionada (puede ser de internet).
    //Opcional: usar íconos o emojis relacionados.
    return(
        <>
        <section className="container mx-auto mt-4">
            <h2>Conoce los <strong>Loop</strong>:</h2>
            <p className="text-sm">La nueva generación de tapones para los oídos, diseñados para ayudarte a dormir, concentrarte y vivir mejor. Con la forma de unos elegantes auriculares, Loop se ajusta cómodamente a tus oídos y bloquea el ruido molesto. Ya sea que quieras dormir bien por la noche, concentrarte en el trabajo o disfrutar de un tranquilo viaje al trabajo, Loop tiene una versión a tu medida.</p>
            <div className="flex flex-wrap justify-center  m-8">
                <ul className="list-disc basis-2/4">
                    <li className="p-2"> 
                        <h3 className="font-bold">Modo Noche:</h3> 
                        <p className="text-sm">suave, cómodo y diseñado para reducir el ruido de fondo para que puedas descansar sin interrupciones</p>
                    </li>
                    <li className="p-2">
                        <h3 className="font-bold">Modo Silencioso:</h3> 
                        <p className="text-sm">ideal para viajar, leer o meditar</p>
                    </li>
                    <li className="p-2">
                        <h3 className="font-bold">Modo de Interaccion y Experiencia:</h3>
                        <p className="text-sm">opciones de reducción de ruido que bajan el volumen sin bloquear el mundo exterior, ideales para entornos de concentración o sociales</p>
                    </li>
                </ul>
                <div>
                    <img className="basis-2/4 p-5 w-[300px] border-2 border-slate-500 rounded-lg shadow-2xl" src={desImage} alt="descImage"/>
                </div>
                
            </div>
        </section>
        </>
    )
}