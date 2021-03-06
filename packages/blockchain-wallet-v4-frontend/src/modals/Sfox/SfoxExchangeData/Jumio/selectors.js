import { lift, path } from 'ramda'
import { selectors } from 'data'

export const getData = state => {
  const accountsR = selectors.core.data.sfox.getAccounts(state)
  const optionsR = selectors.core.walletOptions.getOptions(state)
  const tokenR = path(['sfoxSignup', 'jumioToken'])(state)

  const transform = (accounts, options, token) => {
    return {
      accounts,
      options,
      token
    }
  }
  return lift(transform)(accountsR, optionsR, tokenR)
}
