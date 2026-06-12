import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {

  const Info = useLoaderData ()

  return (
  )
}
    
 

export const GithubInfoLoader = async () => {
  const response = await fetch ('https://api.github.com/users/Anusha614')
  return response.json()
}