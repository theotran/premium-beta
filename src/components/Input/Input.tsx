import React, { useState } from "react"
import styled from "styled-components"

const Input = ({ label, value, placeholder, onChange }) => {
  return (
    <Wrapper>
      <label>{label || ""}</label>
      <input
        value={value || ""}
        placeholder={placeholder || ""}
        onChange={onChange}
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
    padding: 0 15px;
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

export default Input
