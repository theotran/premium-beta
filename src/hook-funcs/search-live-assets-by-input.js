const SearchLiveAssetsByInput = input => {
  const query = {
    size: 100, // How many results come in By default it will already sort the highest _score to the top.
    query: {
      match: {
        name: {
          query: input, //Example of Search Query
          operator: "and",
        },
      },
    },
  }
  const nftAssetsURL = `https://enigmatic-river-67748.herokuapp.com/https://koat.es.us-east-1.aws.found.io:9243/p-pretium-assets-aggregation/_search?from=0&size=100`
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
}
