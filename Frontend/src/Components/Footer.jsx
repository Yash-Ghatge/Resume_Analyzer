import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-linear-to-b from-[#1B004D] to-[#2E0A6F] text-white">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                    <h1 className='text-3xl md:text-5xl font-bold bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent tracking-wide'>ResumeAI</h1>
                </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                    Empowering job seekers with intelligent resume analysis for smarter career growth and Helping you build stronger resumes with powerful AI-driven insights.
                </p>
            </div>
            <div className="border-t border-[#3B1A7A]">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a href="">ResumeAI</a> ©2025. All rights reserved.
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
