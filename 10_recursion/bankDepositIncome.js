/**
 * 银行定期存款利息计算
 *
 */

function bankDepositIncome(account, year, rate) {
  if (year === 0) {
    return account
  }
  return bankDepositIncome(account * (1 + rate), year - 1, rate)
}
