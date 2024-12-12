import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function GitHubProfile() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">Mi Perfil de GitHub</h2>
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-400">sergio001g</CardTitle>
            <CardDescription className="text-gray-400">Desarrollador Web & Entusiasta del Código Abierto</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              Aquí encontrarás mis proyectos más recientes, contribuciones a la comunidad open source,
              y un vistazo a mi actividad en GitHub. ¡Pronto habrá más información!
            </p>
            <Button 
              variant="outline" 
              className="border-purple-400 text-purple-400 hover:bg-purple-900"
              onClick={() => window.open('https://github.com/sergio001g', '_blank')}
            >
              Ver Perfil Completo
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

