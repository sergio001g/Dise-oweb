import { Badge } from '@/components/ui/badge'

export default function TechStack() {
  const technologies = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB',
    'GraphQL', 'Docker', 'Kubernetes', 'AWS', 'Git', 'CI/CD'
  ]

  return (
    <section id="tech-stack" className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">Mi Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-700 text-purple-400 hover:bg-purple-900 transition-colors duration-300">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}

