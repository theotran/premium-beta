import React, { useState, useLayoutEffect, useEffect } from "react"
import { initializeApp } from "firebase/app"
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
} from "firebase/auth"
import { getAnalytics } from "firebase/analytics"
import dotenv from "dotenv"
import type { PageProps } from "gatsby"
import { graphql } from "gatsby"
import styled from "styled-components"
import axios from "axios"
import type { Query, MarkdownRemarkFrontmatter } from "Types/GraphQL"
import type Post from "Types/Post"
import useSiteMetadata from "Hooks/useSiteMetadata"
import Layout from "Layouts/layout"
import SEO from "Components/seo"
import PostGrid from "Components/postGrid"
import CategoryFilter from "Components/catetgoryFilter"
import Filter from "Components/filter"
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

console.log("App ", auth)

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

  // const urlAssetAggregation =
  //   "https://enigmatic-river-67748.herokuapp.com/https://koat.es.us-east-1.aws.found.io:9243/p-pretium-assets-aggregation/_search?size=10"

  // const ultimateURL =
  //   "https://enigmatic-river-67748.herokuapp.com/https://koat.es.us-east-1.aws.found.io:9243/p-pretium-assets-aggregation/_search"

  const [NFTData, setNFTData] = useState(null)

  useEffect(() => {
    const nftAssetsURL = `https://enigmatic-river-67748.herokuapp.com/https://koat.es.us-east-1.aws.found.io:9243/p-pretium-assets-aggregation/_search?from=0&size=1000&sort=created_date:asc`
    axios
      .get(nftAssetsURL, {
        auth: {
          username: `${process.env.GATSBY_API_USERNAME}`,
          password: `${process.env.GATSBY_API_PASSWORD}`,
        },
        data: JSON.stringify({
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
        }),
      })
      .then(response => {
        setNFTData(response.data?.hits?.hits)
      })
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
    const nftAssetsURL = `https://enigmatic-river-67748.herokuapp.com/https://koat.es.us-east-1.aws.found.io:9243/p-pretium-assets-aggregation/_search?from=0&size=1000&sort=created_date:asc`
    axios
      .get(nftAssetsURL, {
        auth: {
          username: `${process.env.GATSBY_API_USERNAME}`,
          password: `${process.env.GATSBY_API_PASSWORD}`,
        },
        data: JSON.stringify({
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
        }),
      })
      .then(response => {
        setNFTData(response.data?.hits?.hits)
      })
  }

  const FetchLiveAssets = () => {
    const nftAssetsURL = `https://enigmatic-river-67748.herokuapp.com/https://koat.es.us-east-1.aws.found.io:9243/p-pretium-assets-aggregation/_search?from=0&size=1000&sort=created_date:desc`
    axios
      .get(nftAssetsURL, {
        auth: {
          username: `${process.env.GATSBY_API_USERNAME}`,
          password: `${process.env.GATSBY_API_PASSWORD}`,
        },
        data: JSON.stringify({
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
        }),
      })
      .then(response => {
        setNFTData(response.data?.hits?.hits)
      })
  }

  const SortByVoices = () => {
    const data = NFTData

    if (data) {
      const dataSortedByVoices = [...data].sort((a, b) => {
        return a?._source?.voices - b?._source?.voices
      })
      setNFTData(dataSortedByVoices)
    }
  }

  const site = useSiteMetadata()

  console.log("Data", NFTData)

  return (
    <Layout>
      <SEO title="Home" />
      <Main>
        <Content>
          {/* <button onClick={() => SortByVoices()}>Sort Voices</button> */}
          <Filter
            fetchPremint={FetchPremint}
            fetchLiveAssets={FetchLiveAssets}
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
  width: 87.5%;
  max-width: 1200px;
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
