import React, { useState } from "react"
import styled from "styled-components"

const LandingPageCards = () => {
  return (
    <Wrapper>
      <CardWrapper>
        <CardOverlay />
      </CardWrapper>
      <CardWrapper>
        <CardOverlay />
      </CardWrapper>
      <CardWrapper>
        <CardOverlay />
      </CardWrapper>
    </Wrapper>
  )
}

const CardWrapper = styled.div`
  min-width: 400px;
  min-height: 400px;
  /* UI Properties */
  background: ${p =>
    p.color
      ? p.color
      : "transparent linear-gradient(90deg, #F9A745 0%, #F43F58 100%) 0% 0% no-repeat padding-box;"};
  border-radius: 28px;
  position: relative;
  display: flex;
`

const CardOverlay = styled.div`
  height: 100%;
  width: 290px;
  background: #cccccc;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 28px;
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 34px;
  padding: 30px 0;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    flex-direction: row;
  }
`

export default LandingPageCards
