
import {curry, compose} from 'folktale/core/lambda';
import {escapeRegExp} from 'lodash';

const strToArray = str => [...str];
const prepend = curry(2, (val, arr) => [val, ...arr]);
const append = curry(2, (val, arr) => [...arr, val]);
const join = curry(2, (char, arr) => arr.join(char));
const toExactRegExpStr = compose(escapeRegExp,
                         compose(join(''),
                         compose(append('?'),
                         compose(prepend('^'),
                         strToArray))));
const strs = ['foo.bar.js', '2.3.js', '4.5.js'];
const res = strs.map(toExactRegExpStr);

console.log(res)