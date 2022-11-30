import React, { useRef } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Card from "./card"
import useInfiniteScroll from "./useInfiniteScroll"

interface PostGridProps {
  nfts: []
}

const PostGrid: React.FC<PostGridProps> = ({
  nfts,
  favoriteList,
  setFavoriteList,
  getAssetData,
}) => {
  // const scrollEdgeRef = useRef<HTMLDivElement>(null)

  return (
    <Grid role="list">
      {nfts &&
        nfts.map(data => {
          const { _id, source } = data
          return (
            <Card
              key={_id}
              nft={data}
              favoriteList={favoriteList}
              setFavoriteList={setFavoriteList}
              getAssetData={getAssetData}
            />
          )
        })}
      {/* <div ref={scrollEdgeRef} /> */}
    </Grid>
  )
}

const Grid = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  // @media (max-width: ${({ theme }) => theme.device.sm}) {
  //   grid-gap: var(--grid-gap-xl);
  // }
`

export default PostGrid
