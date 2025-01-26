import Image from 'next/image'

const About = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center w-1/2 p-20 mb-[5%]">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-[35%]">About H3 Construction</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center text-lg leading-8">
          At <em className="text-black dark:text-white"><em className="text-red-500 font-bold">H3</em> Excavation and Construction</em>, we're all about laying the groundwork to enhance your property. 
          With <em className="text-black dark:text-white">15</em> years of hands-on experience and <em className="text-black dark:text-white">5</em> years steering our own business, we understand 
          what it takes to get your job done right. From <em className="text-black dark:text-white">grading</em> and <em className="text-black dark:text-white">sloping</em> to <em className="text-black dark:text-white">trenching</em> and complete 
          <em className="text-black dark:text-white">septic system</em> installations, we've got your excavation needs covered. As a DEQ-certified company, 
          you can trust that your septic work will be done properly and up to code. We keep things simple: 
          <em className="text-black dark:text-white underline decoration-red-500">quality work</em>, <em className="text-black dark:text-white underline decoration-red-500">fair prices</em>, and <em className="text-black dark:text-white underline decoration-red-500">clear communication</em>. When you choose H3, you're partnering with a 
          team that cares about getting your project done right the first time. Let us help build the 
          foundation for your next project.
          </p>
          <ul className="mt-8 space-y-2">
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Licensed and Insured
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Experienced Team
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Quality Service
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Punctual / Dependable
            </li>
          </ul>
        </div>
        <div className="w-1/2 p-20">
          <Image 
            src="/images/.PC/hero/excavatoratwork.jpg" 
            alt="About H3 Construction" 
            width={500} 
            height={500}
            loading="lazy"
            quality={75}
          />
        </div>
      </div>
    </div>
  )
}

export default About