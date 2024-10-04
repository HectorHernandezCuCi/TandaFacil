import Link from "next/link"; // Asegúrate de importar el componente Link
import LogoTanda from "@tandafacil /src/img/logoTanda.png";
import Image from "next/image";

export function Header() {
  return (
    <div className="bg-mainColor flex items-center justify-between p-4 text-2xl">
      <div className="flex items-center">
        <Image src={LogoTanda} alt="Logo TandaFacil" width={50} height={50} />
        <h1 className="font-bold">TandaFacil</h1>
      </div>
      <nav className="text-black font-bold">
        <ul className="flex gap-x-20">
          <li>
            <Link href="/" className="hover:text-btn-maincolor">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-btn-maincolor">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-btn-maincolor">
              Inciar Sesión
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className="border  border-black bg-btn-maincolor w-1/4 rounded-lg p-4 text-center text-black font-bold hover:bg-opacity-50 hover:text-white cursor-pointer transition duration-200"
            >
              Crear Cuenta
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
