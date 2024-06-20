
import { getPortfolioPageDocuments } from "./contentfulApi";
// import { getImgCollection } from "./getImgCollection";
import getImgCollection from "./getImgCollection";


// const testGetImg = (  ) => {
export async function testGetImg() {
  const portfolioPageData = await getPortfolioPageDocuments();
  console.log('testGetImg portfolioPageData ', portfolioPageData)

  // if (portfolioPageData && portfolioPageData.length > 0) {
  //   console.log('First item:', portfolioPageData[0].pageImagesCollection.items);
  //   // console.log('First page image:', portfolioPageData[0]?.pageImagesCollection);

  //   return portfolioPageData[0].pageImagesCollection.items;
  // } else {
  //   console.log('Portfolio page data is empty or not an array.');
  // }

  // let imgDataArray = [
  //   // ...getImgCollection("Portfolio", portfolioPageData)
  //   ...getImgCollection("Portfolio", portfolioPageData)
  // ];

  // console.log('testGetImg imgDataArray ', imgDataArray)
  // return imgDataArray
  return portfolioPageData
}


// export async function testGetImg() {
//   try {
//     const portfolioPageData = await getPortfolioPageDocuments();
//     if (!portfolioPageData) {
//       throw new Error("Portfolio page data not found or empty");
//     }
    
//     const imgDataArray = getImgCollection("Portfolio", portfolioPageData);
    
//     console.log('testGetImg imgDataArray', imgDataArray);
    
//     return imgDataArray;
//   } catch (error) {
//     console.error('Error in testGetImg:', error);
//     return []; // Return empty array or handle error as appropriate
//   }
// }