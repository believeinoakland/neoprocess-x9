import { test } from 'node:test';
import assert from 'node:assert/strict';
import { greet } from '../src/index.mjs';

test('R1 greet(name) returns Hello, <name>!', () => { assert.equal(greet('Bob'), 'Hello, Bob!'); });
test('R2 greet refuses what is not a non-empty string', () => { for (const x of ['', 1, null, undefined, {}]) assert.throws(() => greet(x), TypeError); });
test('R3 greet is pure', () => { assert.equal(greet('a'), greet('a')); });
