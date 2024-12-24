export const CURVE_API_BASE_URL =
  process.env.NEXT_PUBLIC_BITZAP_NODE_ENV === 'development' ? `https://dev-api.bitzap.ai` : 'https://api.bitzap.ai'
  
export const CURVE_PRICE_API_BASE_URL =
  process.env.NEXT_PUBLIC_BITZAP_NODE_ENV === 'development'
    ? `https://dev-price.bitzap.ai`
    : 'https://price-api.bitzap.ai'

export const CURVE_NETWORK = process.env.NEXT_PUBLIC_BITZAP_NODE_ENV === 'development' ? 'bitlayer_testnet' : 'bitlayer'

export const CURVE_CRVUSD = 'USDB' 