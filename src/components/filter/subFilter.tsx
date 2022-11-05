import React, { useState } from "react"
import styled from "styled-components"

const SubFilter = ({ fetchPremint, fetchLiveAssets }) => {
  const [activeFilter, setActiveFilter] = useState("premint")

  return (
    <Container>
      <p>Filter By</p>
      <button onClick={e => fetchLiveAssets()}>Time</button>
      <button onClick={e => fetchLiveAssets()}>Market Sentiment</button>
      <button onClick={e => fetchLiveAssets()}>Manipulation</button>
      <button onClick={e => fetchLiveAssets()}>Active Public</button>
      <button onClick={e => fetchLiveAssets()}>Conversion</button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
  justify-content: center;
  width: 80%;
  margin-bottom: 30px;

  button {
    cursor: pointer;
    background: none;
    border: 0;
  }
`

const Option = styled.div`
  background: ${props => (props.active ? "#fff" : "transparent")};
  border: ${props => (props.active ? "3px solid #000" : "0")};
  p {
    color: ${props => (props.active ? "#232323" : "#fff")};
  }
  img {
    filter: ${props => (props.active ? "none" : "brightness(0) invert(1)")};
  }
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 25px;
  cursor: pointer;
  transition: ;
`

const OptionCategory = styled.p`
  letter-spacing: 0px;
  font-size: 30px;
  color: #fff;
`

export default SubFilter
