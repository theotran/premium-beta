import React, { useEffect, useRef, useState, lazy, Suspense } from "react"
import * as d3 from "d3"
import styled from "styled-components"
import Conversion from "../../images/conversion.png"
// import Chart from "react-apexcharts"
const Chart = lazy(() => import("react-apexcharts"))

const isBrowser = () => typeof window !== "undefined"
// import "./DataQualityIndex.css"

const BarChart = () => {
  const chartState = {
    series: [40, 30],
    chartOptions: {
      labels: [],
    },
    options: {
      series: [
        {
          name: "Actual",
          data: [
            {
              x: "2011",
              y: 1292,
              goals: [
                {
                  name: "Expected",
                  value: 1400,
                  strokeHeight: 5,
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "2012",
              y: 4432,
              goals: [
                {
                  name: "Expected",
                  value: 5400,
                  strokeHeight: 5,
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "2013",
              y: 5423,
              goals: [
                {
                  name: "Expected",
                  value: 5200,
                  strokeHeight: 5,
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "2014",
              y: 6653,
              goals: [
                {
                  name: "Expected",
                  value: 6500,
                  strokeHeight: 5,
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "2015",
              y: 8133,
              goals: [
                {
                  name: "Expected",
                  value: 6600,
                  strokeHeight: 13,
                  strokeWidth: 0,
                  strokeLineCap: "round",
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "2016",
              y: 7132,
              goals: [
                {
                  name: "Expected",
                  value: 7500,
                  strokeHeight: 5,
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "2017",
              y: 7332,
              goals: [
                {
                  name: "Expected",
                  value: 8700,
                  strokeHeight: 5,
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "2018",
              y: 6553,
              goals: [
                {
                  name: "Expected",
                  value: 7300,
                  strokeHeight: 2,
                  strokeDashArray: 2,
                  strokeColor: "#775DD0",
                },
              ],
            },
          ],
        },
      ],
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 0,
          borderRadiusApplication: "around",
          borderRadiusWhenStacked: "last",
          columnWidth: "70%",
          barHeight: "70%",
          distributed: false,
          rangeBarOverlap: true,
          rangeBarGroupRows: false,
          colors: {
            ranges: [
              {
                from: 0,
                to: 0,
                color: undefined,
              },
            ],
            backgroundBarColors: [],
            backgroundBarOpacity: 1,
            backgroundBarRadius: 0,
          },
          dataLabels: {
            position: "top",
            maxItems: 100,
            hideOverflowingLabels: true,
            orientation: "horizontal",
            total: {
              enabled: false,
              formatter: undefined,
              offsetX: 0,
              offsetY: 0,
              style: {
                color: "#373d3f",
                fontSize: "12px",
                fontFamily: undefined,
                fontWeight: 600,
              },
            },
          },
        },
      },
      colors: ["#00E396"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ["Actual", "Expected"],
        markers: {
          fillColors: ["#00E396", "#775DD0"],
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
          <Chart
            options={chartState.options}
            series={chartState.series}
            type="bar"
            // width="220"
          />
        </Suspense>
      )}
      <Description>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod
      </Description>
    </Wrapper>
  )
}

export default BarChart

const Wrapper = styled.div`
  // display: flex;
  // flex-direction: column;
  // .apexcharts-legend {
  //   display: none;
  // }
  // max-width: 300px;
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
