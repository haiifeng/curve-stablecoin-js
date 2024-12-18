import axios from 'axios'
import memoize from 'memoizee'
import { crvusd } from './crvusd.js'
import { IExtendedPoolDataFromApi, INetworkName } from './interfaces'
import {CURVE_API_BASE_URL, CURVE_PRICE_API_BASE_URL} from './constants/config.js'

export const _getPoolsFromApi = memoize(
  async (
    network: INetworkName,
    poolType: 'main' | 'crypto' | 'factory' | 'factory-crvusd' | 'factory-crypto',
  ): Promise<IExtendedPoolDataFromApi> => {
    const url = `${CURVE_API_BASE_URL}/api/getPools/${network}/${poolType}`
    const response = await axios.get(url, { validateStatus: () => true })
    return response.data.data ?? { poolData: [], tvl: 0, tvlAll: 0 }
  },
  {
    promise: true,
    maxAge: 5 * 60 * 1000, // 5m
  },
)

export const _getUserCollateral = memoize(
  async (network: INetworkName, controller: string, user: string): Promise<string> => {
    const url = `${CURVE_PRICE_API_BASE_URL}/v1/crvusd/collateral_events/${network}/${controller}/${user}`
    const response = await axios.get(url, { validateStatus: () => true })
    return response.data.total_deposit
  },
  {
    promise: true,
    maxAge: 60 * 1000, // 1m
  },
)


export interface CurrencyInfoFromApi {
  currency: string
  price: string
  address: string
}
export const _getAllPrices = memoize(
  async (network: INetworkName): Promise<CurrencyInfoFromApi[]> => {
    const url = `${CURVE_API_BASE_URL}/v1/getPrice/${network}`
    const response = await axios.get(url, { validateStatus: () => true })
    return response.data?.data?.list ?? []
  },
  {
    promise: true,
    maxAge: 5 * 60 * 1000, // 5m
  },
)