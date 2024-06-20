// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


// const getImgCollection = ( currentPageTitle, currentPageData ) => {
export default function getImgCollection( currentPageTitle, currentPageData ) {
  const pageImageItems = currentPageData.map((pageData) => {
    const { pageTitle, pageImagesCollection } = pageData;

    if ( pageTitle === currentPageTitle ) {
      return pageImagesCollection;
    } else {
      return null;
    }
  })
  .filter(obj => obj !== null); // Remove null values

  // console.log('pageImageItems[0].items ', pageImageItems[0].items)

  return pageImageItems[0].items;
}

// export default getImgCollection;






// export function getImgCollection(currentPageTitle, currentPageData) {
//   const pageData = currentPageData.find(page => page.pageTitle === currentPageTitle);
  
//   if (pageData && pageData.pageImagesCollection) {
//     return pageData.pageImagesCollection.items || [];
//   } else {
//     return [];
//   }
// }