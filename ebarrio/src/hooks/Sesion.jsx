import { useState } from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies;


function Sesion() {
    const [boton, setboton] = useState(false);

    const CerrarSesion = () => {
       
        setboton(true);

        cookies.remove("id", { path: "/" });
        cookies.remove("usuario", { path: "/" });
        cookies.remove("primer_nombre", { path: "/" });
        cookies.remove("apellido_paterno", { path: "/" });
        cookies.remove("apellido_materno", { path: "/" });
    }
    return { CerrarSesion }
}
export default Sesion
