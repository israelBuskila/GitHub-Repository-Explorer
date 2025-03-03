'use client'

import { getAllRepos } from "@/services/repo";
import Repository from "@/types/repo";
import Repos from "@/types/repo";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {

  const [repos, setRepos] = useState<Repository[]>([])
  
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const userName = e.target.value
    if(!userName) return 
    const res = await getAllRepos(userName)
    if(res.data){ 
    setRepos(res.data)}
  }

  const sortByStars = () => {
    if(!repos) return
    const sortedRepos = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count)
    setRepos(sortedRepos)
  }
  return (
   <div>
    <h1>GitHub Repo Explorer</h1>
    <h2>Enter a GitHub username to explore repositories. </h2>
    <input placeholder="Search Github user..." onChange={handleSearch}></input><br/>
    <button onClick={sortByStars}>Sort by Stars</button>
    
    <ul>
      {repos.map((repo: Repository) => {
      return <Link href={`/${repo.name}`}><li key={repo.id}>
      {repo.name}
      {repo.description}
      {repo.stargazers_count}
      {repo.language}
    </li></Link>
    })}
    </ul>
    
   
   </div>
  );
}
