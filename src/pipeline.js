import {escapeRegExp} from 'lodash';

const strToArray = str => [...str];
const insert = index => val => arr => arr.splice(index, index, val) && arr;
const join = char => arr => arr.join(char);
const toExactRegExpStr = str => (
  str
  |> strToArray
  |> insert(Infinity)('?')
  |> insert(0)('^')
  |> join('')
  |> escapeRegExp
);
const strs = ['foo.bar.js', '2.3.js', '4.5.js'];
const res = strs.map(toExactRegExpStr);

console.log(res);