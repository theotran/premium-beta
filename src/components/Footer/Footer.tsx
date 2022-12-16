import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import KoatLogo from "../../images/koat-white.png"
import Mail from "../../images/mail-white.png"
import Twitter from "../../images/twitter-white.png"
import DiscordWhite from "../../images/discord-white.png"

const Footer = () => (
  <FooterContainer>
    <FooterMenu>
      <a>Contact</a>
      <a>Support</a>
      <Logos>
        <img src={DiscordWhite} />
        <img src={Mail} />
        <img src={Twitter} />
      </Logos>
      <a>Terms of Use</a>
      <a>Faq</a>
    </FooterMenu>
    <img src={KoatLogo} />
  </FooterContainer>
)

const FooterContainer = styled.footer`
  width: 100%;
  padding: 64px 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent linear-gradient(90deg, #f9a745 0%, #f43f58 100%) 0% 0%
    no-repeat padding-box;
`

const FooterMenu = styled.div`
  display: flex;
  padding: 0 64px 64px;
  justify-content: center;
  gap: 45px;
  border-bottom: 4px solid #ffffff;
  width: 100%;
  max-width: 1400px;
  margin-bottom: 64px;
  a {
    font-size: 26px;
    text-align: left;
    letter-spacing: 0px;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.device.md}) {
    justify-content: space-between;
    a {
      display: block;
    }
  }
`

const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 52px;
  margin-top: -10px;

  img {
    height: 45px;
    width: auto;
  }
`

export default Footer
