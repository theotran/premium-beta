import React, { useRef } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Card from "./card"
import useInfiniteScroll from "./useInfiniteScroll"

interface FavoriteListProps {
  nfts: []
}

const FavoriteList: React.FC<FavoriteListProps> = ({
  nfts,
  favoriteList,
  setFavoriteList,
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
  margin-bottom: 24px;

  // @media (max-width: ${({ theme }) => theme.device.sm}) {
  //   grid-gap: var(--grid-gap-xl);
  // }
`

export default FavoriteList
