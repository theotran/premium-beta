import React, { useState, useEffect } from "react"
import { graphql, navigate, useStaticQuery } from "gatsby"
import ReactModal from "react-modal"
import styled from "styled-components"
import Layout from "Layouts/layout"
import SEO from "Components/seo"
import Footer from "Components/Footer/Footer"
import LinechartV2 from "Components/Linechart/Linechart-v2"
import ManipulationChart from "Components/Piechart/ManipulationChart"
import ConversionChart from "Components/Piechart/ConversionChart"
import BarChart from "Components/Barchart/Barchart"
import MarketSnapshot from "Components/MarketSnapshot/MarketSnapshot"
import SignUpModal from "Components/SignUpModal"
import LandingPageCards from "Components/Landing/Cards"

import { initializeApp } from "firebase/app"

import {
  // getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth"

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth"

import {
  getFirestore,
  // ​​  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ03S-Q_9AVwYgYbyZpSuNVc56jAf4nDQ",
  authDomain: "pretium-beta.firebaseapp.com",
  databaseURL: "https://pretium-beta-default-rtdb.firebaseio.com",
  projectId: "pretium-beta",
  storageBucket: "pretium-beta.appspot.com",
  messagingSenderId: "665041649891",
  appId: "1:665041649891:web:923ccbe7763c80797845d6",
  measurementId: "G-H62NHRYFHM",
}

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  // url: "http://localhost:8000/",
  url: "https://pretium-beta.web.app/",
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: "https://pretium.page.link/email-sign-up",
  },
  android: {
    packageName: "https://pretium.page.link/email-sign-up",
    installApp: true,
    minimumVersion: "12",
  },
  dynamicLinkDomain: "pretium.page.link",
}

// const auth = getAuth()
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

ReactModal.setAppElement("#___gatsby")
ReactModal.defaultStyles.overlay.backgroundColor =
  "linear-gradient(90deg, rgba(94, 166, 238, 1) 0%, rgba(96, 169, 237, 1) 23%, rgba(105, 180, 234, 1) 44%, rgba(119, 199, 230, 1) 65%, rgba(140, 225, 225, 1) 85%, rgba(160, 251, 220, 1) 100%) 0% 0%"

const LandingPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const SignUpWithEmailLink = email => {
    // const email = "theo@koat.ai"
    // const [emailForSignupWithLink, setEmailForSignupWithLink] = useState(null)
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        console.log("Success")
        window.localStorage.setItem("emailForSignIn", email)
        // ...
        navigate("/")
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log("Error ", errorMessage)
        // ...
      })
  }
  return (
    <Layout>
      <SEO title="Sign Up" />
      <Container>
        <SignUpModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          signUpWithEmail={SignUpWithEmailLink}
        />
        <HeroContainer>
          <Hero>
            <h2>
              NFT's <br />
              For All.
            </h2>
          </Hero>
          <CTAContainer>
            <CTAHeader>
              Unlock the power of true NFT valuation on over ##,### premint and
              post mint assets.
            </CTAHeader>
            <Buttons>
              <Button onClick={e => setModalIsOpen(true)}>
                Sign up for the beta
              </Button>
              <BlueButton>Hot NFT's Coming Up For Mint</BlueButton>
              <OrangeButton>Top valued NFT’s</OrangeButton>
            </Buttons>
          </CTAContainer>
        </HeroContainer>
        <LandingPageCards />
        <BottomHeroContainer>
          <BottomHero>
            <h2>
              Solving the
              <br />
              biggest problems
              <br />
              within the NFT
              <br />
              ecosystem
            </h2>
          </BottomHero>
          <BottomCTAContainer>
            <CTAHeader>
              We protect you from manipulated, fraudulent and hollow NFT&rsquo;s
              so you&rsquo;re can be buying and selling confidente.
            </CTAHeader>
            <p>
              Pretium is a one stop shop for managing your Digital Asset
              Portfolio while ensuring you have access to the richest data on
              the market.
            </p>
          </BottomCTAContainer>
        </BottomHeroContainer>
        <MarketSnapshotContainer>
          <MarketSnapshot />
          <ChartsWrapper>
            <LinechartV2
              data={[
                "0.5920",
                "0.6190",
                "0.3160",
                "0.9880",
                "0.1190",
                "0.4289",
                "0.6190",
                "0.3160",
                "0.9880",
                "0.1190",
              ]}
            />

            <BarChart
              data={[
                20639200, 17160800,

                15194400,

                15346200,

                15810100,

                16803300, 12056100,
              ]}
            />

            <ManipulationChart data={33} />

            <ConversionChart data={67} />
          </ChartsWrapper>
        </MarketSnapshotContainer>
        <SignUpButton onClick={e => setModalIsOpen(true)}>
          Sign up for the beta
        </SignUpButton>
      </Container>
      <Footer />
    </Layout>
  )
}

