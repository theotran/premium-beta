import React, { useEffect, useRef, useState, lazy, Suspense } from "react"
import styled from "styled-components"
import ManipulationImage from "../../images/Manipulation.png"
// import Chart from "react-apexcharts"
import { ManipulationValue } from "Components/postGrid/card/card"
const Chart = lazy(() => import("react-apexcharts"))
const isBrowser = () => typeof window !== "undefined"

const ManipulationChartModal = ({ manipulation }) => {
  const chartState = {
    series: [70, 20],
    chartOptions: {
      labels: [],
    },
    options: {
      colors: ["#69B4EA", "#FF7BAC"],
      chart: {
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        colors: ["#69B4EA", "#FF7BAC"],
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
        <img src={ManipulationImage} />
        <h3>Manipulation</h3>
        {/* <ManipulationValue>
          {manipulation && typeof manipulation === "number"
            ? `${Number(100 - manipulation * 100).toFixed()}% Organic`
            : "0% Organic"}
        </ManipulationValue> */}
      </TitleContainer>
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

export default ManipulationChartModal

const Wrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 24px;
  .apexcharts-legend {
    display: none;
  }
  max-width: 300px;
  margin-right: 45px;
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
