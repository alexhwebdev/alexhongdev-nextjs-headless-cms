"use client";
import React, { useRef } from "react";
import { usePathname } from 'next/navigation';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectsScrollZoomPlx from "../ProjectsScrollZoomPlx/page";
import ProjectHoriSection from "../ProjectHoriSection/ProjectHoriSection";
import './page.css';



interface ProjectPageWrapperProps {
  projectName: string;
  slug: string;
  description: string;
  projectJson: {
    companyName: string;
    projectName: string;
    slug: string;
    description: string;
    siteUrl: string;
  }[];
  introImageJson: {
    url: string;
    title: string;
  }[];
  imageJson: {
    url: string;
    title: string;
  }[];
  pageImagesCollection: {
    items: {
      url: string;
      description: string;
      title: string;
    }[];
  };
}

export default function ProjectPageWrapper(
  { projectPageData }: 
  { projectPageData: ProjectPageWrapperProps[] }
) {

  const pathname = usePathname();
  // console.log('pathname :', pathname)

  const matchedProjectObj = projectPageData.find(
    item =>
      // console.log('item.slug', `/allProjects/${item.slug}`.toString())
      `/allProjects/${item.slug}`.toString() === pathname
  );
  // console.log(
  //   'AAAmatchedProjectObj ', 
  //   // matchedProjectObj
  //   // matchedProjectObj.pageImagesCollection
  //   matchedProjectObj!.pageImagesCollection.items
  // );

  // Handle case where no matching project is found
  if (!matchedProjectObj) {
    return <div>Loading... matchedProjectObj</div>;
  }

  // const matchedImageJson = matchedProjectObj?.imageJson;
  // console.log('matchedImageJson ', matchedImageJson);
  // if (!Array.isArray(matchedImageJson)) {
  //   return <div>Loading... matchedImageJson</div>; // Handle case where imageJson is not an array
  // }

  // TRIED TO PIN TEXT (Title : INVESTORS BUSINESS DAILY)
  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);
    
  //   // const pinDistance = 1000;
    
  //   ScrollTrigger.create({
  //     trigger: ".site_name_link",
  //     start: "center center",
  //     end: "+=3000",
  //     pin: ".site_name_link",
  //     markers: true,
  //     // id: "two"
  //   })
  // }, []);

  return (
    <div className="project_hori_plx_wrapper fadeup-startup">
      <ProjectsScrollZoomPlx 
        matchedProjectObj={matchedProjectObj}
      />

      <ProjectHoriSection
        matchedProjectObj={matchedProjectObj}
      />
    </div>
  );
}
