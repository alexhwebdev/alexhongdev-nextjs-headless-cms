// "use client"

import React from 'react'
import Link from 'next/link'
import TransitionLink from '@/components/TransitionLink/TransitionLink'

const pageOne = () => {
  return (
    <div style={{width: "100vw", height: "100vh", background: "blue"}}>
      pageOne
      <br></br>
      <br></br>
      <br></br>
      <Link href={`/pageTwo`}>Button pageTwo</Link>
      <TransitionLink href="/pageTwo" label="pageTwo ->" />
    </div>
  )
}

export default pageOne