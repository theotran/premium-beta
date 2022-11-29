import React, { useEffect, useRef, useState, lazy, Suspense } from "react"
import * as d3 from "d3"
import styled from "styled-components"
import Market from "../../images/market.png"
// import Chart from "react-apexcharts"
const Chart = lazy(() => import("react-apexcharts"))

const isBrowser = () => typeof window !== "undefined"
// import "./DataQualityIndex.css"

const LineChartV2 = ({ data }) => {
  const chartState = {
    chartOptions: {
      labels: [],
    },
    options: {
      series: [
        {
          name: "Value",
          // data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
          data: data,
        },
      ],
      chart: {
        height: 500,
        type: "line",
      },
      dataLabels: {
        enabled: false,
      },
      // forecastDataPoints: {
      //   count: 7,
      // },
      stroke: {
        width: 5,
        curve: "smooth",
      },
      xaxis: {
        type: "category",
        categories: [],
        labels: {
          show: false,
        },
        // tickAmount: 2,
        // labels: {
        //   formatter: function (value, timestamp, opts) {
        //     return opts.dateFormatter(new Date(timestamp), "dd MMM")
        //   },
        // },
      },
      // title: {
      //   text: "Forecast",
      //   align: "left",
      //   style: {
      //     fontSize: "16px",
      //     color: "#666",
      //   },
      // },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#FF7BAC"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      yaxis: {
        min: -100,
        max: 100,
        show: true,
        tickAmount: 4,
      },
    },
  }

  return (
    <Wrapper>
      <TitleContainer>
        <img src={Market} />
        <h3>Market Sentiment</h3>
      </TitleContainer>
      {isBrowser() && (
        <Suspense fallback={<div>Loading...</div>}>
          <Chart
            options={chartState.options}
            series={chartState.options.series}
            type="line"
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

export default LineChartV2

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
