import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Modal from "react-modal"
import { Link, navigate } from "gatsby"
import Input from "Components/Input/Input"
import SignupEmailLink from "Pages/signup-link"

const SignUpModal = ({ modalIsOpen, setModalIsOpen, signUpWithEmail }) => {
  const closeModal = e => {
    setModalIsOpen(false)
  }

  const customStyles = {
    content: {
      zIndex: 3,
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      // height: "90%",
      // width: "90%",
      borderRadius: "12px",
    },
  }

  const [email, setEmail] = useState("")

  return (
    <Modal
      isOpen={modalIsOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
    >
      {/* <button onClick={closeModal}>close</button> */}
      <ModalContent>
        <h2>Sign Up For Pretium</h2>
        <p>We'll send you an email with a verification link.</p>
        <Input
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <BlueButton onClick={e => signUpWithEmail(email)}>
          Send Verification Link
        </BlueButton>
      </ModalContent>
    </Modal>
  )
}

const Button = styled.button`
  width: 100%;
  // min-height: 83px;
  border-radius: 12px;
  padding: 24px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
  background: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  margin: 20px 0;
`

const BlueButton = styled(Button)`
  background: transparent linear-gradient(90deg, #56aff1 0%, #2fe1fb 100%) 0% 0%
    no-repeat padding-box;
  color: #fff;
`

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

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  padding: 60px 30px;
  h2 {
    text-align: left;
    font-size: 48px;
    font-weight: 600;
    letter-spacing: 0px;
  }

  p {
    margin: 20px 0;
  }
`

export default SignUpModal
