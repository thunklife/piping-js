const {escapeRegExp} = require('lodash')
const R = require('ramda')

const strToArray = str => [...str]

const toExactRexExpStr =  (
  R.pipe(
    strToArray,
    R.append('?'),
    R.prepend('^'),
    R.join(''),
    escapeRegExp
  )
)

const strs = ['foo.bar.js', '2.3.js', '4.5.js']
const res = R.map(toExactRexExpStr, strs)

console.log(res)