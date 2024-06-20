import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


export default function getPageData( currentPageTitle, currentPageData, 
  // lineDataNum 
) {
  const pageStructuredData = currentPageData.map((pageData) => {
    const {sys, pageContent, pageTitle, slug} = pageData;
    // console.log('pageTitle ', pageTitle)

    if ( pageTitle === currentPageTitle ) {
      return pageContent;
    } else {
      return null;
    }
  })
  .filter(obj => obj !== null); // Remove null values

  // console.log('pageStructuredData ', pageStructuredData)
  const arrayOfLineData = pageStructuredData[0].json.content.map( 
    (eachNodeType) => {
      return documentToReactComponents(eachNodeType);
    }
  );

  return arrayOfLineData;
}