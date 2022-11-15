import React, { useEffect, useRef } from "react"
import * as d3 from "d3"
import styled from "styled-components"
import Active from "../../images/active.png"
import Conversion from "../../images/conversion.png"
import Market from "../../images/market.png"

const LineChart = () => {
  const d3Chart = useRef()

  const parseDate = d3.timeParse("%Y-%m-%d")

  useEffect(() => {
    fetch("https://data.cityofnewyork.us/resource/tg4x-b46p.json")
      .then(response => response.json())
      .then(data => {
        // Transform data
        const permits = data.filter(event => {
          return event.eventtype === "Shooting Permit"
        })

        // Get all the dates in an array
        const dates = [
          ...new Set(permits.map(each => each.enteredon.slice(0, 10))),
        ]

        let CountsByDate = []

        // Get counts(number of times a permit entered) on each date
        dates.map(time => {
          let date = time
          let count = 0

          permits.map(each => {
            let timestamp = each.enteredon.slice(0, 10)
            if (timestamp === date) {
              count += 1
            }
          })

          const counts = { date: parseDate(date), count: count }

          CountsByDate.push(counts)
        })

        console.log("CountsByDate ", CountsByDate)

        const margin = { top: 20, right: 30, bottom: 30, left: 30 }
        const width =
          parseInt(d3.select("#d3Linechart").style("width")) -
          margin.left -
          margin.right
        const height =
          parseInt(d3.select("#d3Linechart").style("height")) -
          margin.top -
          margin.bottom

        // Set up chart
        const svg = d3
          .select(d3Chart.current)
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr(
            "transform",
            "translate(" + margin.left + "," + margin.top + ")"
          )

        // x axis scale
        const x = d3
          .scaleTime()
          .domain(
            d3.extent(CountsByDate, function (d) {
              return d.date
            })
          )
          .range([0, width])

        svg
          .append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x))

        // Get the max value of counts
        const max = d3.max(CountsByDate, function (d) {
          return d.count
        })

        // y axis scale
        const y = d3.scaleLinear().domain([0, max]).range([height, 0])

        svg.append("g").call(d3.axisLeft(y))

        // Draw line
        svg
          .append("path")
          .datum(CountsByDate)
          .attr("fill", "none")
          .attr("stroke", "#FF7BAC")
          .attr("stroke-width", 1)
          .attr(
            "d",
            d3
              .line()
              .x(function (d) {
                return x(d.date)
              })
              .y(function (d) {
                return y(d.count)
              })
          )

        // Add title
        // svg
        //   .append("text")
        //   .attr("x", width / 2)
        //   .attr("y", margin.top / 5 - 10)
        //   .attr("text-anchor", "middle")
        //   .attr("font-size", "16px")
        //   .attr("fill", "blue")
        //   .text("New York City Film Permits entered in 2020 - Shooting Permit")
      })
  }, [])

  return (
    <Wrapper>
      <TitleContainer>
        <img src={Market} />
        <h3>Market Sentiment</h3>
      </TitleContainer>
      <ChartContainer id="d3Linechart">
        <svg ref={d3Chart}></svg>
      </ChartContainer>
      <Description>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
      </Description>
    </Wrapper>
  )
}

export default LineChart

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`

const ChartContainer = styled.div`
  height: 200px;
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
  margin-top: 24px;
  font-weight: 400;
`
