'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProyectoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ProyectoModal({ isOpen, onClose }: ProyectoModalProps) {
  const [animationClass, setAnimationClass] = useState('opacity-0 scale-95')

  useEffect(() => {
    if (isOpen) {
      setAnimationClass('opacity-100 scale-100')
    } else {
      setAnimationClass('opacity-0 scale-95')
    }
  }, [isOpen])

  if (!isOpen) return null

  const temas = [
    "Principios de diseño web",
    "HTML5 y CSS3 avanzado",
    "JavaScript y frameworks modernos",
    "Diseño responsivo",
    "Accesibilidad web",
    "Optimización de rendimiento",
    "UX/UI para diseñadores web",
    "Tendencias actuales en diseño web"
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full transition-all duration-300 ${animationClass}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-purple-400">Aprender más sobre Diseño Web</h2>
          <Button variant="ghost" onClick={onClose} className="text-gray-400 hover:text-purple-400">
            <X size={24} />
          </Button>
        </div>
        <ul className="space-y-2">
          {temas.map((tema, index) => (
            <li key={index} className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
              • {tema}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

