// "use client"

import React from 'react'
import Link from 'next/link'
import TransitionLink from '@/components/TransitionLink/TransitionLink'


const pageTwo = () => {
  return (
    <div style={{width: "100vw", height: "100vh", background: "gray"}}>
      pageTwo
      <br></br>
      <br></br>
      <br></br>
      <Link href={`/pageOne`}>Button pageOne</Link>
      <TransitionLink href="/pageOne" label="pageOne ->" />
    </div>
  )
}

export default pageTwo