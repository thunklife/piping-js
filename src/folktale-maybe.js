import Maybe from 'folktale/maybe';
import {curry} from 'folktale/core/lambda';
import F from 'folktale/fantasy-land';
import {escapeRegExp} from 'lodash';

const {curried: {map}} = F;
const traverse = curry(3, (ctor,f ,src) => {
  const res = map(f, src);
  return ctor(map(({value}) => value, res));
});
const strToArray = str => [...str]
const prepend = curry(2, (val, arr) => [val, ...arr]);
const append = curry(2, (val, arr) => [...arr, val]);
const join = curry(2, (char, arr) => arr.join(char));
const toExactRegExpStr = str => (
  Maybe.of(str)
  .map(escapeRegExp)
  .map(strToArray)
  .map(append('?'))
  .map(prepend('^'))
  .map(join(''))
);
const strs = ['foo.bar.js', '2.3.js', '4.5.js'];
const res = strs.map(toExactRegExpStr);
const resTraversed = traverse(Maybe.of, toExactRegExpStr, strs);

console.log(res)
console.log(resTraversed)