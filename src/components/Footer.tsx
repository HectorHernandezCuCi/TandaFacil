export function Footer() {
    return (
      <footer className="bg-black-main text-white p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Sección 1: Acerca de */}
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold">Acerca de TandaFácil</h2>
            <p className="text-sm">
              Simplifica la gestión de tus tandas. Crea y administra tus grupos de ahorro de manera fácil y rápida desde cualquier lugar.
            </p>
          </div>
  
          {/* Sección 2: Navegación */}
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold">Enlaces Rápidos</h2>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-btn-maincolor transition duration-200">Inicio</a></li>
              <li><a href="/about" className="hover:text-btn-maincolor transition duration-200">Acerca de</a></li>
              <li><a href="/services" className="hover:text-btn-maincolor transition duration-200">Servicios</a></li>
              <li><a href="/contact" className="hover:text-btn-maincolor transition duration-200">Contacto</a></li>
            </ul>
          </div>
  
          {/* Sección 3: Redes Sociales */}
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold">Síguenos</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-btn-maincolor transition duration-200">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-btn-maincolor transition duration-200">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-btn-maincolor transition duration-200">Instagram</a>
            </div>
          </div>
        </div>
  
        <div className="border-t border-gray-700 mt-6 pt-4">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} TandaFácil. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    );
  }
  