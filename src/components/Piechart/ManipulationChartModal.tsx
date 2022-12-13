import React, { useEffect, useRef, useState, lazy, Suspense } from "react"
import styled from "styled-components"
import ManipulationImage from "../../images/Manipulation.png"
// import Chart from "react-apexcharts"
import { ManipulationValue } from "Components/postGrid/card/card"
const Chart = lazy(() => import("react-apexcharts"))
const isBrowser = () => typeof window !== "undefined"

const ManipulationChartModal = ({ manipulation }) => {
  const remainder = 100 - manipulation
  const chartState = {
    series: [manipulation, remainder],
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
      <CopyWrapper>
        <TitleContainer>
          <img src={ManipulationImage} />
          <h3>Manipulation</h3>
        </TitleContainer>
        <Value>{`${remainder}% Organic`}</Value>
        <Promotion>{`${manipulation}% Promotion`}</Promotion>
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
  margin-right: 45px;
`

const CopyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Value = styled.p`
  color: #40c3ea;
  font-size: 16px;
  font-weight: 600;
  margin-left: 35px;
`

const Promotion = styled.p`
  font-size: 12px;
  color: #ff7bac;
  font-weight: 600;
  margin-left: 35px;
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

const Description = styled.p`
  font-size: 15px;
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  margin: 24px 0;
  font-weight: 400;
`
