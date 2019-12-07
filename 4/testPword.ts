import * as assert from 'assert'
import {adj, noDec} from './pword'

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




