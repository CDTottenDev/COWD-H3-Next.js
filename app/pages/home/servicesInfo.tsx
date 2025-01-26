"use client";   

import { useFloating, FloatingPortal, offset, shift, Placement } from '@floating-ui/react';
import { useState } from 'react';

const ServicesInfo = () => {
    const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

    // Define tooltip content for each service
    const tooltipContent = [
        "We specialize in preparing home sites for new construction, including grading, foundation preparation, and drainage systems.",
        "From site preparation to final grading, we handle commercial projects of all sizes with precision and professionalism.",
        "Our excavation services include land clearing, grading, foundation digging, and precise earthwork for any project size.",
        "Complete utility trenching services including water, sewer, electrical, and communications line installation.",
        "Full-service septic system installation and repair, fully certified and compliant with DEQ standards.",
        "Comprehensive contracting services including land preparation, concrete work, and project management."
    ];

    // Create floating UI instance
    const {refs, floatingStyles, context} = useFloating({
        open: activeTooltip !== null,
        placement: 'top' as Placement,
        middleware: [offset(10), shift()],
    });

    return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Residential Construction */}
          <div
            ref={activeTooltip === 0 ? refs.setReference : null}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 transition-transform hover:scale-105 relative cursor-pointer"
            onMouseEnter={() => setActiveTooltip(0)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <div className="mb-4 flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Residential Construction</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">Custom home site prep tailored to your vision</p>
          </div>

          {/* Commercial Construction */}
          <div
            ref={activeTooltip === 1 ? refs.setReference : null}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 transition-transform hover:scale-105 relative cursor-pointer"
            onMouseEnter={() => setActiveTooltip(1)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <div className="mb-4 flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Commercial Construction</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">Professional building solutions for businesses</p>
          </div>

          {/* Excavation */}
          <div
            ref={activeTooltip === 2 ? refs.setReference : null}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 transition-transform hover:scale-105 relative cursor-pointer"
            onMouseEnter={() => setActiveTooltip(2)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <div className="mb-4 flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Excavation</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">Site preparation and earthwork services</p>
          </div>

          {/* Trenching */}
          <div
            ref={activeTooltip === 3 ? refs.setReference : null}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 transition-transform hover:scale-105 relative cursor-pointer"
            onMouseEnter={() => setActiveTooltip(3)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <div className="mb-4 flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Trenching</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">All phases of utility</p>
          </div>

          {/* Septic Systems */}
          <div
            ref={activeTooltip === 4 ? refs.setReference : null}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 transition-transform hover:scale-105 relative cursor-pointer"
            onMouseEnter={() => setActiveTooltip(4)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <div className="mb-4 flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Septic Systems</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">DEQ certified for all your septic needs</p>
          </div>

          {/* General Contracting */}
          <div
            ref={activeTooltip === 5 ? refs.setReference : null}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 transition-transform hover:scale-105 relative cursor-pointer"
            onMouseEnter={() => setActiveTooltip(5)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <div className="mb-4 flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">General Contracting</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">Land clearing, concrete flatwork, and more</p>
          </div>
        </div>

        {activeTooltip !== null && (
          <FloatingPortal>
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              className="bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-xs z-50"
            >
              {tooltipContent[activeTooltip]}
            </div>
          </FloatingPortal>
        )}
      </div>
    </div>
    )
}

export default ServicesInfo;