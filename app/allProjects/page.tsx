import React from 'react'
import Link from 'next/link';

import CursorComponent from './components/CursorComponent/CursorComponent';
import ProjectsAniFadeUpJS from './components/ProjectsAniFadeUpJS/ProjectsAniFadeUpJS';
import ProjectsTextGradient from './components/ProjectsTextGradient/ProjectsTextGradient';
import ProjectPlx from './components/ProjectsPlx/ProjectsPlx';

import { ibdProjectsData } from '../../lib/contentfulApi';

import { inter } from '../../app/fonts';
import { montserrat } from '../../app/fonts';
import { raleway } from '../../app/fonts';
import './page.scss';
import PageTransitionEffect from "../../components/PageTransEffect/page";

export interface companyInfoTitleProps {
  companyInfoTitle: string;
}

// const AllProjects = (props) => {
export default async function AllProjects() {
  // const ibd = 'ibd'
  // const whichProject = `${ibd}ProjectsData`;
  // console.log('whichProject ', whichProject)
  // if ('ibd') {
  //   return 
  // }

  // const ibdProjectsData = await ibdProjectsData();
  const ibdProjects = await ibdProjectsData() as { 
    companyInfoJson: { 
      pageTitle: string; 
      companyName: string; 
      companyName2: string 
    }[];
    companyProjectsJson: { 
      slug: string;
      gifUrl: string;
      siteUrl: string;
      bkgdImgUrl: string;
      description: string;
      projectName: string;
    }[]; 
  }[];
  
  const companyInfoTitle = ibdProjects[0].companyInfoJson[0].pageTitle;
  const companyName = ibdProjects[0].companyInfoJson[0].companyName;
  const companyName2 = ibdProjects[0].companyInfoJson[0].companyName2;
  // console.log('companyInfoTitle ', companyInfoTitle)

  const companyProjects = ibdProjects[0].companyProjectsJson;
  // console.log('companyProjects ', companyProjects)

  return (
    <PageTransitionEffect>
    <div className="projectsPageWrapper">
      <CursorComponent />
      {/* <div className="cursor_inner_div">
        <span>see more</span>
      </div> */}

      <ProjectsAniFadeUpJS 
        companyInfoTitle={companyInfoTitle as string}
      />


      <div 
        // className="animateLeftToRightOnScroll line"
        className=" line"
      ></div>

      <div className="titleSection">
        <h5 className={`${montserrat.className}`}>{companyName}</h5>
        <h3 className={`${montserrat.className}`}>{companyName2}</h3>
        <div className="titleSectionLine"></div>
      </div>

      <ProjectsTextGradient />

      <ProjectPlx 
        companyProjects={companyProjects} 
      />

    </div>
    </PageTransitionEffect>
  )
}

// export default AllProjects;

// return (
//   <div className="all_projects" style={{position: 'relative', left: '300px'}}>
//     AllProjects

//     {
//       listOfProjects.map(( eachProject ) => (
//         <ul>
//           <li>
//             <Link href={`allProjects/${eachProject.slug}`}>
//               { eachProject.projectName }
//             </Link>
//           </li>
//         </ul>
//       ))
//     }
//   </div>
// )