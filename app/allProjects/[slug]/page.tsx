import React from 'react'
import ProjectPageWrapper from '../components/SlugPageWrapper/SlugPageWrapper'
import { getProjectData, getSlugs } from '../../../lib/contentfulApi';
import PageTransitionEffect from '../../../components/PageTransEffect/page';

// THIS RESULTS --> 
// ● (SSG) prerendered as static HTML (uses getStaticProps)
export async function generateStaticParams() {
  const slugs = await getSlugs();
  // console.log('EachProjectPage slugs ', slugs)

  return slugs.map((slug) => ({ slug }));
}


export default async function EachProjectPage() {
  // EachProjectPage props --> { params: { slug: 'ibd' }, searchParams: {} }
  
  const projectPageData = await getProjectData();
  // console.log('EachProjectPage projectPageData ', projectPageData)

  return (
    <PageTransitionEffect>
    <div>
      <ProjectPageWrapper 
        projectPageData={projectPageData}
      />
    </div>
    </PageTransitionEffect>
  )
}
