import React, { useEffect, useRef, useState, lazy, Suspense } from "react"
import * as d3 from "d3"
import styled from "styled-components"
import Active from "../../images/active.png"
// import Chart from "react-apexcharts"
const Chart = lazy(() => import("react-apexcharts"))

const isBrowser = () => typeof window !== "undefined"

// [
//   {
//     x: "",
//     y: 7,
//     goals: [
//       {
//         name: "Expected",
//         value: 8.7,
//         strokeHeight: 5,
//         strokeColor: "#56AFF1",
//       },
//     ],
//   },
//   {
//     x: "",
//     y: 12,
//     goals: [
//       {
//         name: "Expected",
//         value: 10,
//         strokeHeight: 2,
//         strokeDashArray: 2,
//         strokeColor: "#56AFF1",
//       },
//     ],
//   },
//   {
//     x: "",
//     y: 7,
//     goals: [
//       {
//         name: "Expected",
//         value: "6",
//         strokeHeight: 13,
//         strokeWidth: 0,
//         strokeLineCap: "round",
//         strokeColor: "#56AFF1",
//       },
//     ],
//   },
//   {
//     x: "",
//     y: 7,
//     goals: [
//       {
//         name: "Expected",
//         value: "6",
//         strokeHeight: 13,
//         strokeWidth: 0,
//         strokeLineCap: "round",
//         strokeColor: "#56AFF1",
//       },
//     ],
//   },
// ]

const BarChart = ({ data }) => {
  const chartState = {
    chartOptions: {
      labels: [],
    },
    options: {
      series: [
        {
          name: "Voices",
          data: data,
        },
      ],
      chart: {
        height: 500,
        type: "bar",
      },
      plotOptions: {
        bar: {
          columnWidth: "70%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: "category",
        categories: [],
        labels: {
          show: false,
        },
      },
      // fill: {
      //   type: "gradient",
      //   gradient: {
      //     shade: "light",
      //     gradientToColors: ["#FF7BAC"],
      //     shadeIntensity: 0.8,
      //     // type: "horizontal",
      //     opacityFrom: 1,
      //     opacityTo: 1,
      //     stops: [0, 30],
      //   },
      // },
      colors: ["#56AFF1"],
      // fill: {
      //   type: "gradient",
      //   gradient: {
      //     shadeIntensity: 1,
      //     opacityFrom: 0.7,
      //     opacityTo: 1,
      //     stops: [0, 70, 100],
      //   },
      //   fillColors: ["#2FE1FB", "#56AFF1"],
      // },
      // dataLabels: {
      //   enabled: false,
      // },
      legend: {
        show: false,
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
            height={200}
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
  min-width: 220px;
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
