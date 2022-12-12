import React, { useEffect, useRef, useState, lazy, Suspense } from "react"
import * as d3 from "d3"
import styled from "styled-components"
import Market from "../../images/market.png"
// import Chart from "react-apexcharts"
const Chart = lazy(() => import("react-apexcharts"))

const isBrowser = () => typeof window !== "undefined"
// import "./DataQualityIndex.css"

const MixedChart = ({ publicSentiment, score }) => {
  const chartState = {
    series: [
      {
        name: "Market Sentiment Score",
        type: "column",
        data: score.map(s => s._source.score),
      },
      {
        name: "Public Sentiment",
        type: "line",
        data: publicSentiment.map(p => p._source.public_sentiment.toFixed(4)),
      },
    ],
    options: {
      chart: {
        height: 200,
        type: "line",
      },
      stroke: {
        width: [2, 2],
        // curve: "smooth",
      },
      colors: ["#69B4EA", "#FF7BAC"],
      plotOptions: {
        bar: {
          columnWidth: "85%",
        },
      },
      // fill: {
      //   type: "gradient",
      //   colors: ["#69B4EA", "#FF7BAC"],
      //   gradient: {
      //     shade: "dark",
      //     gradientToColors: ["#69B4EA", "#FF7BAC"],
      //     shadeIntensity: 1,
      //     // type: "horizontal",
      //     opacityFrom: 1,
      //     opacityTo: 1,
      //     stops: [0, 100, 100, 100],
      //   },
      // },
      dataLabels: {
        enabled: false,
        // enabledOnSeries: [1],
      },
      // labels: [
      //   "01 Jan 2001",
      //   "02 Jan 2001",
      //   "03 Jan 2001",
      //   "04 Jan 2001",
      //   "05 Jan 2001",
      //   "06 Jan 2001",
      //   "07 Jan 2001",
      //   "08 Jan 2001",
      //   "09 Jan 2001",
      //   "10 Jan 2001",
      //   "11 Jan 2001",
      //   "12 Jan 2001",
      // ],
      xaxis: {
        type: "category",
      },
      yaxis: [
        {
          title: {
            text: "Market Sentiment Score",
          },
        },
        {
          opposite: true,
          title: {
            text: "Public Sentiment",
          },
        },
      ],
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
          <ChartWrapper>
            <Chart
              options={chartState.options}
              series={chartState.series}
              type="line"
              width={"100%"}
            />
          </ChartWrapper>
        </Suspense>
      )}
    </Wrapper>
  )
}

export default MixedChart

const Wrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 24px;
  .apexcharts-legend {
    display: none;
  }
  .apexcharts-toolbar {
    display: none;
  }
  width: 100%;
`

const ChartWrapper = styled.div`
  width: 100%;
  max-width: 700px;
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
