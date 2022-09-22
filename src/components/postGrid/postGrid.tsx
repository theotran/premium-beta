import React, { useRef } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import type Post from "Types/Post"
import Card from "./card"
import useInfiniteScroll from "./useInfiniteScroll"
import { ThumbnailWrapper } from "./card/centeredImg"

interface PostGridProps {
  nfts: []
}

const PostGrid: React.FC<PostGridProps> = ({ nfts }) => {
  const scrollEdgeRef = useRef<HTMLDivElement>(null)
  // const currentList = useInfiniteScroll({
  //   posts,
  //   scrollEdgeRef,
  //   maxPostNum: 10,
  //   offsetY: 200,
  // })

  console.log("NFTS in PostGrid", nfts)

  return (
    <Grid role="list">
      {nfts &&
        nfts.map(data => {
          const { _id, source } = data

          console.log("NFT in card", data)
          return (
            <List key={_id} role="listitem">
              {/* <Link to={slug ?? ""} aria-label={ariaLabel}>
              </Link> */}
              <Card nft={data} />
            </List>
          )
        })}
      <div ref={scrollEdgeRef} />
    </Grid>
  )
}

const Grid = styled.ul`
  display: grid;
  grid-gap: var(--grid-gap-xl);
  grid-template-columns: 1fr;

  & > li {
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    grid-gap: var(--grid-gap-lg);
  }
`

const List = styled.li`
  box-sizing: border-box;
  grid-column: span 1;

  a {
    display: block;
    height: 100%;
  }

  a:hover ${ThumbnailWrapper}::after, a:focus ${ThumbnailWrapper}::after {
    opacity: 1;
  }

  & .gatsby-image-wrapper {
    transition: opacity 1s ease-out, transform 0.5s ease;
  }

  a:hover,
  a:focus {
    .gatsby-image-wrapper {
      transform: scale(1.03);
    }
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    grid-column: span 2;
  }
`

export default PostGrid
