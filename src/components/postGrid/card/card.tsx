import React, { useState, useEffect } from "react"
import styled from "styled-components"
import moment from "moment"
import Modal from "react-modal"
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
import ManipulationChartModal from "Components/Piechart/ManipulationChartModal"
import ConversionChartModal from "Components/Piechart/ConversionChartModal"
import MixedChart from "Components/Linechart/Mixedchart"
import HeartBlue from "../../../images/heart-blue.png"

type CardProps = Pick<
  Post,
  "thumbnail" | "alt" | "category" | "title" | "desc" | "date"
>

const Card: React.FC<CardProps> = ({
  nft,
  favoriteList,
  setFavoriteList,
  getAssetData,
}) => {
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
    asset_id,
    pretium,
  } = nft._source

  const colors = ["#4EA8DE", "#ED1E79", "#6930C3"]

  const c = colors[Math.floor(Math.random() * 3)]

  const customStyles = {
    content: {
      zIndex: 3,
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "90%",
      width: "90%",
      borderRadius: "27px",
    },
  }

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = e => {
    setModalIsOpen(false)
  }

  const addFavoriteToList = () => {
    if (!favoriteList.find(node => node._id === asset_id)) {
      let newFavoriteList = favoriteList
      newFavoriteList.push(nft)
      setFavoriteList(newFavoriteList)
    } else {
      console.log("Did not add favorite to list")
    }
  }

  // useEffect(() => {
  //   getAssetData(pretium)
  // }, [])

  // console.log("NFT in Card ", nft)

  return (
    <Wrapper>
      <CardTheme style={{ background: c }}>
        <img src={Star} />
        <p>new</p>
      </CardTheme>
      <CardContainer>
        <CardBlockLeft>
          <CardThumbnail onClick={e => openModal()}>
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
              <FavoriteButton
                active={
                  favoriteList.length > 0 &&
                  favoriteList.find(node => node._id === asset_id)
                }
                onClick={e => addFavoriteToList()}
              >
                <img src={HeartBlue} />
              </FavoriteButton>
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
                ? `${Number(100 - manipulation * 100).toFixed()}% Organic`
                : "0% Organic"}
            </ManipulationValue>
            <Promotion>
              {manipulation && typeof manipulation === "number"
                ? `Promotion ${Number(manipulation * 100).toFixed()}%`
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
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <button onClick={closeModal}>close</button> */}
        <ModalContent>
          <ModalContentTop>
            <CardThumbnailModal>
              {image_url ? (
                <NFTImage src={image_url} />
              ) : (
                <DefaultImage src={Brand} />
              )}
            </CardThumbnailModal>
            <CardProjectDetailsModal>
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
                {/* <FavoriteButton>
                  <img src={HeartBlue} />
                </FavoriteButton> */}
              </SocialLinks>
            </CardProjectDetailsModal>
          </ModalContentTop>
          <MixedChart />
          <ModalContentTop>
            <ManipulationChartModal manipulation={manipulation} />
            <ConversionChartModal />
          </ModalContentTop>
        </ModalContent>
      </Modal>
    </Wrapper>
  )
}

const FavoriteButton = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  background: ${props => (props.active ? "#ff7bac" : "#fff")};
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;

  :hover {
    background: #ff7bac;
  }

  img {
    height: 18px;
    width: 18px;
    object-fit: contain;
  }
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  font-weight: 600;
`

const ModalContentTop = styled.div`
  display: flex;
  align-items: end;
  // padding: 24px 0;
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 164px;

  @media (max-width: ${({ theme }) => theme.device.md}) {
    margin: 0 0 0 24px;
  }
`

const CardTheme = styled.div`
  position: absolute;
  top: 0;
  left: -50px;
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
  // z-index: 1;

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

  @media (max-width: ${({ theme }) => theme.device.md}) {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`

const CardBlockLeft = styled.div`
  display: flex;
  padding: 19px 19px;
  border-right: 5px solid #ffffff;

  @media (max-width: ${({ theme }) => theme.device.md}) {
    border: 0;
  }
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
  cursor: pointer;

  position: relative;
  overflow: hidden;

  :hover {
    border: 1px solid #ff7bac;
  }
`

const CardThumbnailModal = styled(CardThumbnail)`
  width: 364px;
  height: 364px;
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
    font-weight: 600;
  }

  .name {
    font-size: 16px;
    text-align: left;
    color: #000000;
    font-weight: 800;
  }

  .mintDate {
    font-size: 13px;
    text-align: left;
    color: #000000;
    margin-top: auto;
    font-weight: 800;
  }
`

const CardProjectDetailsModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding 0 24px;

  .projectName {
    font-size: 19px;
    text-align: left;
    letter-spacing: 0px;
    color: #000000;
  }

  .name {
    font-size: 30px;
    font-weight: bold;
    text-align: left;
    color: #000000;
    margin: 3px 0;
  }

  .mintDate {
    font-size: 24px;
    text-align: left;
    color: #000000;
    margin-top: 45px;
  }
`

const NFTStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  padding: 13px 39px;
  height: -webkit-fill-available;
  width: 50%;

  @media (max-width: ${({ theme }) => theme.device.md}) {
    padding: 13px 39px 24px;
  }
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
  font-size: 13px;
  font-weight: 800;
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
  font-weight: 600;
`

export const ManipulationValue = styled.p`
  color: #40c3ea;
  font-size: 16px;
  margin: 5px 0;
  font-weight: 600;
`

const ActivePublicValue = styled.p`
  color: #40c3ea;
  font-size: 32px;
`

const SentimentValueAvg = styled.p`
  font-size: 9px;
  font-weight: 600;
`

const Promotion = styled.p`
  font-size: 11px;
  color: #ff7bac;
  font-weight: 600;
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
