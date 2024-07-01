// "use client"

import React from 'react'
import Link from 'next/link'
import TransitionLink from '@/components/TransitionLink/TransitionLink'
import TransitionLinkPage from '@/components/TransitionLink/TransitionLinkPage'

const Project = () => {
  return (
    <div style={{width: "100vw", height: "100vh", background: "green"}}>
      Project
      <br></br>
      <br></br>
      <br></br>

      <TransitionLinkPage href="http://localhost:3000/allProjects?id=ibd-projects" label="allProjects ->" />
    </div>
  )
}

export default Project