let crypto_data=[
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      curr_price: 23747,
      market_cap: 453023083866,
      high24: 23792,
      low24: 22036
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
      curr_price: 1604.72,
      market_cap: 192089951424,
      high24: 1607.27,
      low24: 1519.34
    },
    {
      id: 'tether',
      name: 'Tether',
      image: 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707',
      curr_price: 0.999514,
      market_cap: 65874691837,
      high24: 1.008,
      low24: 0.992344
    },
    {
      id: 'usd-coin',
      name: 'USD Coin',
      image: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389',
      curr_price: 1.001,
      market_cap: 54751777539,
      high24: 1.006,
      low24: 0.993255
    },
    {
      id: 'binancecoin',
      name: 'BNB',
      image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850',
      curr_price: 269.09,
      market_cap: 43870862197,
      high24: 274.52,
      low24: 261.15
    },
    {
      id: 'ripple',
      name: 'XRP',
      image: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731',
      curr_price: 0.375598,
      market_cap: 18046112158,
      high24: 0.380931,
      low24: 0.360095
    },
    {
      id: 'binance-usd',
      name: 'Binance USD',
      image: 'https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766',
      curr_price: 1.001,
      market_cap: 18025859914,
      high24: 1.009,
      low24: 0.992883
    },
    {
      id: 'cardano',
      name: 'Cardano',
      image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860',
      curr_price: 0.528905,
      market_cap: 17833812897,
      high24: 0.545681,
      low24: 0.4905
    },
    {
      id: 'solana',
      name: 'Solana',
      image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422',
      curr_price: 45.41,
      market_cap: 15613734559,
      high24: 47.03,
      low24: 43.96
    },
    {
      id: 'dogecoin',
      name: 'Dogecoin',
      image: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256',
      curr_price: 0.073544,
      market_cap: 9739497685,
      high24: 0.076606,
      low24: 0.067089
    },
    {
      id: 'polkadot',
      name: 'Polkadot',
      image: 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644',
      curr_price: 7.85,
      market_cap: 8885072848,
      high24: 8.07,
      low24: 7.66
    },
    {
      id: 'shiba-inu',
      name: 'Shiba Inu',
      image: 'https://assets.coingecko.com/coins/images/11939/large/shiba.png?1622619446',
      curr_price: 0.0000128,
      market_cap: 7520271863,
      high24: 0.00001301,
      low24: 0.0000118
    },
    {
      id: 'matic-network',
      name: 'Polygon',
      image: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912',
      curr_price: 0.920241,
      market_cap: 7337532547,
      high24: 0.945755,
      low24: 0.897283
    },
    {
      id: 'avalanche-2',
      name: 'Avalanche',
      image: 'https://assets.coingecko.com/coins/images/12559/large/coin-round-red.png?1604021818',
      curr_price: 25.29,
      market_cap: 7164815053,
      high24: 25.9,
      low24: 24.09
    },
    {
      id: 'dai',
      name: 'Dai',
      image: 'https://assets.coingecko.com/coins/images/9956/large/4943.png?1636636734',
      curr_price: 0.998357,
      market_cap: 6830804668,
      high24: 1.004,
      low24: 0.9927
    },
    {
      id: 'staked-ether',
      name: 'Lido Staked Ether',
      image: 'https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546',
      curr_price: 1573.96,
      market_cap: 6683343825,
      high24: 1570.5,
      low24: 1488.61
    },
    {
      id: 'tron',
      name: 'TRON',
      image: 'https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066',
      curr_price: 0.069544,
      market_cap: 6468827252,
      high24: 0.070239,
      low24: 0.068159
    },
    {
      id: 'wrapped-bitcoin',
      name: 'Wrapped Bitcoin',
      image: 'https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1548822744',
      curr_price: 23814,
      market_cap: 5634006522,
      high24: 23792,
      low24: 22035
    },
    {
      id: 'leo-token',
      name: 'LEO Token',
      image: 'https://assets.coingecko.com/coins/images/8418/large/leo-token.png?1558326215',
      curr_price: 5.39,
      market_cap: 5028331579,
      high24: 5.41,
      low24: 5.18
    },
    {
      id: 'litecoin',
      name: 'Litecoin',
      image: 'https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580',
      curr_price: 58.68,
      market_cap: 4137334844,
      high24: 59.09,
      low24: 57.06
    },
    {
      id: 'ftx-token',
      name: 'FTX',
      image: 'https://assets.coingecko.com/coins/images/9026/large/F.png?1609051564',
      curr_price: 29.72,
      market_cap: 4002152324,
      high24: 29.77,
      low24: 28.52
    },
    {
      id: 'okb',
      name: 'OKB',
      image: 'https://assets.coingecko.com/coins/images/4463/large/WeChat_Image_20220118095654.png?1642471050',
      curr_price: 15.06,
      market_cap: 3852684486,
      high24: 15.34,
      low24: 14.48
    },
    {
      id: 'crypto-com-chain',
      name: 'Cronos',
      image: 'https://assets.coingecko.com/coins/images/7310/large/oCw2s3GI_400x400.jpeg?1645172042',
      curr_price: 0.13858,
      market_cap: 3489735340,
      high24: 0.13885,
      low24: 0.131031
    },
    {
      id: 'chainlink',
      name: 'Chainlink',
      image: 'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700',
      curr_price: 7.32,
      market_cap: 3425428343,
      high24: 7.54,
      low24: 7
    },
    {
      id: 'uniswap',
      name: 'Uniswap',
      image: 'https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png?1600306604',
      curr_price: 7.47,
      market_cap: 3401410603,
      high24: 7.63,
      low24: 7.22
    },
    {
      id: 'ethereum-classic',
      name: 'Ethereum Classic',
      image: 'https://assets.coingecko.com/coins/images/453/large/ethereum-classic-logo.png?1547034169',
      curr_price: 24.95,
      market_cap: 3388297418,
      high24: 26.54,
      low24: 24.28
    },
    {
      id: 'near',
      name: 'NEAR Protocol',
      image: 'https://assets.coingecko.com/coins/images/10365/large/near_icon.png?1601359077',
      curr_price: 4.45,
      market_cap: 3293325212,
      high24: 4.64,
      low24: 4.31
    },
    {
      id: 'cosmos',
      name: 'Cosmos Hub',
      image: 'https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960',
      curr_price: 10.23,
      market_cap: 2987051348,
      high24: 10.72,
      low24: 10.08
    },
    {
      id: 'stellar',
      name: 'Stellar',
      image: 'https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157',
      curr_price: 0.118713,
      market_cap: 2973525409,
      high24: 0.120829,
      low24: 0.115719
    },
    {
      id: 'monero',
      name: 'Monero',
      image: 'https://assets.coingecko.com/coins/images/69/large/monero_logo.png?1547033729',
      curr_price: 146.73,
      market_cap: 2655089239,
      high24: 148.41,
      low24: 141.89
    }
  ]