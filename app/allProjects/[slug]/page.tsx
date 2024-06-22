import React from 'react'
import ProjectPageWrapper from '../components/SlugPageWrapper/SlugPageWrapper'
import { getProjectData, getSlugs } from '../../../lib/contentfulApi';

export async function generateStaticParams() {
  const slugs = await getSlugs();
  console.log('EachProjectPage slugs ', slugs)

  return slugs.map((slug) => ({ slug }));
}


export default async function EachProjectPage() {
  // console.log('EachProjectPage props ', props)
  // EachProjectPage props  
  // { params: { slug: 'ibd' }, searchParams: {} }
  
  const projectPageData = await getProjectData();
  // console.log('EachProjectPage projectPageData ', projectPageData)

  return (
    <div>
      <ProjectPageWrapper 
        projectPageData={projectPageData}
      />
    </div>
  )
}
