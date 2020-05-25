
import {curry, compose} from 'core.lambda';
import {escapeRegExp} from 'lodash';

const strToArray = str => [...str];
const insert = curry(3, (index, val, arr) =>  arr.splice(index, val) && arr);
const join = curry(2, (char, arr) => arr.join(char));
const toExactRegExpStr = compose(
  escapeRegExp,
  join(''),
  insert(0, '^'),
  insert(Infinity, '?'),
  strToArray
);
const strs = ['foo.bar.js', '2.3.js', '4.5.js'];
const res = strs.map(toExactRegExpStr);

console.log(res)