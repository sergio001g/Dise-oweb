'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ProyectoModal } from './proyecto-modal'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">
            Diseño Web Profesional
          </h1>
          <p className="text-xl mb-6 text-gray-400">Creando experiencias digitales únicas y funcionales para tu negocio.</p>
          <Button 
            variant="default" 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-white"
            onClick={() => setIsModalOpen(true)}
          >
            Ver Proyectos
          </Button>
        </div>
        <div className="md:w-1/2">
          <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
            <pre className="text-green-400">
              <code>
{`function createAwesomeWebsite() {
  const skills = ['Diseño', 'Desarrollo', 'SEO'];
  const creativity = Infinity;
  const clientSatisfaction = 100;

  return skills.reduce((website, skill) => {
    website[skill] = creativity * clientSatisfaction;
    return website;
  }, {});
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
      <ProyectoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

