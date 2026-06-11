import React from 'react'

export default function Home() {
  return (
    <div
      className="hero min-h-screen relative flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop)",
      }}
    >
     
      <div className="hero-overlay absolute inset-0 bg-gray-900/70"></div>
      
  
      <div className="hero-content text-center relative z-10 text-white px-4">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-extrabold tracking-tight sm:text-6xl">
            Hi, I'm <span className="text-indigo-400">Anusha Deshpande</span>
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            I build responsive web applications, design clean backend architectures, 
            and solve complex algorithmic problems. Welcome to my portfolio.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-200">
            View My Projects
          </button>
        </div>
      </div>
    </div>
  )
}