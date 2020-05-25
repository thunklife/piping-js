import {escapeRegExp} from 'lodash';
import {pipe, join, append, prepend} from 'ramda';

const strToArray = str => [...str];
const toExactRegExpStr = pipe(
  strToArray,
  append('?'),
  prepend('^'),
  join(''),
  escapeRegExp
);
const strs = ['foo.bar.js', '2.3.js', '4.5.js'];
const res = strs.map(toExactRegExpStr);

console.log(res);