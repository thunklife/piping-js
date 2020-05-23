const {escapeRegExp} = require('lodash')
const R = require('ramda')
const {Identity} = require('ramda-fantasy')

const strToArray = str => [...str]

const toExactRexExpStr = str => (
  Identity(str)
  .map(strToArray)
  .map(R.append('?'))
  .map(R.prepend('^'))
  .map(R.join(''))
  .map(escapeRegExp)
)

const strs = ['foo.bar.js', '2.3.js', '4.5.js']
const res = R.map(toExactRexExpStr, strs)
const resTraverse = R.traverse(Identity, toExactRexExpStr, strs)

console.log(res)
console.log(resTraverse)
