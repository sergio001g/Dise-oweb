'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'

export default function Contacto() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    await new Promise(resolve => setTimeout(resolve, 2000))

    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    })

    setIsSubmitting(false)
    // Aquí se resetearía el formulario si fuera necesario
  }

  return (
    <section id="contacto" className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">Contáctanos</h2>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input 
              type="text" 
              placeholder="Tu Nombre" 
              required 
              className="bg-gray-900 text-gray-300 border-gray-700 focus:border-purple-400" 
            />
            <Input 
              type="email" 
              placeholder="Tu Email" 
              required 
              className="bg-gray-900 text-gray-300 border-gray-700 focus:border-purple-400" 
            />
            <Textarea 
              placeholder="Cuéntanos sobre tu proyecto" 
              required 
              className="bg-gray-900 text-gray-300 border-gray-700 focus:border-purple-400" 
            />
            <Button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

