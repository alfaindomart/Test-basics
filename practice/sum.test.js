import { sum, capitalize, reverseString } from "./sum.js";

test('adds 1 + 2 to not equal 5', () => {
    expect(sum(1, 2)).not.toBe(10)
})

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  
  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  test('First alphabet capitalize', () => {
    expect(capitalize('halo cok')).toBe('Halo cok')
  })

  test('Reverse a string', () => {
    expect(reverseString('halo')).toBe('olah');
    expect(reverseString('halo cok')).toBe('koc olah')
  })