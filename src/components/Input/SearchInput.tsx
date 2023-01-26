import React, { useState } from "react"
import styled from "styled-components"

const SearchInput = ({
  activeFilter,
  searchLiveAssetsByInput,
  searchValue,
  setSearchValue,
}) => {
  const HandleInputChange = e => {
    setSearchValue(e.target.value)
  }

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      console.log("do validate")
      searchLiveAssetsByInput(searchValue)
    }
  }
  return (
    <Wrapper>
      <Label>Search</Label>
      <input
        value={searchValue}
        placeholder="Search..."
        onChange={e => HandleInputChange(e)}
        onBlur={e => {
          if (searchValue) {
            searchLiveAssetsByInput(searchValue)
          }
        }}
        onKeyDown={handleKeyDown}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 593px;
  height: 60px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 3px solid #000000;
  border-radius: 25px;
  overflow: hidden;

  input {
    border: 0;
    width: 100%;
    text-align: left;
    letter-spacing: 0px;
    color: #000000;
    font-size: 16px;
  }

  input:focus,
  textarea:focus,
  select:focus {
    border: 0;
  }
`

const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;

  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  font-size: 16px;
  border-right: 3px solid #000000;
  margin-right: 20px;
`

export default SearchInput
