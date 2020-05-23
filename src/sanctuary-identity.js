const S = require('sanctuary')
const Identity = require('sanctuary-identity')
const {escapeRegExp} = require('lodash')

const strToArray = str => [...str]

const toExactRexExpStr = str => (
  S.pipe(
    [
      S.map(strToArray),
      S.map(S.append('?')),
      S.map(S.prepend('^')),
      S.map(S.joinWith('')),
      S.map(escapeRegExp)
    ]
  )
  (Identity(str))
)


const strs = ['foo.bar.js', '2.3.js', '4.5.js']
const res = S.map(toExactRexExpStr)(strs)
const resTraverse = S.traverse(Identity)(toExactRexExpStr)(strs)

console.log(res)
console.log(resTraverse)