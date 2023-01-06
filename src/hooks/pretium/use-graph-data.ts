//Graph Data Hook, modularize this!
useEffect(() => {
  const query = {
    sort: [{ datetime: { order: "asc", unmapped_type: "boolean" } }],
    query: {
      bool: {
        should: [
          {
            bool: {
              filter: [
                {
                  range: {
                    datetime: {
                      format: "strict_date_optional_time",
                      gte: "now-30d",
                      lte: "now",
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  }
  const nftAssetsURL = `https://enigmatic-river-67748.herokuapp.com/https://koat.es.us-east-1.aws.found.io:9243/p-pretium-nft-sixty/_search?size=30`
  axios
    .get(nftAssetsURL, {
      auth: {
        username: `${process.env.GATSBY_API_USERNAME}`,
        password: `${process.env.GATSBY_API_PASSWORD}`,
      },
      params: {
        source: JSON.stringify(query),
        source_content_type: "application/json",
      },
    })
    .then(response => {
      let sentimentLineGraphData = []

      response.data?.hits?.hits.forEach(n => {
        if (!n._source.sentiment || n._source.sentiment === null) {
          sentimentLineGraphData.push("0")
        }
        // sentimentLineGraphData.push(Math.ceil(n._source.sentiment * 100))
        sentimentLineGraphData.push(Number(n._source.sentiment).toFixed(4))
      })
      setMarketSentimentLineGraphData(sentimentLineGraphData)

      let _activePublicGraphData = []

      response.data?.hits?.hits.forEach(n => {
        if (!n._source.voices || n._source.voices === null) {
          _activePublicGraphData.push(0)
        }
        _activePublicGraphData.push(Math.ceil(n._source.voices * 100))
      })
      setActivePublicGraphData(_activePublicGraphData)
    })
    .catch(err => console.warn(err))
}, [])
