export const CURVE_API_BASE_URL =
  process.env.NEXT_PUBLIC_BITZAP_NODE_ENV === 'development' ? `https://dev-api.bitzap.ai` : 'https://api.bitzap.ai'
  
export const CURVE_PRICE_API_BASE_URL =
  process.env.NEXT_PUBLIC_BITZAP_NODE_ENV === 'development'
    ? `https://dev-price.bitzap.ai`
    : 'https://price-api.bitzap.ai'

export const CURVE_NETWORK = process.env.NEXT_PUBLIC_BITZAP_NODE_ENV === 'development' ? 'bitlayer_testnet' : 'bitlayer'

export const CURVE_CRVUSD = 'USDB' 
export const CRVUSD_ADDRESS = process.env.NODE_ENV === 'development'
  ? '0x318f9BE6F2d7983b716Be744e65C9caA45054A04'
  : '0x318f9BE6F2d7983b716Be744e65C9caA45054A04'

export const CURVE_WBTC_AMM_ADDRESS = '0x14548ee4bf285d697af1cd1d4e09a73420ce5213'
export const CURVE_WBTC_CONTROLLER_ADDRESS = '0xd3b1924bab7a3e7d0b3ba5282eae8f29a938a6f1'
export const CURVE_WBTC_COLLATERAL_ADDRESS = '0x83f62399f2A417db8ad34A4fC54d58240Fc898e9'
export const CURVE_WBTC_MONETARY_POLICY_ADDRESS = '0xcdec6ed322fa0ad13f93cad270ca41aa48fae8f6'
export const CURVE_WBTC_LEVERAGE_ZAP_ADDRESS = '0xe410234F8998d0043198b8D8b2Eb67A70c72ED23'
export const CURVE_WBTC_DELEVERAGE_ZAP_ADDRESS = '0xfd4a39984fef27562d3735bbeca8de31c5b380c3'
export const CURVE_WBTC_HEALTH_CALCULATOR_ADDRESS = '0xA89AcA8A6d9646D6d34c6406218BDd0442b2652e'