import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
      <h1 className="text-red-600">
        Course not Found
      </h1>
      <Link href="/">Return home</Link>
    </div>
  )
}

export default NotFound