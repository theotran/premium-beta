import React from "react"
import styled from "styled-components"
import moment from "moment"
import type Post from "Types/Post"

import ManipulationImage from "../../../images/Manipulation.png"
import Active from "../../../images/active.png"
import Conversion from "../../../images/conversion.png"
import Market from "../../../images/market.png"
import Download from "../../../images/download.png"
import Search from "../../../images/search.png"
import Discord from "../../../images/discord.png"
import Twitter from "../../../images/twitter.png"
import Link from "../../../images/link.png"
import Brand from "../../../images/pretium-brand-logo.png"
import Star from "../../../images/star.png"

type CardProps = Pick<
  Post,
  "thumbnail" | "alt" | "category" | "title" | "desc" | "date"
>

const Card: React.FC<CardProps> = ({ posts, nft }) => {
  const {
    "@timestamp": timestamp,
    name,
    image_url,
    sentiment,
    manipulation,
    impressions,
    voices,
    created_date,
    website,
    twitter,
    discord,
    magiceden,
  } = nft._source

  const colors = ["#4EA8DE", "#ED1E79", "#6930C3"]

  const c = colors[Math.floor(Math.random() * 3)]
  return (
    <Wrapper>
      <CardTheme style={{ background: c }}>
        <img src={Star} />
        <p>new</p>
      </CardTheme>
      <CardContainer>
        <CardBlockLeft>
          <CardThumbnail>
            {image_url ? (
              <NFTImage src={image_url} />
            ) : (
              <DefaultImage src={Brand} />
            )}
          </CardThumbnail>
          <CardProjectDetails>
            <p className="projectName">Project Name:</p>
            <p className="name">
              {name || ""}
              <br />
            </p>
            <p className="mintDate">{`Minting ${moment(created_date).format(
              "MMMM Do YYYY, h:mm:ss a"
            )}`}</p>
            <SocialLinks>
              <a href={website || ""} target="__blank">
                <img src={Link} />
              </a>
              <a href={twitter || ""} target="__blank">
                <img src={Twitter} />
              </a>
              <a href={discord || ""} target="__blank">
                <img src={Discord} />
              </a>
              <a href={magiceden || ""} target="__blank">
                <img src={Search} />
              </a>
              <img src={Download} />
            </SocialLinks>
          </CardProjectDetails>
        </CardBlockLeft>
        <NFTStats>
          <StatBlock>
            <img src={Market} />
            <StatTitle>Market Sentiment</StatTitle>
            <SentimentValue>{Math.ceil(sentiment * 100) || "0"}</SentimentValue>
            <SentimentValueAvg>avg</SentimentValueAvg>
          </StatBlock>{" "}
          <StatBlock>
            <img src={ManipulationImage} />
            <StatTitle>Manipulation</StatTitle>
            <ManipulationValue>
              {manipulation && typeof manipulation === "number"
                ? `${Number(100 - manipulation * 100).toFixed()}%`
                : "0%"}
            </ManipulationValue>
            <Promotion>
              {manipulation && typeof manipulation === "number"
                ? `Promotion ${Number(manipulation * 100).toFixed()}% Organic`
                : "Promotion 0%"}
            </Promotion>
          </StatBlock>
          <StatBlock>
            <img src={Active} />
            <StatTitle>Active Public</StatTitle>
            <ActivePublicValue>{voices || "0"}</ActivePublicValue>
          </StatBlock>
          <StatBlock>
            <img src={Conversion} />
            <StatTitle>Conversion</StatTitle>
            <SentimentValue>
              {voices && impressions && typeof voices === "number"
                ? `${Number(voices / impressions).toFixed(4)}%`
                : "0%"}
            </SentimentValue>
          </StatBlock>
        </NFTStats>
      </CardContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 164px;
`

const CardTheme = styled.div`
  top: 0;
  left: -50px;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background: #4ea8de;
  border-radius: 30px;
  // padding: 13px 19px;
  padding: 0 19px;
  z-index: 1;

  img {
    position: relative;
    object-fit: contain;
    right: 3px;
  }

  p {
    color: #ffffff;
    margin-top: 3px;
    font-size: 8.5px;
  }
`

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background: #f4f4f4;
  border-radius: 30px;

  z-index: 2;
`

const CardBlockLeft = styled.div`
  display: flex;
  padding: 19px 19px;
  border-right: 5px solid #ffffff;
`

const CardThumbnail = styled.div`
  width: 141px;
  height: 141px;
  border: 1px solid #282828;
  border-radius: 19px;
  background: #d9e021;
  display: flex;
  align-items: center;
  justify-content: center;

  postion: relative;
  overflow: hidden;
`

const NFTImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const DefaultImage = styled.img`
  object-fit: contain;
  width: 90%;
  height: 100%;
`

const CardProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100%;
  padding: 0 25px;

  width: 230px;

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
    margin-top: auto;
  }
`

const NFTStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  padding: 13px 39px;
  height: -webkit-fill-available;
  width: 50%;
`

const StatBlock = styled.div`
  display: flex;
  flex-direction: column;
  img {
    object-fit: contain;
    height: 26px;
    width: 26px;
    margin-bottom: 5px;
  }
`

const StatTitle = styled.p`
  font-size: 12px;
  margin: 7px 0;
  // @media (max-width: ${({ theme }) => theme.device.md}) {
  //   font-size: 1.3125rem;
  // }

  // @media (max-width: ${({ theme }) => theme.device.sm}) {
  //   font-size: var(--text-md);
  // }
`

const SentimentValue = styled.p`
  color: #ff7bac;
  font-size: 32px;
`

const ManipulationValue = styled.p`
  color: #40c3ea;
  font-size: 32px;
  margin: 5px 0;
`

const ActivePublicValue = styled.p`
  color: #40c3ea;
  font-size: 32px;
`

const SentimentValueAvg = styled.p`
  font-size: 9px;
`

const Promotion = styled.p`
  font-size: 11px;
  color: #ff7bac;
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

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  margin-top: 19px;
`

export default React.memo(Card)
