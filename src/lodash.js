import {pipe, escapeRegExp} from 'lodash/fp';

const strToArray = str => [...str];
const prepend = val => arr => [val, ...arr];
const append = val => arr => [...arr, val];
const join = char => arr => arr.join(char);
const toExactRexExpStr = pipe(
  strToArray,
  append('?'),
  prepend('^'),
  join(''),
  escapeRegExp
);
const strs = ['foo.bar.js', '2.3.js', '4.5.js'];
const res = strs.map(toExactRexExpStr);

console.log(res);
