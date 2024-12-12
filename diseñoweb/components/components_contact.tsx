import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">Conectemos</h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-4">
            <Input type="text" placeholder="Tu Nombre" className="bg-gray-800 text-gray-300 border-gray-700 focus:border-purple-400" />
            <Input type="email" placeholder="Tu Email" className="bg-gray-800 text-gray-300 border-gray-700 focus:border-purple-400" />
            <Textarea placeholder="Tu Mensaje (¿Tienes un proyecto interesante?)" className="bg-gray-800 text-gray-300 border-gray-700 focus:border-purple-400" />
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">Enviar Mensaje</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

