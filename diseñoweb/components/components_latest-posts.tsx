import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function LatestPosts() {
  const posts = [
    { title: 'Mi Viaje a las Montañas', description: 'Comparto mi experiencia escalando el Monte Everest...', date: '15 de Mayo, 2023' },
    { title: 'Receta: Pastel de Chocolate', description: 'La receta perfecta para sorprender a tus amigos...', date: '2 de Junio, 2023' },
    { title: 'Reseña de Libro: "El Alquimista"', description: 'Mis pensamientos sobre esta obra maestra de Paulo Coelho...', date: '20 de Junio, 2023' },
  ]

  return (
    <section id="latest-posts" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Últimas Entradas del Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-pink-400">{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <Link href="#" className="text-blue-400 hover:underline">Leer más...</Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

