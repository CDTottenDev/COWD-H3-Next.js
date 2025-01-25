import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-zinc-800">
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Professional Excavation & Construction Services
        </h1>
        <p className="text-xl md:text-2xl text-gray-200">
          Quality workmanship and reliable service for all your construction needs
        </p>
      </div>
    </section>
  )
}
