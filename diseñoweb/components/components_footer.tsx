import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-purple-400">
              <code>{'{Sergio001g}'}</code>
            </h3>
            <p>Diseño web profesional y desarrollo de alta calidad.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2 text-purple-400">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="#servicios" className="hover:text-purple-400">Servicios</Link></li>
              <li><Link href="#proyectos" className="hover:text-purple-400">Proyectos</Link></li>
              <li><Link href="#tecnologias" className="hover:text-purple-400">Tecnologías</Link></li>
              <li><Link href="#contacto" className="hover:text-purple-400">Contacto</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2 text-purple-400">Sígueme</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/sergio001g" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">GitHub</a>
              <a href="#" className="hover:text-purple-400">LinkedIn</a>
              <a href="#" className="hover:text-purple-400">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">Copyright © {new Date().getFullYear()} Sergio001g. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

