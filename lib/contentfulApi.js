/*
Contentful GraphiQL :
https://graphql.contentful.com/content/v1/spaces/e28u0mhz7hn5/explore?access_token=AlK0JaH_ZnASOzxKKhdra1Ef6tpnQvU9sHJOTHLKEPE
*/

// const DOCUMENT_GRAPHQL_FIELDS = `
//   sys {
//     id
//   }
//   pageTitle
//   slug
//   pageContent {
//     json
//   }
  // pageImagesCollection {
  //   items {
  //     title
  //     description
  //     contentType
  //     fileName
  //     size
  //     url
  //     width
  //     height
  //   }
  // }
// `;

const DOCUMENT_GRAPHQL_FIELDS = `
  pageTitle
  slug
  description
  pageContent {
    json
  }
  companyJson
  pageImagesCollection {
    items {
      title
      description
      contentType
      fileName
      size
      url
      width
      height
    }
  }
`;

export const CACHE_TAG_REVIEWS = 'reviews';

async function fetchGraphQL(query, preview = false) {
  // console.log('query ', query)

  return fetch(
   `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_KEY
        }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for documents with an "documents" cache tag so content can
      // be revalidated or updated from Contentful on publish
      // next: { tags: ["documents"] },
      next: { 
        // DOC - Optional parameters : https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#opting-out-of-data-caching
        
        // tags: [ "ibddtag", "leaderboardtag" ],
        tags: [CACHE_TAG_REVIEWS],

        // cache: "no-cache"/"no-store"

        // Way to automatically regenerate static pages, either periodically or on demand.
        // This results in 'λ' in legend
        // revalidate: 0,

        // fallback: "blocking",
      },
    }
  // ).then((response) => response.json());
  ).then((response) => response.json());
}

// ---------------------------------------- PORTFOLIO PAGE DATA
// interface FetchResponse {
//   data: {
//     portfolioPageCollection: {
//       items: any[]; // Adjust 'any[]' to the actual type of items if possible
//     };
//     // Add more properties as needed
//   };
// }
function extractDocumentItems( fetchResponse
  // {fetchResponse}: { fetchResponse: FetchResponse }
) {
  // console.log('fetchResponse ', fetchResponse)
  // return fetchResponse?.data?.ibdDigitalCollection?.items;
  return fetchResponse?.data?.portfolioPageCollection?.items;
}
export async function getPortfolioPageDocuments(
  // For this demo set the default limit to always return 3 documents.
  // limit = 3,

  // By default this function will return published content but will provide an option to return draft content for reviewing documents before they are live
  isDraftMode = false
) {
  const documents = await fetchGraphQL(
    `query {
      portfolioPageCollection(where:{slug_exists: true}, 
      preview: ${
        isDraftMode ? "true" : "false"
      }) {
        items { ${DOCUMENT_GRAPHQL_FIELDS} }
      }
    }`,
    isDraftMode
  );
  return extractDocumentItems(documents);
}




// ---------------------------------------- (ALL) PROJECTS PAGE DATA
// interface ProjectsFetchResponse {
//   data: {
//     companyProjectsCollection: {
//       items: any[]; // Adjust 'any[]' to the actual type of items if possible
//     };
//     // Add more properties as needed
//   };
// }
const PROJECTS_GRAPHQL_FIELDS = `
  companyInfoJson
  companyProjectsJson
  pageImagesCollection {
    items {
      url
    }
  }
`;
function extractProjectsItems( fetchResponse
  // {fetchResponse}: { fetchResponse: ProjectsFetchResponse }
) {
  // console.log('allProjectsData fetchResponse ', fetchResponse)
  // return fetchResponse?.data?.ibdDigitalCollection?.items;
  return fetchResponse?.data?.companyProjectsCollection?.items;
}
export async function allProjectsData(
  // For this demo set the default limit to always return 3 documents.
  // limit = 3,

  // By default this function will return published content but will provide an option to return draft content for reviewing documents before they are live
  isDraftMode = false
) {
  const documents = await fetchGraphQL(
    `query {
      companyProjectsCollection(where:{slug_exists: true}, 
      preview: ${
        isDraftMode ? "true" : "false"
      }) {
        items { ${PROJECTS_GRAPHQL_FIELDS} }
      }
    }`,
    isDraftMode
  );
  return extractProjectsItems(documents);
}



// ---------------------------------------- PROJECT PAGE DATA
const PROJECT_GRAPHQL_FIELDS = `
  projectName
  slug
  description
  pageImagesCollection {
    items {
      title
      description
      url
    }
  }
  projectJson
  introImageJson
  imageJson
`;
// interface ProjectFetchResponse {
//   data: {
//     projectPageCollection: {
//       items: any[]; // Adjust 'any[]' to the actual type of items if possible
//     };
//     // Add more properties as needed
//   };
// }
function extractProjectItems( fetchResponse
  // {fetchResponse}: { fetchResponse: ProjectFetchResponse }
) {
  // console.log('fetchResponse ', fetchResponse)
  // return fetchResponse?.data?.ibdDigitalCollection?.items;
  return fetchResponse?.data?.projectPageCollection?.items;
}
export async function getProjectData(
  // For this demo set the default limit to always return 3 documents.
  // limit = 3,

  // By default this function will return published content but will provide an option to return draft content for reviewing documents before they are live
  isDraftMode = false
) {
  const documents = await fetchGraphQL(
    `query {
      projectPageCollection(where:{slug_exists: true}, 
      preview: ${
        isDraftMode ? "true" : "false"
      }) {
        items { ${PROJECT_GRAPHQL_FIELDS} }
      }
    }`,
    isDraftMode
  );
  return extractProjectItems(documents);
}
export async function getSlugs() {
  const projectPageData = await getProjectData();

  const slugsArray = [];
  projectPageData.map( (eachProject) => {
    // console.log('eachProject.slug ', eachProject.slug);
    // eachProject.slug
    slugsArray.push(eachProject.slug)
  });

  return slugsArray;
  // const files = await readdir('./content/reviews');
  // return files.filter((file) => file.endsWith('.md'))
  //   .map((file) => file.slice(0, -'.md'.length));
}


















// -------------------- IBD DIGITAL DATA
export async function getAllIbddDocuments(
  // For this demo set the default limit to always return 3 documents.
  // limit = 3,

  // By default this function will return published content but will provide an option to return draft content for reviewing documents before they are live
  isDraftMode = false
) {
  const documents = await fetchGraphQL(
    `query {
      ibdDigitalCollection(where:{slug_exists: true}, 
      preview: ${
        isDraftMode ? "true" : "false"
      }) {
        items { ${DOCUMENT_GRAPHQL_FIELDS} }
      }
    }`,
    isDraftMode
  );
  return extractDocumentItems(documents);
}


export async function getDocument(
  slug,
  isDraftMode = false
) {
  const documentCollection = await fetchGraphQL(
    `query {
        ibdDigitalCollection(where:{slug: "${slug}"}, 
        limit: 1, 
        preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items { ${DOCUMENT_GRAPHQL_FIELDS} }
        }
      }`,
    isDraftMode
  );
  return extractDocumentItems(documentCollection)[0];
}






// -------------------- LEADERBOARD DATA
export async function getAllLeaderboardDocuments(
  isDraftMode = false
) {
  const documents = await fetchGraphQL(
    `query {
      leaderboardCollection(where:{slug_exists: true}, 
      preview: ${
        isDraftMode ? "true" : "false"
      }) {
        items { ${DOCUMENT_GRAPHQL_FIELDS} }
      }
    }`,
    isDraftMode
  );
  // return extractLbDocumentItems(documents);
  return documents.data?.leaderboardCollection?.items;
}





/* -------------------- NOTES

+ GraphQL Content API
  - https://www.contentful.com/developers/docs/references/graphql/#/reference/exploring-the-schema-with-graphiql
  - Exploring the schema with GraphiQL
    - To open GraphiQL server visit the 
      - https://graphql.contentful.com/content/v1/spaces/{SPACE}/explore?access_token={CDA_TOKEN} URL in your browser. You must provide the CDA_TOKEN as a query parameter.
      - https://graphql.contentful.com/content/v1/spaces/e28u0mhz7hn5/explore?access_token=AlK0JaH_ZnASOzxKKhdra1Ef6tpnQvU9sHJOTHLKEPE

+ Rendering Contentful Rich Text with Javascript
  - https://www.contentful.com/developers/docs/javascript/tutorials/rendering-contentful-rich-text-with-javascript/


+ Next.js & Contentful Site Build Tutorial #8 - Rich Text Content
  - https://www.youtube.com/watch?v=o6CnTHrwJ-Q&list=PL4cUxeGkcC9jClk8wl1yJcN3Zlrr8YSA1&index=8



+ Contentful Apps: How To Set Up GraphQL Playground
  - https://www.youtube.com/watch?v=5H14ITPyUww
+ Exploring GraphQL endpoints using GraphiQL
  - https://www.youtube.com/watch?v=76CyYy2rf_Y


*/








