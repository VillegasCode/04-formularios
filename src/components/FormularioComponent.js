import React, {useState} from 'react'

export const FormularioComponent = () => {
  
    const [usuario, setUsuario] = useState({});

    const conseguirDatosFormulario = e => {
        // Se usa para prevenir que la página se recargue al enviar los datos del form
        e.preventDefault();

        let datos = e.target;
        let usuario = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            bio: datos.bio.value,
            enviar: datos.enviar.value
        };

        console.log(usuario);
        setUsuario(usuario);
    }
  

    const cambiarDatos = e => {
        let name_del_input = e.target.name;
        let usuario_para_modificar = usuario;

        console.log(usuario_para_modificar);

        setUsuario(estadoprevio => {
            return{
                ...estadoprevio,
                [name_del_input]: e.target.value
            }
        });
    }


    return (
    <div>
        <h1>Formularios con React</h1>

        {/* Mostrar todos los datos por pantalla con un IF CONDICIONAL PREVIO */}
        { usuario.enviar && 
            (
            <div className='info_usuario label label-gray'>
                {usuario.nombre} {usuario.apellido} es {usuario.genero} y su biografía es esta: <p>{usuario.bio}</p>
            </div>
            )
        }

        <form onSubmit={conseguirDatosFormulario}>
            <input type='text' placeholder='Nombre' name='nombre' onChange={cambiarDatos}/>
            <input type='text' placeholder='Apellido' name='apellido' onChange={cambiarDatos}/>
            <select name='genero' onChange={cambiarDatos}>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
            </select>
            <textarea placeholder='Biografia' name='bio' onChange={cambiarDatos}></textarea>

            <input type='submit' value="Enviar" name='enviar'/>
        </form>
    </div>
    
    )
}
