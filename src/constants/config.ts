export const CURVE_API_BASE_URL =
  process.env.NEXT_PUBLIC_BITZAP_NODE_ENV === 'development' ? `https://dev-api.bitzap.ai` : 'https://api.bitzap.ai'
  
export const CURVE_PRICE_API_BASE_URL =
  process.env.NEXT_PUBLIC_BITZAP_NODE_ENV === 'development'
    ? `https://dev-price.bitzap.ai`
    : 'https://price-api.bitzap.ai'

export const CURVE_NETWORK = process.env.NEXT_PUBLIC_BITZAP_NODE_ENV === 'development' ? 'bitlayer_testnet' : 'bitlayer'

export const CURVE_CRVUSD = 'yUSD' 
export const CRVUSD_ADDRESS = process.env.NODE_ENV === 'development'
  ? '0x318f9be6f2d7983b716be744e65c9caa45054a04'
  : '0x318f9be6f2d7983b716be744e65c9caa45054a04'

export const CURVE_WBTC_AMM_ADDRESS = '0x14548ee4bf285d697af1cd1d4e09a73420ce5213'
export const CURVE_WBTC_CONTROLLER_ADDRESS = '0xd3b1924bab7a3e7d0b3ba5282eae8f29a938a6f1'
export const CURVE_WBTC_COLLATERAL_ADDRESS = '0x83f62399f2A417db8ad34A4fC54d58240Fc898e9'
export const CURVE_WBTC_MONETARY_POLICY_ADDRESS = '0x2ce98381d11513d30163f4aa6aca24817648833c'
export const CURVE_WBTC_LEVERAGE_ZAP_ADDRESS = '0xe410234F8998d0043198b8D8b2Eb67A70c72ED23'
export const CURVE_WBTC_DELEVERAGE_ZAP_ADDRESS = '0xfd4a39984fef27562d3735bbeca8de31c5b380c3'
export const CURVE_WBTC_HEALTH_CALCULATOR_ADDRESS = '0xA89AcA8A6d9646D6d34c6406218BDd0442b2652e'

export const CURVE_USDT_ADDRESS = process.env.NODE_ENV === 'development' 
  ? '0x67d4b8c97cf54539c1e80767201b5571e831342a' 
  : '0xfe9f969faf8ad72a83b761138bf25de87eff9dd2'
export const CURVE_USDC_ADDRESS = process.env.NODE_ENV === 'development' 
  ? '0x40b45d6d774a0cc6eec380ed55528f3c9edb1e2c'
  : '0xf8c374ce88a3be3d374e8888349c7768b607c755'
export const CURVE_PEG_KEEPERS_USDT = '0x27423cdd375a4117970eb4877b957c015bb9ae7c'
export const CURVE_PEG_KEEPERS_USDC = '0x7bbaf36d908cb027f90cff220d1c67d6bfe63e54'


export const CURVE_CONTROlLER_FACTORY_ADDRESS = process.env.NEXT_PUBLIC_BITZAP_NODE_ENV === 'development' 
  ? '0x8ee6a6d6d33fd27ff42a65631c130077bdd073dd'
  : '0x8ee6a6d6d33fd27ff42a65631c130077bdd073dd'
