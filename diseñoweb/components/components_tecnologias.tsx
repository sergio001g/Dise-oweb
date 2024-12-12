import { Badge } from '@/components/ui/badge'

export default function Tecnologias() {
  const tecnologias = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Node.js',
    'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Tailwind CSS', 'Figma'
  ]

  return (
    <section id="tecnologias" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">Tecnologías que Dominamos</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {tecnologias.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-800 text-purple-400 hover:bg-purple-900 transition-colors duration-300">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}

