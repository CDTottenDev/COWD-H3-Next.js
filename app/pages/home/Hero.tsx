import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#999595] dark:bg-[#271d1d]">
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 mb-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Cut <em className="text-red-500 font-bold text-[64px]">Above</em> the Rest
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 flex flex-col md:flex-row items-center justify-center gap-2">
          <span><em className="text-red-500 font-bold text-[32px]">Your</em> ground, <em className="text-red-500 font-bold text-[32px]">Our</em> expertise, Endless possibilities</span>
        </p>
      </div>

      {/* Before/After Images */}
      <div className="relative z-10 flex flex-col md:flex-row gap-4 justify-center items-center max-w-6xl mx-auto px-4">
        <div className="relative group overflow-hidden rounded-lg shadow-xl transition-transform hover:scale-105 w-full md:w-auto">
          <Image 
            src="/images/.PC/hero/road-after-HD-PC.jpg" 
            alt="Road After Construction" 
            width={406} 
            height={901}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 406px"
            className="w-full h-[50vh] md:h-[70vh] object-cover"
            loading="eager"
            quality={75}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
            After
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-xl transition-transform hover:scale-105 w-full md:w-auto">
          <Image 
            src="/images/.PC/hero/road-before-HD-PC.jpg" 
            alt="Road Before Construction" 
            width={406} 
            height={901}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 406px"
            className="w-full h-[50vh] md:h-[70vh] object-cover"
            loading="eager"
            quality={75}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
            Before
          </div>
        </div>
      </div>
    </section>
  )
}
