const _ = require('lodash/fp')

const strToArray = str => [...str]
const insert = index => val => arr => arr.splice(index, index, val) && arr
const join = char => arr => arr.join(char)

const toExactRexExpStr = 
   _.pipe(
      strToArray,
      insert(Infinity)('?'),
      insert(0)('^'),
      join(''),
      _.escapeRegExp
  )

const strs = ['foo.bar.js', '2.3.js', '4.5.js']
const res = _.map(toExactRexExpStr)(strs)

console.log(res)
