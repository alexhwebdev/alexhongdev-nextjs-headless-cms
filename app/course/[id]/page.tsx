import React from 'react'
import { notFound } from 'next/navigation'

interface Props {
  params: {id: string}
}

const SpecificCourse = ({ params }: Props) => {
  console.log('[SpecificCourse] ', params)

  if (!parseInt(params.id)) {
    notFound()
  }

  return (
    <div>Specific Course {params.id}</div>
  )
}

export default SpecificCourse