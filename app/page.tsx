import Image from "next/image";
import logoTandaFacil from "@tandafacil /src/img/logoTanda.png";
import statusBank from "@tandafacil /src/img/statusBankImg.png";
import transferencia from "@tandafacil /src/img/transferencia.png";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 justify-items-center items-center bg-black-main text-white gap-6 md:gap-16 h-screen">
        <div className="flex flex-col gap-4 pt-16 md:pt-20 pb-6 max-w-lg">
          <h1 className="font-bold text-3xl md:text-4xl leading-tight">
            Ahorra sin esfuerzo, en grupo todo es más fácil.
          </h1>
          <p className="text-lg md:text-xl">
            Lleva el control de tu tanda sin complicaciones. Actualizaciones
            instantáneas para que cada integrante conozca su turno.
          </p>
          <p className="bg-btn-maincolor w-2/3 md:w-1/3 rounded-lg p-3 text-center text-black font-bold hover:bg-opacity-70 hover:text-white cursor-pointer transition duration-200">
            Empieza Hoy ➟
          </p>
        </div>
        <div>
          <Image
            src={logoTandaFacil}
            alt="Logo Tanda Facil"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-mainColor flex flex-col md:flex-row justify-center items-center text-xl md:text-2xl py-8 gap-8">
        <div className="w-3/4 md:w-1/2 text-center md:text-left font-bold leading-relaxed">
          <h1>
            Gestiona tus tandas de manera inteligente. Cada integrante estará
            informado y actualizado con solo un clic. 👉
          </h1>
        </div>
        <div>
          <p className="border border-black bg-btn-maincolor w-48 p-3 rounded-lg text-center text-black font-bold hover:bg-opacity-70 hover:text-white cursor-pointer transition duration-200">
            Más sobre nosotros
          </p>
        </div>
      </div>

      {/* Body Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-6">
        <div>
          <Image src={statusBank} alt="Status Bank" width={350} height={350} />
        </div>
        <div className="w-full md:w-2/4 text-lg md:text-xl flex flex-col gap-5">
          <h1 className="font-bold text-2xl md:text-3xl">Beneficios</h1>
          <ul className="list-decimal space-y-2 pl-5">
            <li>Tu privacidad es nuestra prioridad. Toda tu información está segura y encriptada.</li>
            <li>Conéctate con amigos, familiares o compañeros y crea tu tanda en segundos.</li>
            <li>Gestiona cada detalle de tu tanda con facilidad, desde los turnos hasta los pagos, todo en un solo lugar.</li>
          </ul>
        </div>
      </div>

      {/* Transferencia Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 p-6 justify-center">
        <div className="flex flex-col gap-5 w-full md:w-2/4 text-lg md:text-xl">
          <h1 className="font-bold text-2xl md:text-3xl">
            Realiza tus pagos desde la comodidad de tu celular
          </h1>
          <p>
            Con TandaFácil, nunca más te retrasarás en el pago de tu tanda.
            Registra tu pago de turno desde cualquier lugar y en cualquier
            momento.
          </p>
          <p className="bg-btn-maincolor w-2/3 md:w-1/3 rounded-lg p-3 text-center text-black font-bold hover:bg-opacity-70 hover:text-white cursor-pointer transition duration-200">
            Crear Cuenta
          </p>
        </div>
        <div>
          <Image
            src={transferencia}
            alt="Transferencia"
            width={350}
            height={350}
          />
        </div>
      </div>
    </div>
  );
}