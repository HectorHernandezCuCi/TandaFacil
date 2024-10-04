import emailLogo from "@tandafacil /src/img/emailLogo.png";
import passwordLogo from "@tandafacil /src/img/passwordLogo.png";
import googleIcon from "@tandafacil /src/img/googelIcon.png";
import facebookIcon from "@tandafacil /src/img/facebookIcon.png";
import phoneIcon from "@tandafacil /src/img/phoneIcon.png";

import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="h-screen flex">
      {/* Sección Izquierda: Formulario de Login */}
      <div className="flex flex-col gap-6 items-center justify-center w-1/2 p-10">
        <h1 className="text-6xl font-bold text-btn-maincolor">
          Iniciar Sesión
        </h1>
        <div className="flex gap-20">
          <Image
            src={googleIcon}
            alt="Google logo"
            width={50}
            height={50}
            className="border border-gray-400 rounded-lg p-2 hover:bg-black hover:bg-opacity-80 transition cursor-pointer duration-200"
          />
          <Image
            src={facebookIcon}
            alt="facebook logo"
            width={50}
            height={50}
            className="border border-gray-400 rounded-lg p-2 hover:bg-black hover:bg-opacity-80 transition cursor-pointer duration-200"
          />
          <Image
            src={phoneIcon}
            alt="Phone logo"
            width={50}
            height={50}
            className="border border-gray-400 rounded-lg p-2 hover:bg-black hover:bg-opacity-80 transition cursor-pointer duration-200"
          />
        </div>
        <div className="flex flex-col gap-4 w-full max-w-md">
          {/* Campo de Correo */}
          <div className="flex items-center bg-mainColor p-3 rounded-lg">
            <Image
              src={emailLogo}
              alt="Email logo"
              width={30}
              height={30}
              className="mr-3"
            />
            <input
              type="email"
              placeholder="Ingresa tu correo"
              className="bg-transparent outline-none flex-1 placeholder-black-300"
            />
          </div>

          {/* Campo de Contraseña */}
          <div className="flex items-center bg-mainColor p-3 rounded-lg">
            <Image
              src={passwordLogo}
              alt="Password logo"
              width={30}
              height={30}
              className="mr-3"
            />
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              className="bg-transparent outline-none flex-1 placeholder-black-300"
            />
          </div>
        </div>

        <button className="border border-black bg-btn-maincolor w-48 p-3 rounded-lg text-center text-black font-bold hover:bg-opacity-70 hover:text-white cursor-pointer transition duration-200">
          Iniciar Sesión
        </button>
      </div>

      {/* Sección Derecha: Mensaje de Bienvenida */}
      <div className="w-1/2 bg-mainColor flex flex-col gap-10 justify-center items-center p-10 text-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            ¡HOLA DE NUEVO, BIENVENIDO/A!
          </h1>
          <p className="text-2xl mb-4">
            La unión hace la fuerza, y también el ahorro.
          </p>
        </div>
        <div>
          <p className="mb-6">¿No tienes cuenta de TandaFacil? ¡Qué esperas!</p>

          <Link
            href="/register"
            className="bg-none border border-black px-6 py-3 rounded-lg hover:bg-btn-maincolor transition"
          >
            Crear Cuenta
          </Link>
        </div>
      </div>
    </div>
  );
}
