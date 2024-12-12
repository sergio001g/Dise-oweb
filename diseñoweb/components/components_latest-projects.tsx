import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function LatestProjects() {
  const projects = [
    { title: 'API RESTful', description: 'Desarrollé una API RESTful escalable utilizando Node.js y Express.', tech: 'Node.js, Express, MongoDB' },
    { title: 'App de React', description: 'Creé una aplicación web de una sola página con React y Redux.', tech: 'React, Redux, Styled-Components' },
    { title: 'Microservicios', description: 'Implementé una arquitectura de microservicios utilizando Docker y Kubernetes.', tech: 'Docker, Kubernetes, Go' },
  ]

  return (
    <section id="latest-projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">Últimos Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-purple-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-purple-400">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">{project.tech}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <Link href="#" className="text-purple-400 hover:underline">Ver detalles...</Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

