import React, { useEffect, useRef, useState, lazy, Suspense } from "react"
import * as d3 from "d3"
import styled from "styled-components"
import Conversion from "../../images/conversion.png"
// import Chart from "react-apexcharts"
const Chart = lazy(() => import("react-apexcharts"))

const isBrowser = () => typeof window !== "undefined"
// import "./DataQualityIndex.css"

const ConversionChartModal = ({ conversion }) => {
  const remainder = 100 - conversion

  const chartState = {
    series: [conversion, remainder],
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
      <CopyWrapper>
        <TitleContainer>
          <img src={Conversion} />
          <h3>Conversion</h3>
        </TitleContainer>
        <Value>{`${conversion}%`}</Value>
      </CopyWrapper>
      {isBrowser() && (
        <Suspense fallback={<div>Loading...</div>}>
          <Chart
            options={chartState.options}
            series={chartState.series}
            labels={chartState.chartOptions.labels}
            type="donut"
            width="220"
          />
        </Suspense>
      )}
      {/* <Description>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod
      </Description> */}
    </Wrapper>
  )
}

export default ConversionChartModal

const Wrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 24px;
  .apexcharts-legend {
    display: none;
  }
  max-width: 300px;
`

const CopyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Value = styled.p`
  color: #4ea8de;
  font-size: 31px;
  font-weight: 600;
  margin-left: 30px;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
  }

  h3 {
    font-size: 14px;
    text-align: left;
    letter-spacing: 0px;
    color: #000000;
    font-weight: 600;
  }
`
