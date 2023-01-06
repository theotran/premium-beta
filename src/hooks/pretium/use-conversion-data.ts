//Conversion data hook, modularize this!
useEffect(() => {
  const query = {
    aggs: { "0": { avg: { field: "conversion" } } },
    size: 0,
    fields: [{ field: "datetime", format: "date_time" }],
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
  const nftAssetsURL = `https://enigmatic-river-67748.herokuapp.com/https://koat.es.us-east-1.aws.found.io:9243/p-pretium-nft-sixty/_search`
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
      const value = +response.data.aggregations[0].value.toFixed(2)

      setConversionChartData(value)
    })
    .catch(err => console.warn(err))
}, [])
