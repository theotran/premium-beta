import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "Layouts/layout"
import SEO from "Components/seo"
import KoatLogo from "../images/koat-white.png"
import Mail from "../images/mail-white.png"
import Twitter from "../images/twitter-white.png"
import DiscordWhite from "../images/discord-white.png"

const Signup = () => {
  return (
    <Layout>
      <SEO title="Sign Up" />
      <Container>
        <HeroContainer>
          <Hero>
            <h2>Sign up for the Pretium Beta with your google account.</h2>
          </Hero>
          <SignInContainer>
            <SignInButton>Sign In with Google</SignInButton>
          </SignInContainer>
        </HeroContainer>
      </Container>
      <Footer>
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
      </Footer>
    </Layout>
  )
}

const SignInButton = styled.button`
  width: 472px;
  min-height: 83px;
  /* UI Properties */
  background: transparent linear-gradient(90deg, #56aff1 0%, #2fe1fb 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  cursor: pointer;

  text-align: center;
  letter-spacing: 0px;
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
`

const Container = styled.div`
  padding: 80px 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 35px;
`

const Hero = styled.div`
  width: 100%;
  height: 630px;

  background: transparent
    linear-gradient(90deg, #823f91 0%, #7e3f92 3%, #214abc 100%) 0% 0% no-repeat
    padding-box;
  border-radius: 23px;
  display: flex;
  justify-content: flex-end;
  padding: 42px 83px;

  h2 {
    text-align: right;
    letter-spacing: 0px;
    color: #ffffff;
    font-size: 82px;
    font-weight: bold;
  }
`

const SignInContainer = styled.div`
  width: 100%;
  // height: 630px;
  background: #f4f4f4 0% 0% no-repeat padding-box;
  border-radius: 23px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px;
`

const Footer = styled.footer`
  width: 100%;
  padding: 80px 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent linear-gradient(90deg, #f9a745 0%, #f43f58 100%) 0% 0%
    no-repeat padding-box;
`

const FooterMenu = styled.div`
  display: flex;
  padding: 0 80px 80px;
  justify-content: space-between;
  gap: 45px;
  border-bottom: 4px solid #ffffff;
  width: 100%;
  max-width: 1400px;
  margin-bottom: 80px;
  a {
    font-size: 26px;
    text-align: left;
    letter-spacing: 0px;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
  }
`

const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 52px;
  margin-top: -10px;
`

export default Signup
