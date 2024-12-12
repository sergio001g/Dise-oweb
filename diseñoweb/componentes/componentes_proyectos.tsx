import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/componentes/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export default function Proyectos() {
  const proyectos = [
    { 
      title: 'Proyecto de Login', 
      description: 'Un sistema de inicio de sesión simple y seguro construido con tecnologías web modernas.', 
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202024-12-11%20173920-qDHHAycedLZuJUo26evxkFQp5fx1AP.png',
      link: 'https://github.com/sergio001g'
    },
    { 
      title: 'Aplicación Web SPA', 
      description: 'Aplicación de una sola página con React y gestión de estado avanzada.', 
      link: 'https://github.com/sergio001g'
    },
    { 
      title: 'Sitio Corporativo', 
      description: 'Sitio web elegante y profesional para una empresa de tecnología.', 
      link: 'https://github.com/sergio001g'
    },
  ]

  return (
    <section id="proyectos" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {proyectos.map((proyecto, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 hover:border-purple-400 transition-colors duration-300">
              {proyecto.image && (
                <Image 
                  src={proyecto.image}
                  alt={proyecto.title} 
                  width={300} 
                  height={200} 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}
              <CardHeader>
                <CardTitle className="text-purple-400">{proyecto.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">{proyecto.description}</CardDescription>
                <Link href="https://github.com/sergio001g" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-purple-400 hover:text-purple-300">
                  Ver en GitHub
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

