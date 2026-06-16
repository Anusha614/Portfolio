import React from "react";

export default function RepoCard ({project}) {
    return (
        <>
         {/* THE PREMIUM MULTI-FEATURE REPOSITORY CARD */}
<div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300 flex flex-col justify-between overflow-hidden">
  
  {/* UPPER CONTAINER: Identity & Details */}
  <div className="p-6">
    
    {/* ROW 1: Header Identity & Navigation Links */}
    <div className="flex items-start justify-between gap-4 mb-3">
      <div className="flex items-center gap-2 max-w-[75%]">
        <span className="text-gray-400 font-sans">&#128193;</span>
        <h3 className="font-bold text-gray-900 text-lg tracking-tight truncate group-hover:text-indigo-600 transition-colors">
          {project.name}
        </h3>
      </div>
      
      {/* ACTION NAVIGATION DEPLOYMENTS */}
      <div className="flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
        <a 
          href={project.html_url} 
          target="_blank" 
          rel="noreferrer"
          className="p-1.5 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-colors"
          title="View Source Code"
        >
          <span className="text-indigo-500 font-mono">&lt;/&gt;</span>
        </a>
        
        {project.homepage && (
          <a 
            href={project.homepage} 
            target="_blank" 
            rel="noreferrer"
            className="p-1.5 rounded-lg text-indigo-500 hover:text-indigo-700 hover:bg-indigo-50 transition-colors"
            title="Open Live Deployment"
          >
            🔗
          </a>
        )}
      </div>
    </div>

    {/* ROW 2: Description Log */}
    <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-4">
      {project.description || "No description provided for this repository. Open the repository code page to view context logs."}
    </p>

    {/* ROW 3: Interactive Language & Visibility Badges */}
    <div className="flex flex-wrap gap-1.5 mb-2">
      {/* Primary Language Status Dot */}
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-50 text-gray-600 border border-gray-100">
        <span className={`h-2 w-2 rounded-full ${
          project.language === 'JavaScript' ? 'bg-amber-400' :
          project.language === 'HTML' ? 'bg-orange-500' :
          project.language === 'CSS' ? 'bg-indigo-500' :
          project.language === 'C++' ? 'bg-rose-500' : 
          project.language === 'Python' ? 'bg-sky-500' : 'bg-indigo-400'
        }`} />
        {project.language || "Markdown"}
      </span>

      {/* Visibility Tag */}
      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-50 text-slate-500 border border-slate-100 capitalize">
        {project.visibility || "Public"}
      </span>
    </div>

  </div>

  {/* LOWER FOOTER PANEL: Telemetry Metrics */}
  <div className="px-6 py-3 bg-gray-50/70 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-400">
    
    {/* Left Side: Repo Engagement Stats */}
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1 hover:text-amber-500 transition-colors">
        <span>⭐</span> 
        <span className="text-gray-700 font-semibold">{project.stargazers_count}</span>
      </div>
      <div className="flex items-center gap-1 hover:text-sky-500 transition-colors">
        <span>🌿</span> 
        <span className="text-gray-700 font-semibold">{project.forks_count}</span>
      </div>
    </div>

    {/* Right Side: Memory Data Size Weight */}
    <div className="font-mono text-[11px] text-gray-400">
      {project.size ? `${(project.size / 1024).toFixed(1)} MB` : "0.0 MB"}
    </div>

  </div>

</div>
</>
        
    )
}