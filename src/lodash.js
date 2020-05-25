import {pipe, escapeRegExp} from 'lodash/fp';

const strToArray = str => [...str];
const insert = index => val => arr => arr.splice(index, index, val) && arr;
const join = char => arr => arr.join(char);
const toExactRexExpStr = pipe(
  strToArray,
  insert(Infinity)('?'),
  insert(0)('^'),
  join(''),
  escapeRegExp
);
const strs = ['foo.bar.js', '2.3.js', '4.5.js'];
const res = strs.map(toExactRexExpStr);

console.log(res);
