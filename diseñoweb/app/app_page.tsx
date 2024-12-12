import Header from '@/components/header'
import Hero from '@/components/hero'
import Servicios from '@/components/servicios'
import Proyectos from '@/components/proyectos'
import Tecnologias from '@/components/tecnologias'
import GitHubProfile from '@/components/github-profile'
import Contacto from '@/components/contacto'
import Footer from '@/components/footer'

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

