import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Palette, Code, Smartphone } from 'lucide-react'

export default function Services() {
  const services = [
    { icon: Palette, title: 'Diseño UI/UX', description: 'Creamos interfaces atractivas y fáciles de usar.' },
    { icon: Code, title: 'Desarrollo Web', description: 'Construimos sitios web rápidos y funcionales.' },
    { icon: Smartphone, title: 'Diseño Responsivo', description: 'Aseguramos que tu sitio se vea bien en todos los dispositivos.' },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

