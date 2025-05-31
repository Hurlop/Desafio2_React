import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
export function RegistrationForm(){
    // Utilizar react hook form y useForm
    // Campos:Nombre (text), Email (email), Por qué quiere unirse al club (textarea)
    // Al enviar, mostrar los datos del formulario (pueden elegir como)
    const{register,handleSubmit} = useForm()
    function showData(data){
        Swal.fire({
            title: "Estas seguro de subir esta informacion?",
            text: "Nombre: " + data.name + " " + "Correo: "+ data.name + " " + "Telefono: " + data.cellphone + " " + " Descripcion: " + data.description,
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3d8c40",
            cancelButtonColor: "#d33",
            confirmButtonText: "Enviar Informacion"
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                title: "Exito!",
                text: "La informacion ha sido enviada!",
                icon: "success"
                });
            }
        });
    }
    return(
        <>
        <section className="container mx-auto mb-[50px] shadow-md rounded-t-md flex justify-between h-[500px] w-[800px] border-2 border-black">
            <div className="flex flex-col justify-start p-8">
                <h2 className="text-3xl m-5">Inscribete y experimenta un cambio en tu vida</h2>
                <p>Tenemos varias opciones disenadas para tu comodidad, puedes dejarnos tu informacion a traves de este formulario y nos pondremos en contacto</p>
            </div>
            <div className="p-8 bg-slate-200 rounded-t-md">
                <form onSubmit={handleSubmit(showData)} className="flex flex-col w-[300px]">
                    <label htmlFor="name">Nombre:</label>
                    <input id='name' className='h-[40px] text-center p-2 m-2 rounded-lg border-[1px] border-teal-500' type="text" placeholder="Pepito Perez" {...register("name")}/>
                    <label htmlFor="number">Numero:</label>
                    <input id='number' className='h-[40px] text-center p-2 m-2 rounded-lg border-[1px] border-teal-500' type="number" placeholder="+57 3214563456"{...register("cellphone")}/>
                    <label htmlFor="email">Correo electronico:</label>
                    <input id='email' className='h-[40px] text-center p-2 m-2 rounded-lg border-[1px] border-teal-500' type="email" placeholder="correo@correo.com" {...register("email")}/>
                    <label htmlFor="textarea">Danos tu opinion:</label>
                    <input id='textarea' className='h-[90px] text-center p-2 m-2 rounded-lg border-[1px] border-teal-500' type="textarea" placeholder="Porque te gustaria adquirir los Loop" {...register("description")}/>
                    <button className="w-[150px] mx-auto border-2 rounded-md hover:bg-green-600" type="submit">Enviar Formulario</button>
                </form>
            </div>
        </section>        
        </>
    )
}