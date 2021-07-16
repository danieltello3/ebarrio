import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const DbUrl = "http://localhost:8000/users";
const cookies = new Cookies();

function LoginCatch() {
   const [Form, setForm] = useState({ email: null, password: null });

   const handleChange = async (data) => {
      setForm({
         email: data.email,
         password: data.password,
      });
      console.log(Form);
   };

   const IniciarSesion = async () => {
      await axios
         .get(DbUrl, {
            params: { email: Form.email, contraseña1: Form.password },
         })
         .then((response) => {
            console.log(response.data);
            return response.data;
         })
         .then((response) => {
            if (response.length > 0) {
               var respuesta = response[0];
               cookies.set("id", respuesta.id, { path: "/" });
               cookies.set("nombre", respuesta.nombre, { path: "/" });
               cookies.set("apellido", respuesta.apellido, { path: "/" });
               alert(
                  `Hola ${respuesta.nombre} ${respuesta.apellido} con id: ${respuesta.id} `
               );
               window.location.href = "./PerfilUsuario";
            } else {
               alert("El email o contraseña son incorrectos");
            }
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return { handleChange, IniciarSesion, Form };
}

export default LoginCatch;
