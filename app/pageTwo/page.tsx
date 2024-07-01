// "use client"

import React from 'react'
import Link from 'next/link'
import TransitionLinkNoQuery from '@/components/TransitionLink/TransitionLinkNoQuery'

const menuLinks = [
  { path: "/pageOne", label: "pageOne", prefetching: false },
  // { path: "/testpage", label: "TestPage", prefetching: false },
];

const pageTwo = () => {
  return (
    <div style={{width: "100vw", height: "100vh", background: "gray"}}>
      pageTwo
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

export default pageTwo