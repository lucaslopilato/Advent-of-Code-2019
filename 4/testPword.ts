import * as assert from 'assert'
import {adj, noDec} from './pword'
import {numZero, adj2 } from './two'

assert.equal(true, adj(111))
assert.equal(true, adj(11))
assert.equal(true, adj(551))
assert.equal(false, adj(0))
assert.equal(false, adj(0))
assert.equal(false, adj(401))
assert.equal(false, adj(202))

assert.equal(true, noDec(0))
assert.equal(true, noDec(1))
assert.equal(true, noDec(11))
assert.equal(true, noDec(123))
assert.equal(false, noDec(321))
assert.equal(false, noDec(223450))
assert.equal(false, noDec(220))
assert.equal(true, noDec(123789))

assert.equal(0, numZero(0))
assert.equal(1, numZero(1))
assert.equal(1, numZero(8))
assert.equal(2, numZero(11))

assert.equal(true, adj2(111122))
assert.equal(true, adj2(11011))
assert.equal(true, adj2(156788))
assert.equal(true, adj2(771567888))
assert.equal(true, adj2(123442444))
assert.equal(false, adj2(1111))
assert.equal(false, adj2(1631))
assert.equal(false, adj2(99999))
assert.equal(false, adj2(0))
assert.equal(false, adj2(13331))
assert.equal(true, adj2(1001))








