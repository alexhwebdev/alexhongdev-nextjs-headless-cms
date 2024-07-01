import React from 'react';
import { allProjectsData } from '@/lib/contentfulApi';


// export default async function GetAllProjectsData() {
export const GetAllProjectsData = async () => {
  const allProjects = await allProjectsData();

  return allProjects;
}
