import React from 'react'
import { useLoaderData } from 'react-router-dom'
import RepoCard from './RepoCard'

export default function Github () { 

  const {profile, repo} = useLoaderData ()

   let totalForks = 0
   let starsEarned = 0
   let languagesMap = {}

   if (Array.isArray(repo)){

    repo.forEach(items =>{
      starsEarned += items.stargazers_count
      totalForks += items.forks_count

      if (items.language){
        languagesMap[items.language] = (languagesMap[items.language] || 0) + 1
      }
    })
   }

  const displayLanguages = Object.keys(languagesMap)
    .sort((a, b) => languagesMap[b] - languagesMap[a])
    .slice(0, 3)

    const popularRepos = Array.isArray(repo)
    ? [...repo].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 3)
    : [];


  // 🟢 STATIC/MOCK DATA ENGINE (Replace this block later when fetching from GitHub API)
 

  return (

    <div className="min-h-screen bg-gray-100 p-4">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
      
      {/* CARD CONTAINER BOX */}
      <div className='w-full'>
      <div className="w-full max-w-md bg-white rounded-3xl border border-gray-100 shadow-xl p-8 font-sans text-gray-800">
        
        {/* SECTION 1: HEADER INDENTITY FRAME */}
        <div className="flex items-center gap-4 mb-6">
          {/* API PLACEHOLDER: gitHubData.avatarUrl */}
          <div className="h-14 w-14 rounded-full overflow-hidden bg-gray-200">
            <img 
              src={profile.avatar_url} 
              alt="Profile Avatar" 
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            {/* API PLACEHOLDER: gitHubData.name */}
            <h2 className="text-xl font-bold tracking-tight text-gray-900 leading-tight">
              {profile.name}
            </h2>
            {/* API PLACEHOLDER: gitHubData.username */}
            <p className="text-sm text-gray-400">
              @{profile.login}
            </p>
          </div>
        </div>

        {/* SECTION 2: 3x2 METRICS GRID SYSTEM */}
        <div className="grid grid-cols-3 gap-y-4 gap-x-2 text-center border-b border-gray-100 pb-6 mb-6">
          
          

         

          {/* Metric Item: Followers */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-emerald-500 font-bold text-lg">
              <span>👥</span> 
              {/* API PLACEHOLDER: gitHubData.stats.followers */}
              <span className="text-gray-900">{profile.followers}</span>
            </div>
            <span className="text-[11px] text-gray-400 font-medium whitespace-nowrap mt-0.5">Followers</span>
          </div>

          {/* Metric Item: Followings */}

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-emerald-500 font-bold text-lg">
              <span>👥</span> 
              
              <span className="text-gray-900">{profile.following}</span>
            </div>
            <span className="text-[11px] text-gray-400 font-medium whitespace-nowrap mt-0.5">Following</span>
          </div>


           <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-emerald-500 font-bold text-lg">
              <span>🌿</span> 
              
              <span className="text-gray-900">{totalForks}</span>
            </div>
            <span className="text-[11px] text-gray-400 font-medium whitespace-nowrap mt-0.5">Forks</span>
          </div>


          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-emerald-500 font-bold text-lg">
              <span>⭐</span> 
              
              <span className="text-gray-900">{starsEarned}</span>
            </div>
            <span className="text-[11px] text-gray-400 font-medium whitespace-nowrap mt-0.5">Stars</span>
          </div>

          

          
          {/* Metric Item: Repositories */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-fuchsia-500 font-bold text-lg">
              <span>📦</span> 
              {/* API PLACEHOLDER: gitHubData.stats.repositories */}
              <span className="text-gray-900">{profile.public_repos}</span>
            </div>
            <span className="text-[11px] text-gray-400 font-medium whitespace-nowrap mt-0.5">Public Repositories</span>
          </div>

        </div>

        {/* SECTION 3: TOP LANGUAGES MODULE */}
        <div className="mb-6">
          <h3 className="flex items-center gap-1.5 text-sm font-bold text-gray-900 mb-3">
            <span className="text-indigo-500 font-mono">&lt;/&gt;</span> Top Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {/* API PLACEHOLDER: Loop over gitHubData.topLanguages */}
            {displayLanguages.map((lang, index) => (
              <span 
                key={index}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 border border-indigo-100/50"
              > 
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* SECTION 4: REPOSITORY REVENUE/LIST PANELS */}
        <div>
          <h3 className="flex items-center gap-1.5 text-sm font-bold text-gray-900 mb-3">
            <span className="text-rose-500">📖</span> Most Popular Repositories
          </h3>
          
          <div className="flex flex-col gap-2">
            {/* API PLACEHOLDER: Loop over gitHubData.popularRepos */}
            {popularRepos.map((repo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-3 rounded-xl bg-rose-50/50 border border-rose-100/40 hover:bg-rose-50 transition-colors"
              >
                <span className="text-sm font-bold text-rose-600 tracking-tight">
                  {repo.name}
                </span>
                
                <div className="flex items-center gap-3 text-xs font-semibold text-rose-400">
                  <div className="flex items-center gap-1">
                    <span>⭐</span> {repo.stargazers_count}
                  </div>
                  <div className="flex items-center gap-1">
                    <span>🌿</span> {repo.forks_count}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        

      </div>
      </div>

<div className="lg:col-span-2 w-full">hello
  
 {repo.map((item) => (
  <RepoCard
    key={item.id} 
    project={item} 
  />
))}
  
   hello</div>

      </div>
    </div>
  )
}

    
 

export const GithubInfoLoader = async () => {
  
  const [Profileresponse, RepoResponse] = await Promise.all (
  [fetch ('https://api.github.com/users/Anusha614'),
    fetch('https://api.github.com/users/Anusha614/repos')]
  )
  
    const ProfileData = await Profileresponse.json()
    const repoData = await RepoResponse.json()

  return{
    profile: ProfileData,
    repo: repoData
}
}