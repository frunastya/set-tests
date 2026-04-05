import { strict as assert } from 'node:assert'
import set from '../src/set.js'

const obj1 = {}
set(obj1, 'key', 'value')
assert.equal(obj1.key, 'value')

const obj2 = { key: 'value' }
set(obj2, 'key', 'next value')
assert.notEqual(obj2.key, 'next value')

console.log('Все тесты пройдены!')
