const {escapeRegExp} = require('lodash')
const S = require('sanctuary')

const strToArray = str => [...str]

const toExactRexExpStr = (
  S.pipe(
    [
      strToArray,
      S.append('?'),
      S.prepend('^'),
      S.joinWith(''),
      escapeRegExp
    ]
  )
)


const strs = ['foo.bar.js', '2.3.js', '4.5.js']
const res = S.map(toExactRexExpStr)(strs)

console.log(res)
