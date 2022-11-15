import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import ManipulationImage from "../../images/Manipulation.png"
import Chart from "react-apexcharts"
// import "./DataQualityIndex.css"

const ManipulationChart = () => {
  const chartState = {
    series: [70, 20],
    chartOptions: {
      labels: [],
    },
    options: {
      colors: ["#fff", "#FF7BAC"],
      chart: {
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        colors: ["#fff", "#FF7BAC"],
      },
      plotOptions: {
        pie: {
          // offsetX: 100,
          offsetY: 23,
          donut: {
            value: {
              show: true,
            },
            total: {
              show: false,
              showAlways: false,

              color: "#fff",
            },
          },
        },
      },
    },
  }

  if (typeof window === "undefined") {
    return <h2>Loading...</h2>
  }

  return (
    <Wrapper>
      <TitleContainer>
        <img src={ManipulationImage} />
        <h3>Manipulation</h3>
      </TitleContainer>
      <Chart
        options={chartState.options}
        series={chartState.series}
        labels={chartState.chartOptions.labels}
        type="donut"
        width="220"
      />
      <Description>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod
      </Description>
    </Wrapper>
  )
}

export default ManipulationChart

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .apexcharts-legend {
    display: none;
  }
  max-width: 300px;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
  }

  h3 {
    font-size: 20px;
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
