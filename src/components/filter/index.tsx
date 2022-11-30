import React, { useState } from "react"
import styled from "styled-components"
import Conversion from "../../images/conversion.png"
import SubFilter from "./subFilter"

const Filter = ({
  fetchPremint,
  fetchLiveAssets,
  sortLiveAssetsDynamic,
  sortPremintDynamic,
  searchLiveAssetsByInput,
  favoriteList,
  setNFTData,
}) => {
  const [activeFilter, setActiveFilter] = useState("premint")
  const [activeSort, setActiveSort] = useState(null)
  const [searchValue, setSearchValue] = useState("")

  return (
    <Wrapper>
      <Container activeFilter={activeFilter}>
        <Option
          active={activeFilter === "premint"}
          onClick={() => {
            setActiveFilter("premint")
            setActiveSort(null)
            setSearchValue("")
            fetchPremint()
          }}
        >
          <img src={Conversion} />
          <OptionCategory>Premint Calendar</OptionCategory>
        </Option>
        <Option
          active={activeFilter === "live"}
          onClick={() => {
            setActiveFilter("live")
            setActiveSort(null)
            setSearchValue("")
            fetchLiveAssets()
          }}
        >
          <OptionCategory>Live Asset Tracker</OptionCategory>
          <img src={Conversion} />
        </Option>
      </Container>
      <SubFilter
        activeFilter={activeFilter}
        activeSort={activeSort}
        setActiveSort={setActiveSort}
        sortLiveAssetsDynamic={sortLiveAssetsDynamic}
        sortPremintDynamic={sortPremintDynamic}
        searchLiveAssetsByInput={searchLiveAssetsByInput}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        favoriteList={favoriteList}
        setNFTData={setNFTData}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

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

  background: ${props =>
    props.activeFilter === "live"
      ? `transparent linear-gradient(90deg, #f9a745 0%, #f43f58 100%) 0% 0%
    no-repeat padding-box;`
      : `transparent
    linear-gradient(
      90deg,
      #5ea6ee 0%,
      #60a9ed 23%,
      #69b4ea 44%,
      #77c7e6 65%,
      #8ce1e1 85%,
      #a0fbdc 100%
    )
    0% 0% no-repeat padding-box;`};
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
`

const OptionCategory = styled.p`
  letter-spacing: 0px;
  font-size: 30px;
  color: #fff;
  font-weight: 900;
`

export default Filter
