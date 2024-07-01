import React from 'react'
import SlugPageWrapper from '../components/SlugPageWrapper/SlugPageWrapper'
import { getProjectData, getSlugs } from '../../../lib/contentfulApi';
import ContactHoriInfiniteScroll from '../../../components/ContactHoriInfiniteScroll/page';


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
    <>
    <div>
      <SlugPageWrapper 
        projectPageData={projectPageData}
      />
    </div>

    <ContactHoriInfiniteScroll />

    </>
  )
}



// {
//   "slug": "bratz",
//   "gifUrl": "https://images.ctfassets.net/e28u0mhz7hn5/B1t4l0wj70K67hNOhX6SV/a513c7fdd8d59af5d09793fc1a338216/bratz.gif",
//   "siteUrl": "https://www.bratz.com/",
//   "bkgdImgUrl": "https://images.ctfassets.net/e28u0mhz7hn5/3px0mjhPxqbLzEGfaTMo2c/2fa4f9c0395497770f540449b8c80b1f/bratz-bkgd.png",
//   "description": "The official Bratz website. Get to know the girls with a passion for fashion...",
//   "projectName": "Bratz Dolls"
// }