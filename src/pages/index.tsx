import React, { useState, useLayoutEffect, useEffect } from "react"
import { initializeApp } from "firebase/app"
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
} from "firebase/auth"
import type { PageProps } from "gatsby"
import ReactModal from "react-modal"
import { graphql } from "gatsby"
import styled from "styled-components"
import axios from "axios"
import type { Query, MarkdownRemarkFrontmatter } from "Types/GraphQL"
import type Post from "Types/Post"
import useSiteMetadata from "Hooks/useSiteMetadata"
import Layout from "Layouts/layout"
import SEO from "Components/seo"
import PostGrid from "Components/postGrid"
import Filter from "Components/filter"
import Linechart from "Components/Linechart/Linechart"
import ManipulationChart from "Components/Piechart/ManipulationChart"
import ConversionChart from "Components/Piechart/ConversionChart"
import BarChart from "Components/Barchart/Barchart"
import MarketSnapshot from "Components/MarketSnapshot/MarketSnapshot"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ03S-Q_9AVwYgYbyZpSuNVc56jAf4nDQ",
  authDomain: "pretium-beta.firebaseapp.com",
  projectId: "pretium-beta",
  storageBucket: "pretium-beta.appspot.com",
  messagingSenderId: "665041649891",
  appId: "1:665041649891:web:923ccbe7763c80797845d6",
  measurementId: "G-H62NHRYFHM",
}

const app = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

ReactModal.setAppElement("#___gatsby")
ReactModal.defaultStyles.overlay.backgroundColor =
  "linear-gradient(90deg, rgba(94, 166, 238, 1) 0%, rgba(96, 169, 237, 1) 23%, rgba(105, 180, 234, 1) 44%, rgba(119, 199, 230, 1) 65%, rgba(140, 225, 225, 1) 85%, rgba(160, 251, 220, 1) 100%) 0% 0%"

// export const auth = getAuth(app)

const auth = getAuth()

// signInWithPopup(auth, provider)
//   .then(result => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result)
//     const token = credential.accessToken
//     // The signed-in user info.
//     const user = result.user
//     // ...
//   })
//   .catch(error => {
//     // Handle Errors here.
//     const errorCode = error.code
//     const errorMessage = error.message
//     // The email of the user's account used.
//     const email = error.customData.email
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error)
//     // ...
//   })

