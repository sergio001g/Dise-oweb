import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Testimonials() {
  const testimonials = [
    { name: 'Ana García', company: 'Tech Co.', content: 'WebCraft Studio transformó nuestra presencia en línea. ¡Increíble trabajo!' },
    { name: 'Carlos Rodríguez', company: 'StartUp Inc.', content: 'El equipo de WebCraft es profesional y entrega resultados excepcionales.' },
    { name: 'Laura Martínez', company: 'Design Agency', content: 'Estamos muy satisfechos con nuestro nuevo sitio web. ¡Gracias WebCraft!' },
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Lo que Dicen Nuestros Clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <Avatar className="w-12 h-12 mb-4">
                  <AvatarImage src={`/placeholder.svg?height=50&width=50&text=${testimonial.name[0]}`} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <CardTitle>{testimonial.name}</CardTitle>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

