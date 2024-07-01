// "use client"

import React from 'react'
import Link from 'next/link'
import TransitionLinkNoQuery from '@/components/TransitionLink/TransitionLinkNoQuery'

const menuLinks = [
  // { path: "/pageOne", label: "pageOne", prefetching: false },
  { path: "/pageTwo", label: "pageTwo", prefetching: false },
];

const pageOne = () => {
  return (
    <div style={{width: "100vw", height: "100vh", background: "blue"}}>
      pageOne
      <br></br>
      <br></br>
      <br></br>
      {
        // menuLinks.map((link) => (
          <TransitionLinkNoQuery 
            className={`menu-link`} 
            href={menuLinks[0].path}
            label={menuLinks[0].label}
            prefetch={menuLinks[0].prefetching}
          >
            {menuLinks[0].label}
          </TransitionLinkNoQuery>
        // ))
      }
    </div>
  )
}

export default pageOne