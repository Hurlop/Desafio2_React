export function Footer(){
    //con datos ficticios de contacto
    //agradecimiento.
    //Puedes incluir un enlace ficticio a redes sociales
    //recursos externos.
    return(
        <> 
        <footer className='w-full mt-3 flex flex-wrap justify-center h-[100px] bg-slate-500 border-2 border-t-black'>
            <div className="m-2 p-5">
                <h2 className="text-2xl">Loops</h2>
                <span>La mejor marca de audifonos que cuidan tus oidos</span>
            </div>
            <nav className="flex justify-evenly w-[300px] p-5">
                <div><img className="h-[40px] w-[40px]" src="https://icon2.cleanpng.com/20181110/izk/kisspng-discord-social-media-portable-network-graphics-cli-1713924104892.webp" alt="" />Discord</div>
                <div><img className="h-[40px] w-[40px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNDiu7xbObiTDVyfRmVNkwQyJh3IedpiFJCQ&s" alt="" />LinkedIn</div>
                <div><img className="h-[40px] w-[40px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfbcYeYgf0wQJ-LSPm3CPbyB7T1p0f5bnaA&s" alt="" />Facebook</div>
            </nav>
            <span className="flex">Creado por Daniel Nino - Desafio #2 BIT</span>
        </footer>
        </>
    )
}