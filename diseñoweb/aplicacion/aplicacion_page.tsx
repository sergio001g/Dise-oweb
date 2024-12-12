import Header from '@/componentes/header'
import Hero from '@/componentes/hero'
import Servicios from '@/componentes/servicios'
import Proyectos from '@/componentes/proyectos'
import Tecnologias from '@/componentes/tecnologias'
import GitHubProfile from '@/componentes/github-profile'
import Contacto from '@/componentes/contacto'
import Footer from '@/componentes/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <Header />
      <main>
        <Hero />
        <Servicios />
        <Proyectos />
        <Tecnologias />
        <GitHubProfile />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

