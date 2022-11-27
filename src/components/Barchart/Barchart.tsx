import React, { useEffect, useRef, useState, lazy, Suspense } from "react"
import * as d3 from "d3"
import styled from "styled-components"
import Active from "../../images/active.png"
// import Chart from "react-apexcharts"
const Chart = lazy(() => import("react-apexcharts"))

const isBrowser = () => typeof window !== "undefined"
// import "./DataQualityIndex.css"

const BarChart = () => {
  const chartState = {
    // series: [40, 30],
    chartOptions: {
      labels: [],
    },
    options: {
      series: [
        {
          name: "Actual",
          data: [
            {
              x: "",
              y: 7,
              goals: [
                {
                  name: "Expected",
                  value: "6",
                  strokeHeight: 13,
                  strokeWidth: 0,
                  strokeLineCap: "round",
                  strokeColor: "#56AFF1",
                },
              ],
            },
            {
              x: "",
              y: 8,
              goals: [
                {
                  name: "Expected",
                  value: "10",
                  strokeHeight: 5,
                  strokeColor: "#56AFF1",
                },
              ],
            },
            {
              x: "",
              y: 7,
              goals: [
                {
                  name: "Expected",
                  value: 8.7,
                  strokeHeight: 5,
                  strokeColor: "#56AFF1",
                },
              ],
            },
            {
              x: "",
              y: 12,
              goals: [
                {
                  name: "Expected",
                  value: 10,
                  strokeHeight: 2,
                  strokeDashArray: 2,
                  strokeColor: "#56AFF1",
                },
              ],
            },
          ],
        },
      ],
      chart: {
        height: "130%",
        type: "bar",
      },
      plotOptions: {
        bar: {
          columnWidth: "60%",
        },
      },
      colors: ["#2FE1FB"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ["Actual", "Expected"],
        markers: {
          fillColors: ["#2FE1FB", "#56AFF1"],
        },
      },
    },
  }

  return (
    <Wrapper>
      <TitleContainer>
        <img src={Active} />
        <h3>Active Public</h3>
      </TitleContainer>
      {isBrowser() && (
        <Suspense fallback={<div>Loading...</div>}>
          <Chart
            options={chartState.options}
            series={chartState.options.series}
            type="bar"
            // width="220"
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

export default BarChart

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .apexcharts-legend {
    display: none;
  }
  max-width: 400px;
  margin-right: 24px;
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
