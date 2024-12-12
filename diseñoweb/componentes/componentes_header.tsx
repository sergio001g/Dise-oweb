'use client'

import Link from 'next/link'
import { Button } from '@/componentes/ui/button'
import { AlertTriangle } from 'lucide-react'
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/componentes/ui/tooltip"

export default function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold text-purple-400">
            <code>{'{Sergio001g}'}</code>
          </Link>
          <div className="flex items-center space-x-2">
            <a href="https://github.com/sergio001g" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </a>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <AlertTriangle className="text-yellow-400" size={20} />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">Copyright © 2024 Sergio001g. Todos los derechos reservados. Este diseño web es propiedad intelectual de Sergio001g.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#servicios" className="text-gray-400 hover:text-purple-400">Servicios</Link></li>
            <li><Link href="#proyectos" className="text-gray-400 hover:text-purple-400">Proyectos</Link></li>
            <li><Link href="#tecnologias" className="text-gray-400 hover:text-purple-400">Tecnologías</Link></li>
            <li><Link href="#contacto" className="text-gray-400 hover:text-purple-400">Contacto</Link></li>
          </ul>
        </nav>
        <Button 
          variant="outline" 
          className="border-purple-400 text-purple-400 hover:bg-purple-900"
          onClick={() => window.open('https://github.com/sergio001g', '_blank')}
        >
          Ver GitHub
        </Button>
      </div>
    </header>
  )
}

