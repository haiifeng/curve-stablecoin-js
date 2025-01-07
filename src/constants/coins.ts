import {CRVUSD_ADDRESS, CURVE_WBTC_COLLATERAL_ADDRESS} from './config';
import { lowerCaseValues } from "./utils";

export const COINS = lowerCaseValues({
    'btc': '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    'wbtc': CURVE_WBTC_COLLATERAL_ADDRESS,
    'crvusd': CRVUSD_ADDRESS,
});