const Home = ({
  pageContext,
  data,
}: PageProps<Query, MarkdownRemarkFrontmatter>) => {
  const [posts, setPosts] = useState<Post[]>([])
  const currentCategory = pageContext.category
  const postData = data.allMarkdownRemark.edges

  useLayoutEffect(() => {
    const filteredPostData = currentCategory
      ? postData.filter(
          ({ node }) => node?.frontmatter?.category === currentCategory
        )
      : postData

    filteredPostData.forEach(({ node }) => {
      const { id } = node
      const { slug } = node?.fields!
      const { title, desc, date, category, thumbnail, alt } = node?.frontmatter!
      const { childImageSharp } = thumbnail!

      setPosts(prevPost => [
        ...prevPost,
        {
          id,
          slug,
          title,
          desc,
          date,
          category,
          thumbnail: childImageSharp?.id,
          alt,
        },
      ])
    })
  }, [currentCategory, postData])

  const [NFTData, setNFTData] = useState(null)

  useEffect(() => {
    const query = {
      query: {
        bool: {
          filter: [
            {
              range: {
                created_date: {
                  format: "strict_date_optional_time",
                  gte: "now-1d",
                  lte: "now+1y",
                },
              },
            },
          ],
        },
      },
    }
    const nftAssetsURL = `https://enigmatic-river-67748.herokuapp.com/https://koat.es.us-east-1.aws.found.io:9243/p-pretium-assets-aggregation/_search?from=0&size=1000&sort=created_date:asc`
    axios
      .get(nftAssetsURL, {
        auth: {
          username: `${process.env.GATSBY_API_USERNAME}`,
          password: `${process.env.GATSBY_API_PASSWORD}`,
        },
        params: {
          source: JSON.stringify(query),
          source_content_type: "application/json",
        },
      })
      .then(response => {
        setNFTData(response.data?.hits?.hits)
      })
      .catch(err => console.warn(err))
  }, [])

  // useEffect(() => {
  //   getRedirectResult(auth)
  //     .then(result => {
  //       // This gives you a Google Access Token. You can use it to access Google APIs.
  //       const credential = GoogleAuthProvider.credentialFromResult(result)
  //       const token = credential.accessToken

  //       // The signed-in user info.
  //       const user = result.user
  //       console.log("USER ", user)
  //     })
  //     .catch(error => {
  //       // Handle Errors here.
  //       const errorCode = error.code
  //       const errorMessage = error.message
  //       // The email of the user's account used.
  //       const email = error?.customData?.email
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error)
  //       // ...

  //       console.log("ERROR ", error)
  //     })
  // })

  // const signInGoogle = e => {
  //   signInWithRedirect(auth, provider)
  //     .then(result => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result)
  //       const token = credential.accessToken
  //       // The signed-in user info.
  //       const user = result.user
  //       // ...
  //     })
  //     .catch(error => {
  //       // Handle Errors here.
  //       const errorCode = error.code
  //       const errorMessage = error.message
  //       // The email of the user's account used.
  //       const email = error?.customData?.email
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error)
  //       // ...
  //     })
  // }

  const FetchPremint = () => {
    const query = {
      query: {
        bool: {
          filter: [
            {
              range: {
                created_date: {
                  format: "strict_date_optional_time",
                  gte: "now-1d",
                  lte: "now+1y",
                },
              },
            },
          ],
        },
      },
    }
    const nftAssetsURL = `https://enigmatic-river-67748.herokuapp.com/https://koat.es.us-east-1.aws.found.io:9243/p-pretium-assets-aggregation/_search?from=0&size=1000&sort=created_date:asc`
    axios
      .get(nftAssetsURL, {
        auth: {
          username: `${process.env.GATSBY_API_USERNAME}`,
          password: `${process.env.GATSBY_API_PASSWORD}`,
        },
        params: {
          source: JSON.stringify(query),
          source_content_type: "application/json",
        },
      })
      .then(response => {
        setNFTData(response.data?.hits?.hits)
      })
      .catch(err => console.warn(err))
  }

  // const SortPremintByCreatedDateAsc = () => {
  //   const query = {
  //     sort: [{ created_date: { order: "asc", unmapped_type: "boolean" } }],
  //     query: {
  //       bool: {
  //         filter: [
  //           {
  //             range: {
  //               created_date: {
  //                 format: "strict_date_optional_time",
  //                 gte: "now-1d",
  //                 lte: "now+1y",
  //               },
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   }
  //   const nftAssetsURL = `https://enigmatic-river-67748.herokuapp.com/https://koat.es.us-east-1.aws.found.io:9243/p-pretium-assets-aggregation/_search?from=0&size=1000`
  //   axios
  //     .get(nftAssetsURL, {
  //       auth: {
  //         username: `${process.env.GATSBY_API_USERNAME}`,
  //         password: `${process.env.GATSBY_API_PASSWORD}`,
  //       },
  //       params: {
  //         source: JSON.stringify(query),
  //         source_content_type: "application/json",
  //       },
  //     })
  //     .then(response => {
  //       setNFTData(response.data?.hits?.hits)
  //     })
  //     .catch(err => console.warn(err))
  // }

  const FetchLiveAssets = () => {
    const query = {
      query: {
        bool: {
          filter: [
            {
              range: {
                created_date: {
                  format: "strict_date_optional_time",
                  gte: "now-1y",
                  lte: "now",
                },
              },
            },
          ],
        },
      },
    }
    const nftAssetsURL = `https://enigmatic-river-67748.herokuapp.com/https://koat.es.us-east-1.aws.found.io:9243/p-pretium-assets-aggregation/_search?from=0&size=1000&sort=created_date:desc`
    axios
      .get(nftAssetsURL, {
        auth: {
          username: `${process.env.GATSBY_API_USERNAME}`,
          password: `${process.env.GATSBY_API_PASSWORD}`,
        },
        params: {
          source: JSON.stringify(query),
          source_content_type: "application/json",
        },
      })
      .then(response => {
        setNFTData(response.data?.hits?.hits)
      })
      .catch(err => console.warn(err))
  }

  // const SortLiveAssetsByCreatedDateAsc = () => {
  //   const query = {
  //     sort: [{ created_date: { order: "asc", unmapped_type: "boolean" } }],
  //     query: {
  //       bool: {
  //         filter: [
  //           {
  //             range: {
  //               created_date: {
  //                 format: "strict_date_optional_time",
  //                 gte: "now-1y",
  //                 lte: "now",
  //               },
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   }
  //   const nftAssetsURL = `https://enigmatic-river-67748.herokuapp.com/https://koat.es.us-east-1.aws.found.io:9243/p-pretium-assets-aggregation/_search?from=0&size=1000`
  //   axios
  //     .get(nftAssetsURL, {
  //       auth: {
  //         username: `${process.env.GATSBY_API_USERNAME}`,
  //         password: `${process.env.GATSBY_API_PASSWORD}`,
  //       },
  //       params: {
  //         source: JSON.stringify(query),
  //         source_content_type: "application/json",
  //       },
  //     })
  //     .then(response => {
  //       setNFTData(response.data?.hits?.hits)
  //     })
  //     .catch(err => console.warn(err))
  // }

  // const SortLiveAssetsByCreatedDateDesc = () => {
  //   const query = {
  //     sort: [{ created_date: { order: "desc", unmapped_type: "boolean" } }],
  //     query: {
  //       bool: {
  //         filter: [
  //           {
  //             range: {
  //               created_date: {
  //                 format: "strict_date_optional_time",
  //                 gte: "now-1y",
  //                 lte: "now",
  //               },
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   }
  //   const nftAssetsURL = `https://enigmatic-river-67748.herokuapp.com/https://koat.es.us-east-1.aws.found.io:9243/p-pretium-assets-aggregation/_search?from=0&size=1000`
  //   axios
  //     .get(nftAssetsURL, {
  //       auth: {
  //         username: `${process.env.GATSBY_API_USERNAME}`,
  //         password: `${process.env.GATSBY_API_PASSWORD}`,
  //       },
  //       params: {
  //         source: JSON.stringify(query),
  //         source_content_type: "application/json",
  //       },
  //     })
  //     .then(response => {
  //       setNFTData(response.data?.hits?.hits)
  //     })
  //     .catch(err => console.warn(err))
  // }

  const SortLiveAssetsDynamic = obj => {
    const query = {
      sort: [obj],
      query: {
        bool: {
          filter: [
            {
              range: {
                created_date: {
                  format: "strict_date_optional_time",
                  gte: "now-1y",
                  lte: "now",
                },
              },
            },
          ],
        },
      },
    }
    const nftAssetsURL = `https://enigmatic-river-67748.herokuapp.com/https://koat.es.us-east-1.aws.found.io:9243/p-pretium-assets-aggregation/_search?from=0&size=1000`
    axios
      .get(nftAssetsURL, {
        auth: {
          username: `${process.env.GATSBY_API_USERNAME}`,
          password: `${process.env.GATSBY_API_PASSWORD}`,
        },
        params: {
          source: JSON.stringify(query),
          source_content_type: "application/json",
        },
      })
      .then(response => {
        setNFTData(response.data?.hits?.hits)
      })
      .catch(err => console.warn(err))
  }

  const SortPremintDynamic = obj => {
    const query = {
      sort: [obj],
      query: {
        bool: {
          filter: [
            {
              range: {
                created_date: {
                  format: "strict_date_optional_time",
                  gte: "now-1d",
                  lte: "now+1y",
                },
              },
            },
          ],
        },
      },
    }
    const nftAssetsURL = `https://enigmatic-river-67748.herokuapp.com/https://koat.es.us-east-1.aws.found.io:9243/p-pretium-assets-aggregation/_search?from=0&size=1000`
    axios
      .get(nftAssetsURL, {
        auth: {
          username: `${process.env.GATSBY_API_USERNAME}`,
          password: `${process.env.GATSBY_API_PASSWORD}`,
        },
        params: {
          source: JSON.stringify(query),
          source_content_type: "application/json",
        },
      })
      .then(response => {
        setNFTData(response.data?.hits?.hits)
      })
      .catch(err => console.warn(err))
  }

  const SearchLiveAssetsByInput = input => {
    const query = {
      size: 100, // How many results come in By default it will already sort the highest _score to the top.
      query: {
        match: {
          name: {
            query: input, //Example of Search Query
            operator: "and",
          },
        },
      },
    }
    const nftAssetsURL = `https://enigmatic-river-67748.herokuapp.com/https://koat.es.us-east-1.aws.found.io:9243/p-pretium-assets-aggregation/_search?from=0&size=100`
    axios
      .get(nftAssetsURL, {
        auth: {
          username: `${process.env.GATSBY_API_USERNAME}`,
          password: `${process.env.GATSBY_API_PASSWORD}`,
        },
        params: {
          source: JSON.stringify(query),
          source_content_type: "application/json",
        },
      })
      .then(response => {
        setNFTData(response.data?.hits?.hits)
      })
      .catch(err => console.warn(err))
  }

  const site = useSiteMetadata()

  return (
    <Layout>
      <SEO title="Home" />
      <Main>
        <Content>
          <MarketSnapshotContainer>
            <MarketSnapshot />
            <ChartsWrapper>
              <Linechart />
              {/* <BarChart /> */}
              <ManipulationChart />
              <ConversionChart />
            </ChartsWrapper>
          </MarketSnapshotContainer>
          <Filter
            fetchPremint={FetchPremint}
            fetchLiveAssets={FetchLiveAssets}
            sortLiveAssetsDynamic={SortLiveAssetsDynamic}
            sortPremintDynamic={SortPremintDynamic}
            searchLiveAssetsByInput={SearchLiveAssetsByInput}
          />
          {/* <button onClick={signInGoogle}>Sign In</button> */}
          {/* <CategoryFilter categoryList={data.allMarkdownRemark.group} />
          <PostTitle>{postTitle}</PostTitle> */}
          <PostGrid posts={posts} nfts={NFTData} />
        </Content>
      </Main>
    </Layout>
  )
}

const Main = styled.main`
  min-width: var(--min-width);
  min-height: calc(100vh - var(--nav-height) - var(--footer-height));
  background-color: var(--color-background);
`

const Content = styled.div`
  box-sizing: content-box;
  width: 90%;
  max-width: 1480px;
  padding-top: var(--sizing-lg);
  padding-bottom: var(--sizing-lg);
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    padding-top: var(--grid-gap-lg);
    width: 87.5%;
  }
`

const MarketSnapshotContainer = styled.div`
  display: flex;
  border-radius: 23px;
  overflow: hidden;
  background: #f4f4f4;
`

const ChartsWrapper = styled.div`
  background: #f4f4f4;
  display: flex;
  padding: 24px;
  justify-content: space-between;
`

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(posts/blog)/" } }
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            category
            date(formatString: "YYYY-MM-DD")
            desc
            thumbnail {
              childImageSharp {
                id
              }
              base
            }
            alt
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Home
