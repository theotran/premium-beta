import React from "react"
import styled from "styled-components"

import type Post from "Types/Post"
import Category from "Styles/category"
import DateTime from "Styles/dateTime"
import CenteredImg from "./centeredImg"

type CardProps = Pick<
  Post,
  "thumbnail" | "alt" | "category" | "title" | "desc" | "date"
>

const Card: React.FC<CardProps> = ({
  thumbnail,
  alt,
  category,
  title,
  desc,
  date,
}) => {
  return (
    <Wrapper>
      {/* <CenteredImg src={thumbnail} alt={alt} /> */}
      <CardThumbnail></CardThumbnail>
      <CardProjectDetails>
        <p className="projectName">Project Name:</p>
        <p className="name">Peace Eagle NFT<br />Free Mint</p>
        <p className="mintDate">Minting Sep 4, 2022 @ 23:00:00</p>
      </CardProjectDetails>
      <NFTStats>
        <StatBlock>
          <Category>{category}</Category>
          <DateTime dateTime={date}>{date}</DateTime>
        </StatBlock>        <StatBlock>
          <Category>{category}</Category>
          <DateTime dateTime={date}>{date}</DateTime>
        </StatBlock>        <StatBlock>
          <Category>{category}</Category>
          <DateTime dateTime={date}>{date}</DateTime>
        </StatBlock>        <StatBlock>
          <Category>{category}</Category>
          <DateTime dateTime={date}>{date}</DateTime>
        </StatBlock>
      </NFTStats>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 164px;
  background: #F4F4F4;
  border-radius: 30px;
  padding: 13px 19px;
`

const CardThumbnail = styled.div`
  width: 141px;
  height: 100%;
  border: 1px solid #282828;
  border-radius: 19px;
  background: #D9E021;
`

const CardProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100%;
  padding: 0 20px;

  .projectName {
    font-size: 10px;
    text-align: left;
    letter-spacing: 0px;
    color: #000000;
  }

  .name {
    font-size: 16px;
    text-align: left;
    color: #000000;
  }

  .mintDate {
    font-size: 13px;
    text-align: left;
    color: #000000;
    margin: 15px 0;
  }

`

const NFTStats = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  height: 100%;
  padding: 0 20px;
`

const StatBlock = styled.div`
  display: flex;
  flex-direction: column;

`

const Title = styled.h3`
  margin-top: var(--sizing-xs);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-bold);
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.device.md}) {
    font-size: 1.3125rem;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: var(--text-md);
  }
`

const Desc = styled.p`
  line-height: 1.5;
  margin-top: 8px;
  padding-bottom: var(--sizing-sm);
  color: var(--color-text-2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default React.memo(Card)
