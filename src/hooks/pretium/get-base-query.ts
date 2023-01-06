useEffect(() => {
  const query = {
    query: {
      bool: {
        filter: [
          {
            range: {
              created_date: {
                format: "strict_date_optional_time",
                gte: "now-1d",
                lte: "now+1y",
              },
            },
          },
        ],
      },
    },
  }
  const nftAssetsURL = `https://enigmatic-river-67748.herokuapp.com/https://koat.es.us-east-1.aws.found.io:9243/p-pretium-assets-aggregation/_search?from=0&size=1000&sort=created_date:asc`
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
      setNFTData(response.data?.hits?.hits)
    })
    .catch(err => console.warn(err))
}, [])
