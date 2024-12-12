import { Button } from '@/components/ui/button'

export default function AboutMe() {
  return (
    <section id="about-me" className="bg-gradient-to-r from-blue-200 to-pink-200 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="/placeholder.svg?height=400&width=400&text=Tu+Foto+Aquí" alt="Sobre Mí" className="rounded-full shadow-lg mx-auto" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Sobre Mí</h2>
          <p className="text-xl mb-6 text-gray-600">
            ¡Hola! Soy [Tu Nombre], un apasionado [Tu Profesión/Hobby]. 
            Me encanta [Tus Intereses] y compartir mis experiencias contigo. 
            Este blog es mi espacio personal donde expreso mis pensamientos, 
            comparto mis aventuras y conecto con personas maravillosas como tú.
          </p>
          <Button variant="outline" className="border-pink-400 text-pink-400 hover:bg-pink-100">Conóceme Más</Button>
        </div>
      </div>
    </section>
  )
}

