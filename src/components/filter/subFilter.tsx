import React, { useState } from "react"
import styled from "styled-components"

const SubFilter = ({
  activeSort,
  setActiveSort,
  sortLiveCreatedDateAsc,
  sortLiveCreatedDateDesc,
}) => {
  const SortTimeHandler = () => {
    if (activeSort === "time") {
      sortLiveCreatedDateDesc()
    } else {
      setActiveSort("time")
      sortLiveCreatedDateAsc()
    }
  }

  return (
    <Container>
      <p>Filter By</p>
      <SortButton active={activeSort === "time"} onClick={SortTimeHandler}>
        Time
      </SortButton>
      <SortButton onClick={e => fetchLiveAssets()}>Market Sentiment</SortButton>
      <SortButton onClick={e => fetchLiveAssets()}>Manipulation</SortButton>
      <SortButton onClick={e => fetchLiveAssets()}>Active Public</SortButton>
      <SortButton onClick={e => fetchLiveAssets()}>Conversion</SortButton>
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
`

const SortButton = styled.button`
  cursor: pointer;
  background: ${props => (props.active ? "#e2e2e2" : "transparent")};
  border: 0;
  padding: 8px;
  border-radius: 10px;
  :hover {
    background: #e2e2e2;
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
