import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Palette, Code, Search } from 'lucide-react'

export default function Servicios() {
  const servicios = [
    { icon: Palette, title: 'Diseño UI/UX', description: 'Creamos interfaces atractivas y fáciles de usar que cautivan a tus usuarios.' },
    { icon: Code, title: 'Desarrollo Web', description: 'Construimos sitios web rápidos, seguros y escalables con las últimas tecnologías.' },
    { icon: Search, title: 'SEO', description: 'Optimizamos tu sitio para los motores de búsqueda, mejorando tu visibilidad en línea.' },
  ]

  return (
    <section id="servicios" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-purple-400 transition-colors duration-300">
              <CardHeader>
                <servicio.icon className="w-12 h-12 text-purple-400 mb-4" />
                <CardTitle className="text-purple-400">{servicio.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">{servicio.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

