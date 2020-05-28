import {escapeRegExp} from 'lodash';

const strToArray = str => [...str];
const prepend = val => arr => [val, ...arr];
const append = val => arr => [...arr, val];
const join = char => arr => arr.join(char);
const toExactRegExpStr = str => (
  str
  |> escapeRegExp
  |> strToArray
  |> append('?')
  |> prepend('^')
  |> join('')
);
const strs = ['foo.bar.js', '2.3.js', '4.5.js'];
const res = strs.map(toExactRegExpStr);

console.log(res);