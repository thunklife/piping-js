import {pipe, map, traverse, append, prepend, joinWith} from 'sanctuary';
import Maybe from 'sanctuary-maybe';
import {escapeRegExp} from 'lodash';

const strToArray = str => [...str];
const toExactRegExpStr = str => (
  pipe(
    [
      map(strToArray),
      map(append('?')),
      map(prepend('^')),
      map(joinWith('')),
      map(escapeRegExp)
    ]
  )
  (Maybe.Just(str))
);
const strs = ['foo.bar.js', '2.3.js', '4.5.js'];
const res = strs.map(toExactRegExpStr);
const resTraverse = traverse(Maybe)(toExactRegExpStr)(strs);

console.log(res);
console.log(resTraverse);