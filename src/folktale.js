const Maybe = require('data.maybe')
const L = require('core.lambda')
const O = require('core.operators')
const Fantasy = require('folktale/fantasy-land').curried
const _ = require('lodash')

const traverse = L.curry(3, (ctor,f ,src) => {
  const res = Fantasy.map(f, src)
  return ctor(Fantasy.map(({value}) => value, res))
})
const strToArray = str => [...str]
const insert = L.curry(3, (index, val, arr) =>  arr.splice(index, val) && arr)
const join = L.curry(2, (char, arr) => arr.join(char))

const toExactRegExpStr = str => (
  Maybe.of(str)
  .map(strToArray)
  .map(insert(Infinity, '?'))
  .map(insert(0, '^'))
  .map(join(''))
  .map(_.escapeRegExp)
)

const strs = ['foo.bar.js', '2.3.js', '4.5.js']
const res = Fantasy.map(toExactRegExpStr, strs)
const resTraversed = traverse(Maybe.of, toExactRegExpStr, strs)

console.log(res)
console.log(resTraversed)