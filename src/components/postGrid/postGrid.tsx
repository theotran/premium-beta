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

  // console.log("NFTS in PostGrid", nfts)

  return (
    <Grid role="list">
      {nfts &&
        nfts.map(data => {
          const { _id, source } = data

          // console.log("NFT in card", data)
          return (
            <Card key={_id} nft={data} />
            // <List key={_id} role="listitem">
            //   {/* <Link to={slug ?? ""} aria-label={ariaLabel}>
            //   </Link> */}
            // </List>
          )
        })}
      <div ref={scrollEdgeRef} />
    </Grid>
  )
}

const Grid = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 100%;

  // @media (max-width: ${({ theme }) => theme.device.sm}) {
  //   grid-gap: var(--grid-gap-xl);
  // }
`

export default PostGrid
