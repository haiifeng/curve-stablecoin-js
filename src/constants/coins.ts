import {CRVUSD_ADDRESS} from './config';
import { lowerCaseValues } from "./utils";

export const COINS = lowerCaseValues({
    'btc': '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    'wbtc': '0x83f62399f2A417db8ad34A4fC54d58240Fc898e9',
    'crvusd': CRVUSD_ADDRESS,
});