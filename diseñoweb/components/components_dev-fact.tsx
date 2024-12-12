import { useState, useEffect } from 'react'

export default function DevFact() {
  const [fact, setFact] = useState('')

  useEffect(() => {
    const facts = [
      "El primer bug de computadora fue un insecto real.",
      "La palabra 'algoritmo' viene del nombre del matemático persa Al-Khwarizmi.",
      "El primer programador de la historia fue una mujer: Ada Lovelace.",
      "El lenguaje de programación Python fue nombrado así por el grupo de comedia Monty Python.",
      "El primer videojuego comercial, 'Pong', fue lanzado en 1972."
    ]
    setFact(facts[Math.floor(Math.random() * facts.length)])
  }, [])

  return (
    <div className="bg-gray-800 border-b border-gray-700 py-2">
      <div className="container mx-auto px-4 text-center">
        <p className="text-purple-400 text-sm">
          <span className="font-bold">Hecho del día por sergio001g:</span> {fact}
        </p>
      </div>
    </div>
  )
}

