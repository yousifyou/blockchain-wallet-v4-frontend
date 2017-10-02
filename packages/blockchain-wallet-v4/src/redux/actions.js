import * as common from './common/actions.js'

import * as addresses from './data/Addresses/actions.js'
import * as adverts from './data/Adverts/actions.js'
import * as captcha from './data/Captcha/actions.js'
import * as fee from './data/Fee/actions.js'
import * as latestBlock from './data/LatestBlock/actions.js'
import * as logs from './data/Logs/actions.js'
import * as btcRates from './data/Rates/bitcoin/actions.js'
import * as ethRates from './data/Rates/ether/actions.js'
import * as transactions from './data/Transactions/actions.js'
import * as info from './data/Info/actions.js'
import * as payment from './data/Payment/actions.js'
import * as wallet from './wallet/actions.js'
import * as settings from './settings/actions.js'
import * as walletSync from './walletSync/actions.js'
import * as webSocket from './webSocket/actions.js'

export {
  addresses,
  adverts,
  captcha,
  common,
  fee,
  latestBlock,
  logs,
  btcRates,
  ethRates,
  transactions,
  wallet,
  info,
  payment,
  settings,
  walletSync,
  webSocket
}
