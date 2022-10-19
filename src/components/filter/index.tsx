import React, { useState } from "react"
import styled from "styled-components"
import Conversion from "../../images/conversion.png"

const Filter = () => {
  const [activeFilter, setActiveFilter] = useState("premint")

  return (
    <Container>
      <Option
        active={activeFilter === "premint"}
        onClick={() => setActiveFilter("premint")}
      >
        <img src={Conversion} />
        <OptionCategory>Premint Calendar</OptionCategory>
      </Option>
      <Option
        active={activeFilter === "live"}
        onClick={() => setActiveFilter("live")}
      >
        <OptionCategory>Live Asset Tracker</OptionCategory>
        <img src={Conversion} />
      </Option>
    </Container>
  )
}

const Container = styled.div`
  background: transparent
    linear-gradient(
      90deg,
      #5ea6ee 0%,
      #60a9ed 23%,
      #69b4ea 44%,
      #77c7e6 65%,
      #8ce1e1 85%,
      #a0fbdc 100%
    )
    0% 0% no-repeat padding-box;
  border-radius: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 7px;
  width: 100%;
  min-height: 94px;
  margin: 30px 0;
`

const Option = styled.div`
  background: ${props => (props.active ? "#fff" : "transparent")};
  border: ${props => (props.active ? "3px solid #000000" : "0")};
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
`

const OptionCategory = styled.p`
  letter-spacing: 0px;
  font-size: 30px;
  color: #fff;
`

export default Filter
