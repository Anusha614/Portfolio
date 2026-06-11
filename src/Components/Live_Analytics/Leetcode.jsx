import React from 'react'
import { useLoaderData } from "react-router-dom";

export default function Leetcode() {

  const data = useLoaderData()
return (
    <div className="hero min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6 gap-6">
   
      <div className="stats stats-vertical sm:stats-horizontal shadow-2xl bg-gray-800 text-white border border-white/5 w-full max-w-xl rounded-2xl overflow-hidden">
        
    
        <div className="stat place-items-center p-8">
          <div className="stat-title text-xs font-bold uppercase tracking-wider text-gray-400">Total Solved</div>
          
          <div className="stat-value text-5xl font-black text-indigo-400 mt-1">
            {data?.totalSolved || 0}
          </div>
          
          <div className="stat-desc text-[11px] text-gray-500 mt-2 font-mono">Problems Confirmed</div>
          
          <div className="flex gap-6 justify-center mt-4 bg-gray-900/30 px-4 py-2 rounded-xl border border-white/5">
            <div className="text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-green-400">Easy</div>
              <div className="text-[11px] font-black text-gray-400 mt-1">
                {data?.totalSubmissions?.[1]?.count || 0}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-yellow-400">Medium</div>
              <div className="text-[11px] font-black text-gray-400 mt-1">
                {data?.totalSubmissions?.[2]?.count || 0}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-red-400">Hard</div>
              <div className="text-[11px] font-black text-gray-400 mt-1">
                {data?.totalSubmissions?.[3]?.count || 0}
              </div>
            </div>
          </div>
        </div>

        
        <div className="stat place-items-center p-8">
          <div className="stat-title text-xs font-bold uppercase tracking-wider text-gray-400">Total Submissions</div>
          
          <div className="stat-value text-5xl font-black text-white mt-1">
            {data?.totalSubmissions?.[0]?.submissions || 0}
          </div>
          
          <div className="stat-desc text-[11px] text-gray-500 mt-2 font-mono">Attempts Evaluated</div>
          
          
          <div className="flex gap-6 justify-center mt-4 bg-gray-900/30 px-4 py-2 rounded-xl border border-white/5">
            <div className="text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-green-400">Easy</div>
              <div className="text-[11px] font-black text-gray-400 mt-1">
                {data?.totalSubmissions?.[1]?.submissions || 0}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-yellow-400">Medium</div>
              <div className="text-[11px] font-black text-gray-400 mt-1">
                {data?.totalSubmissions?.[2]?.submissions || 0}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-red-400">Hard</div>
              <div className="text-[11px] font-black text-gray-400 mt-1">
                {data?.totalSubmissions?.[3]?.submissions || 0}
              </div>
            </div>
          </div>
        </div>

      </div>

      
      <div className="bg-gray-800 border border-white/5 p-6 rounded-2xl w-full max-w-xl shadow-2xl">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 font-mono">
          Recent Execution Logs
        </h3>
        
        <div 
          className="space-y-2 max-h-60 overflow-y-auto pr-2"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#4b5563 transparent'
          }}
        >
          {data?.recentSubmissions?.slice(0, 5).map((sub, index) => {
            const isAccepted = sub.statusDisplay === "Accepted"
            return (
              <div key={index} className="flex items-center justify-between bg-gray-900/50 p-3 rounded-xl border border-white/5 text-sm font-mono">
                <span className="text-gray-300 truncate max-w-[70%]">{sub.title}</span>
                <span className={`text-xs px-2.5 py-0.5 rounded-md font-bold uppercase tracking-wider ${
                  isAccepted 
                    ?  'text-emerald-400 ' 
                    :  'text-red-400'
                }`}>
                  {isAccepted ? "PASS" : "FAIL"}
                </span>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )}


  export const lcInfoLoader = async () => {
    const response = await fetch ('https://alfa-leetcode-api.onrender.com/userProfile/Anusha_SD')
    return response.json()
  }