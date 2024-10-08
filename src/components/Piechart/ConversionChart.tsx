import React, { useEffect, useRef, useState, lazy, Suspense } from "react"
import * as d3 from "d3"
import styled from "styled-components"
import Conversion from "../../images/conversion.png"
// import Chart from "react-apexcharts"
const Chart = lazy(() => import("react-apexcharts"))

const isBrowser = () => typeof window !== "undefined"
// import "./DataQualityIndex.css"

const ConversionChart = ({ data }) => {
  const remainder = 100 - data
  const chartState = {
    series: [data, remainder],
    chartOptions: {
      labels: [],
    },
    options: {
      colors: ["#64DFDF", "#77C7E6"],
      chart: {
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        colors: ["#64DFDF", "#77C7E6"],
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

  return (
    <Wrapper>
      <TitleContainer>
        <img src={Conversion} />
        <h3>Conversion</h3>
      </TitleContainer>
      {isBrowser() && (
        <Suspense fallback={<div>Loading...</div>}>
          <ChartWrapper>
            <Chart
              options={chartState.options}
              series={chartState.series}
              labels={chartState.chartOptions.labels}
              type="donut"
              width="220"
            />
            <ChartValue>{`${data}%`}</ChartValue>
          </ChartWrapper>
        </Suspense>
      )}
      {/* <Description>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod
      </Description> */}
    </Wrapper>
  )
}

export default ConversionChart

const ChartWrapper = styled.div`
  position: relative;
`

const ChartValue = styled.p`
  position: absolute;
  bottom: 74px;
  left: 0%;
  font-size: 30px;
  color: #64dfdf;
  width: 100%;
  text-align: center;
`

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
