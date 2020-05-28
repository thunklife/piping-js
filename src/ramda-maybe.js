import {escapeRegExp} from 'lodash';
import {traverse, append, prepend, join} from 'ramda';
import {Maybe} from 'ramda-fantasy';

const strToArray = str => [...str];
const toExactRegExpStr = str => (
  Maybe(str)
  .map(escapeRegExp)
  .map(strToArray)
  .map(append('?'))
  .map(prepend('^'))
  .map(join(''))
);
const strs = ['foo.bar.js', '2.3.js', '4.5.js'];
const res = strs.map(toExactRegExpStr);
const resTraverse = traverse(Maybe, toExactRegExpStr, strs);

console.log(res);
console.log(resTraverse);
