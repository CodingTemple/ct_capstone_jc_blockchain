/* eslint-disable no-undef */
const Store = artifacts.require('ComicStore')

module.exports = async (deployer) => {
  const [_feeAccount] = await web3.eth.getAccounts()

  const _name = 'ComicStore'
  const _TaxPercent = 10

  await deployer.deploy(
    Store,
    _name,
    _feeAccount,
    _TaxPercent
  )
}
