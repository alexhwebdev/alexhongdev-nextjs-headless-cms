import React from 'react'
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import CursorComponent from './components/CursorComponent/CursorComponent';
import ProjectsAniFadeUpJS from './components/ProjectsAniFadeUpJS/ProjectsAniFadeUpJS';
import ProjectPlx from './components/ProjectsPlx/ProjectsPlx';
import ContactHoriInfiniteScroll from '../../components/ContactHoriInfiniteScroll/page';
import TextScrollReveal from './components/TextScrollReveal/TextScrollReveal';

import { allProjectsData } from '../../lib/contentfulApi';

import { inter } from '../../app/fonts';
import { montserrat } from '../../app/fonts';
import { raleway } from '../../app/fonts';
import './page.scss';
import { GetAllProjectsData } from './components/GetAllProjectsData/GetAllProjectsData';


export interface companyInfoTitleProps {
  companyInfoTitle: string;
}
export interface companyInfoDescProps {
  companyDesc: string;
  companyImgs: {
    url: string
  }[]
}
interface SearchParams {
  id: string;
}

interface companyProjectsProps {
  slug: string;
  gifUrl: string;
  siteUrl: string;
  bkgdImgUrl: string;
  description: string;
  projectName: string;
}

export default async function AllProjects(
  { searchParams }: { searchParams: SearchParams }
) {
  // console.log('searchParams ', searchParams)

  const allProjects = await allProjectsData();
  // console.log(
  //   'AllProjects allProjects ', 
  //   allProjects
  // )

  // const [allProjects, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await allProjectsData();
  //       setData(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  console.log(
    'AllProjects allProjects ', 
    allProjects
  )

  let companyProjects: companyProjectsProps[] = [];;
  let companyInfoTitle;
  let companyName;
  let companyName2;
  let companyDesc;
  let companyImgs;

  let companyRole;
  let companyFromTo;
  let companyLocation;
  let companyTechUsed;

  for (let i = 0; i < allProjects.length; i++) {
    // console.log('Slug ', allProjects[i].companyInfoJson[0].slug)

    if (allProjects[i].companyInfoJson[0].slug === searchParams.id) {
      companyProjects = allProjects[i].companyProjectsJson;
      companyInfoTitle = allProjects[i].companyInfoJson[0].pageTitle;
      companyName = allProjects[i].companyInfoJson[0].companyName;
      companyName2 = allProjects[i].companyInfoJson[0].companyName2;
      companyDesc = allProjects[i].companyInfoJson[0].description;
      companyImgs = allProjects[i].pageImagesCollection.items;
      companyRole = allProjects[i].companyInfoJson[0].role;
      companyFromTo = allProjects[i].companyInfoJson[0].fromTo;
      companyLocation = allProjects[i].companyInfoJson[0].location;
      companyTechUsed = allProjects[i].companyInfoJson[0].techUsed;
    }
  }
  // console.log(
  //   'AllProjects allProjects ', 
  //   allProjects[0].pageImagesCollection.items
  // )
  // console.log(
  //   'AllProjects allProjects ', 
  //   allProjects[0].companyInfoJson
  // )
  return (
    <>
    <div className="projectsPageWrapper">
      <Link href="/">AH</Link>

      <CursorComponent />
      {/* <div className="cursor_inner_div">
        <span>see more</span>
      </div> */}

      <ProjectsAniFadeUpJS 
        companyInfoTitle={companyInfoTitle as string}
      />

      <div className="line"></div>

      <div className={`titleSection ${montserrat.className}`}>
        <h5>{companyName}</h5>
        <h3>{companyName2}</h3>

        <div className={`time_spent_container`}>
          <ul>
            <li>From / To</li>
            <li>Location</li>
            <li>Role</li>
            <li>Tech Used</li>
          </ul>
          <ul>
            <li>{companyFromTo}</li>
            <li>{companyLocation}</li>
            <li>{companyRole}</li>
            <li>{companyTechUsed}</li>
          </ul>
        </div>
        <div className="titleSectionLine"></div>
      </div>


      <TextScrollReveal 
        // paragraph={paragraph} 
        companyDesc={companyDesc} 
        companyImgs={companyImgs}
      />

      <div className="titleSectionLine"></div>

      {/* <ProjectPlx companyProjects={companyProjects} /> */}
      {companyProjects && <ProjectPlx companyProjects={companyProjects} />}
    </div>

    <ContactHoriInfiniteScroll />
    </>
  )
}
