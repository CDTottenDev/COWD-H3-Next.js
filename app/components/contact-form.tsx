'use client'

import { FloatingOverlay } from '@floating-ui/react'
import { X } from 'lucide-react'

export function ContactForm({ onClose }: { onClose: () => void }) {
  return (
    <FloatingOverlay
      lockScroll
      className="bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 fixed inset-0"
      style={{ zIndex: 1000 }}
    >
      <div className="w-full max-w-[1000px] bg-white rounded-2xl shadow-xl p-8 md:p-8">
        <div className="flex justify-between items-center pb-6 border-b-2 border-gray-100 mb-8">
          <h2 className="text-[1.75rem] font-semibold text-gray-800 m-0">Contact Us</h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-all duration-200 hover:rotate-90"
          >
            <X size={24} />
          </button>
        </div>

        <form>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-1 md:row-span-4">
              <div className="form-group mb-6">
                <label className="block mb-2 font-medium text-gray-600 text-[0.95rem]">Message</label>
                <textarea 
                  className="w-full h-full min-h-[200px] p-3 border-2 border-gray-200 rounded-lg text-base transition-all duration-200 text-gray-800 bg-gray-50 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-[0_0_0_3px_rgba(66,153,225,0.15)]"
                  placeholder="Your message..."
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="form-group">
                <label className="block mb-2 font-medium text-gray-600 text-[0.95rem]">Name</label>
                <input 
                  type="text"
                  className="w-full p-3 border-2 border-gray-200 rounded-lg text-base transition-all duration-200 text-gray-800 bg-gray-50 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-[0_0_0_3px_rgba(66,153,225,0.15)]"
                />
              </div>

              <div className="form-group">
                <label className="block mb-2 font-medium text-gray-600 text-[0.95rem]">Email</label>
                <input 
                  type="email"
                  className="w-full p-3 border-2 border-gray-200 rounded-lg text-base transition-all duration-200 text-gray-800 bg-gray-50 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-[0_0_0_3px_rgba(66,153,225,0.15)]"
                />
              </div>

              <div className="form-group">
                <label className="block mb-2 font-medium text-gray-600 text-[0.95rem]">Subject</label>
                <input 
                  type="text"
                  className="w-full p-3 border-2 border-gray-200 rounded-lg text-base transition-all duration-200 text-gray-800 bg-gray-50 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-[0_0_0_3px_rgba(66,153,225,0.15)]"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-4 px-8 rounded-lg font-medium text-base transition-all duration-200 hover:bg-blue-600 hover:-translate-y-[1px] hover:shadow-[0_4px_6px_rgba(66,153,225,0.2)] active:translate-y-0"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </FloatingOverlay>
  )
} 