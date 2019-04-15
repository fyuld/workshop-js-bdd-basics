const { names } = require('../assets/names')
const { createPerson } = require('./create-person')

const randomListItem = (list) => list[Math.floor(Math.random() * list.length)]

const randomTxnHash = (txn) => Math.floor(Math.random() * 1000000)
const amountOriginatorBeneficiaryHash = ({ amount, originator, beneficiary }) =>
  `${amount.split('.').join('')}-${originator}-${beneficiary}`

const createTxns = (
  people,
  numTxns,
  hashFunc,
  minAmount = 50,
  maxAmount = 10000
) => {
  const amountDelta = maxAmount - minAmount

  const txns = Array.from({ length: numTxns })
    .map(() => {
      const deltaWithCents = amountDelta * 100
      const amount = Math.random() * deltaWithCents
      return (minAmount + amount / 100).toFixed(2)
    })
    .map((amount) => {
      const originator = randomListItem(people)
      const beneficiary = randomListItem(people)

      return {
        amount,
        originator: originator.bankAccount,
        beneficiary: beneficiary.bankAccount,
      }
    })
    .map((txn) => ({ hash: hashFunc(txn), ...txn }))

  return txns
}

const people = names.map(createPerson)
const txns = createTxns(people, 100, amountOriginatorBeneficiaryHash, 50, 10000)

module.exports = {
  people,
  txns,
}
