import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "Layouts/layout"
import SEO from "Components/seo"
import Footer from "Components/Footer/Footer"

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
      <Footer />
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

export default Signup