const MarketSnapshotContainer = styled.div`
  display: flex;
  border-radius: 23px;
  overflow: hidden;
  background: #f4f4f4;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.device.md}) {
    flex-direction: column;
    align-items: center;
  }
`

const ChartsWrapper = styled.div`
  // background: #f4f4f4;
  display: flex;
  padding: 24px;
  justify-content: space-between;
  width: 100%;
  font-weight: 500;
  gap: 32px;

  .apexcharts-toolbar {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.device.md}) {
    flex-direction: column;
    align-items: center;
  }
`

const Container = styled.div`
  padding: 80px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    padding: 80px 45px;
  }
`

const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 24px;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    gap: 32px;
    flex-direction: row-reverse;
    align-items: flex-start;
  }
`

const Hero = styled.div`
  width: 100%;

  background: transparent linear-gradient(90deg, #56aff1 0%, #2fe1fb 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 12px;
  display: flex;
  justify-content: flex-end;
  align-items: start;
  padding: 24px;

  h2 {
    text-align: right;
    color: #ffffff;
    font-size: 72px;
    font-weight: 600;
  }

  @media (min-width: ${({ theme }) => theme.device.md}) {
    min-height: 700px;
    padding: 45px;

    h2 {
      font-size: 90px;
    }
  }
`

const CTAContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 35px;
  gap: 100px;
  background: #f4f4f4 0% 0% no-repeat padding-box;
  border-radius: 23px;
  max-width: 650px;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    min-height: 700px;
    gap: 0;
    padding: 45px;
  }
`

const CTAHeader = styled.h3`
  font-size: 30px;
  font-weight: 600;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    font-size: 40px;
  }
`

const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

const Button = styled.button`
  width: 100%;
  min-height: 83px;
  border-radius: 12px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  border: 0;
  cursor: pointer;
  background: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`

const BlueButton = styled(Button)`
  background: transparent linear-gradient(90deg, #56aff1 0%, #2fe1fb 100%) 0% 0%
    no-repeat padding-box;
`

const OrangeButton = styled(Button)`
  background: transparent linear-gradient(90deg, #f9a745 0%, #f43f58 100%) 0% 0%
    no-repeat padding-box;
`

const SignUpButton = styled(Button)`
  background: transparent linear-gradient(90deg, #56aff1 0%, #2fe1fb 100%) 0% 0%
    no-repeat padding-box;
  color: #fff;
  justify-content: center;
  margin-top: 30px;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    font-size: 35px;
    min-height: 119px;
    margin-top: 30px;
  }
`

const BottomHeroContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 24px;
  margin: 45px 0;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    gap: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

const BottomHero = styled.div`
  width: 100%;

  background: transparent
    linear-gradient(90deg, #823f91 0%, #7e3f92 3%, #214abc 100%) 0% 0% no-repeat
    padding-box;
  border-radius: 12px;
  display: flex;
  justify-content: flex-end;
  align-items: start;
  padding: 45px;

  h2 {
    text-align: right;
    color: #ffffff;
    font-size: 72px;
    font-weight: 600;
    line-height: 1.2;
  }

  @media (min-width: ${({ theme }) => theme.device.md}) {
    padding: 80px 64px;

    h2 {
      font-size: 90px;
    }
  }
`

const BottomCTAContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 35px;
  background: #f4f4f4 0% 0% no-repeat padding-box;
  border-radius: 23px;
  gap: 72px;

  p {
    font-size: 26px;
    line-height: 1.5;
  }

  @media (min-width: ${({ theme }) => theme.device.md}) {
    padding: 90px 45px;
    height: 100%;
  }
`

export default LandingPage
