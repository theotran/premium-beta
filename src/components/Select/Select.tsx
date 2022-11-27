import React, { useState } from "react"
import styled from "styled-components"

const Select = ({
  activeFilter,
  activeSort,
  sortLiveAssetsDynamic,
  sortPremintDynamic,
  searchValue,
  setSearchValue,
}) => {
  const HandleSelectChange = e => {
    if (activeFilter === "live") {
      sortLiveAssetsDynamic(JSON.parse(e.target.value))
    }
    if (activeFilter === "premint") {
      sortPremintDynamic(JSON.parse(e.target.value))
    }
    setSearchValue("")
  }
  //Sort options created_date/name/voices/sentiment/manipulation asc/desc
  return (
    <Wrapper>
      <Label>Filter By</Label>
      <select onChange={e => HandleSelectChange(e)}>
        <option
          value={JSON.stringify({
            created_date: { order: "asc", unmapped_type: "boolean" },
          })}
        >
          Time Asc
        </option>
        <option
          value={JSON.stringify({
            created_date: { order: "desc", unmapped_type: "boolean" },
          })}
        >
          Time Desc
        </option>
        <option
          value={JSON.stringify({
            sentiment: { order: "asc", unmapped_type: "boolean" },
          })}
        >
          Market Sentiment Asc
        </option>
        <option
          value={JSON.stringify({
            sentiment: { order: "desc", unmapped_type: "boolean" },
          })}
        >
          Market Sentiment Desc
        </option>
        <option
          value={JSON.stringify({
            manipulation: { order: "asc", unmapped_type: "boolean" },
          })}
        >
          Manipulation Asc
        </option>
        <option
          value={JSON.stringify({
            manipulation: { order: "desc", unmapped_type: "boolean" },
          })}
        >
          Manipulation Desc
        </option>
        <option
          value={JSON.stringify({
            voices: { order: "asc", unmapped_type: "boolean" },
          })}
        >
          Active Public Asc
        </option>
        <option
          value={JSON.stringify({
            voices: { order: "desc", unmapped_type: "boolean" },
          })}
        >
          Active Public Desc
        </option>
        <option
          value={JSON.stringify({
            name: { order: "asc", unmapped_type: "boolean" },
          })}
        >
          Name Asc
        </option>
        <option
          value={JSON.stringify({
            name: { order: "desc", unmapped_type: "boolean" },
          })}
        >
          Name Desc
        </option>
      </select>
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

  select {
    border: 0;
    width: 100%;
  }

  input:focus,
  textarea:focus,
  select:focus {
    border: 0;
  }

  padding-right: 20px;
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

export default Select
