import React from 'react'
import Link from 'next/link';

import CursorComponent from './components/CursorComponent/CursorComponent';
import ProjectsAniFadeUpJS from './components/ProjectsAniFadeUpJS/ProjectsAniFadeUpJS';
import ProjectsTextGradient from './components/ProjectsTextGradient/ProjectsTextGradient';
import ProjectPlx from './components/ProjectsPlx/ProjectsPlx';

import { getIbdProjectsData } from '../../lib/contentfulApi';

import { inter } from '../../app/fonts';
import { montserrat } from '../../app/fonts';
import { raleway } from '../../app/fonts';
import './page.scss';


export interface companyInfoTitleProps {
  companyInfoTitle: string;
}

// const AllProjects = (props) => {
export default async function AllProjects() {
  // const ibdProjectsData = await getIbdProjectsData();
  const ibdProjectsData = await getIbdProjectsData() as { 
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
  // const ibdCompanyProjects = await getIbdProjectsData() as { 
  //   companyProjectsJson: { 
  //     slug: string;
  //     gifUrl: string;
  //     siteUrl: string;
  //     bkgdImgUrl: string;
  //     description: string;
  //     projectName: string;
  //   }[];
  // }[];
  // console.log('AllProjects ibdProjectsData ', ibdProjectsData)
  // console.log('AllProjects ibdProjectsData[0].companyInfoJson ', ibdProjectsData[0].companyInfoJson)
  // console.log('AllProjects ibdProjectsData[0].companyProjectsJson ', ibdProjectsData[0].companyProjectsJson)

  
  const companyInfoTitle = ibdProjectsData[0].companyInfoJson[0].pageTitle;
  const companyName = ibdProjectsData[0].companyInfoJson[0].companyName;
  const companyName2 = ibdProjectsData[0].companyInfoJson[0].companyName2;
  // console.log('companyInfoTitle ', companyInfoTitle)

  const companyProjects = ibdProjectsData[0].companyProjectsJson;
  // console.log('companyProjects ', companyProjects)

  return (
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