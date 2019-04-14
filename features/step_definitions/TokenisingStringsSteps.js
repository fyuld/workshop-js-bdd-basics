const { Given, When, Then, Before } = require('cucumber')
const { expect } = require('chai')
const { hashString } = require('../../src/hashing-algorithm')

let localState = null

Before(() => {
  localState = {}
})

Given('one of the strings for tokenisation:', ({ rawTable }) => {
  const samples = rawTable.map(([sample]) => sample).splice(1)
  localState.samples = samples
})

When('we tokenise a string', () => {
  const results = localState.samples.map((sample) => hashString(sample))
  localState.results = results
})

Then('we should receive a number', () => {
  localState.results.forEach((hash) => {
    expect(hash).to.be.a('number')
  })
})

When('we tokenise a string twice and compare results', () => {
  const results = localState.samples.map((sample) => ({
    resultA: hashString(sample),
    resultB: hashString(sample),
  }))

  localState.results = results
})

Then('they sould be the same for given sample', () => {
  localState.results.forEach(({ resultA, resultB }) => {
    expect(resultA).to.equal(resultB)
  })
})

Given('list of two different strings for tokenisation:', ({ rawTable }) => {
  const samples = rawTable.map((row) => row).splice(1)
  localState.samples = samples
})

When('we tokenise them both and compare results', () => {
  const results = localState.samples.map(([sampleA, sampleB]) => ({
    resultA: hashString(sampleA),
    resultB: hashString(sampleB),
  }))

  localState.results = results
})

Then('they should be different', function() {
  localState.results.forEach(({ resultA, resultB }) => {
    expect(resultA).not.to.equal(
      resultA,
      `Expected ${resultA} not to equal ${resultB}`
    )
  })
})
