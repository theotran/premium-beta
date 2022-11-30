import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Market from "../../images/market.png"

const MarketSnapshot = () => {
  return (
    <Wrapper>
      <TitleContainer>
        {/* <img src={Market} /> */}
        <h3>
          Market
          <br />
          Snapshot
        </h3>
      </TitleContainer>
      <Description>
        The health of the global, digital asset marketplace. Currently tracking:
      </Description>
    </Wrapper>
  )
}

export default MarketSnapshot

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 34px;
  border-right: 5px solid #fff;
  max-width: 264px;

  @media (max-width: ${({ theme }) => theme.device.md}) {
    display: flex;
    flex-direction: column;
    border: 0;
    // width: 100%;
    max-width: 100%;
    padding: 24px;
  }
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
  }

  h3 {
    font-size: 30px;
    text-align: left;
    letter-spacing: 0px;
    color: #000000;
  }
`

const Description = styled.p`
  font-size: 15px;
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  margin: 24px 0;
  font-weight: 400;
`
