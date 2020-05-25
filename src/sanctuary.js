import {escapeRegExp} from 'lodash';
import {pipe, append, prepend, joinWith} from 'sanctuary';

const strToArray = str => [...str]
const toExactRegExpStr = str => pipe([
  strToArray,
  append('?'),
  prepend('^'),
  joinWith(''),
  escapeRegExp
])(str);
const strs = ['foo.bar.js', '2.3.js', '4.5.js'];
const res = strs.map(toExactRegExpStr);

console.log(res);
