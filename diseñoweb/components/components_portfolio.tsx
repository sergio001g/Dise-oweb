import Image from 'next/image'

export default function Portfolio() {
  const projects = [
    { title: 'E-commerce', image: '/placeholder.svg?height=300&width=400' },
    { title: 'Blog Personal', image: '/placeholder.svg?height=300&width=400' },
    { title: 'Aplicación Web', image: '/placeholder.svg?height=300&width=400' },
  ]

  return (
    <section id="portfolio" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestro Portafolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

