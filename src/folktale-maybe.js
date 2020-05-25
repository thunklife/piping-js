import Maybe from 'data.maybe';
import {curry} from 'core.lambda';
import F from 'folktale/fantasy-land';
import {escapeRegExp} from 'lodash';

const {curried: {map}} = F;
const traverse = curry(3, (ctor,f ,src) => {
  const res = map(f, src);
  return ctor(map(({value}) => value, res));
});
const strToArray = str => [...str];
const insert = curry(3, (index, val, arr) =>  arr.splice(index, val) && arr);
const join = curry(2, (char, arr) => arr.join(char));
const toExactRegExpStr = str => (
  Maybe.of(str)
  .map(strToArray)
  .map(insert(Infinity, '?'))
  .map(insert(0, '^'))
  .map(join(''))
  .map(escapeRegExp)
);
const strs = ['foo.bar.js', '2.3.js', '4.5.js'];
const res = strs.map(toExactRegExpStr);
const resTraversed = traverse(Maybe.of, toExactRegExpStr, strs);

console.log(res)
console.log(resTraversed)