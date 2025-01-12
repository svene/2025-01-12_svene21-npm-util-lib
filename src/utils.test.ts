import { add, sub } from './utils.js';
import { test, expect } from 'vitest';

test('add', () => {
  expect(add(1, 2)).toBe(3);
});
test('sub', () => {
  expect(sub(1, 2)).toBe(-1);
});
