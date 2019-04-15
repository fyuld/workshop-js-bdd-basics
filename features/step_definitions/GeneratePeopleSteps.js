const { Given, When, Then, Before } = require('cucumber')
const { expect } = require('chai')
const { createPerson } = require('../../src/generators/create-person')

let localState = null

Before(() => {
  localState = {}
})

Given('a list of names:', ({ rawTable }) => {
  localState.names = rawTable.map(([name]) => name).splice(1)
})

When('we create people out of list of names', () => {
  localState.result = localState.names.map(createPerson)
})

Then('we should expect people to match following structure:', (docString) => {
  const expectedValues = JSON.parse(docString)
  expect(localState.result).to.deep.equal(expectedValues)
})
