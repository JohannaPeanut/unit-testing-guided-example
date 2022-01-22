const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  test('should multiply two positive integers correctly', () => {
    const result = multiply(5, 4);
    expect(result).toBe(20);
  });

  test('should return a negative integer when called with a positive and negative integer', () => {
    const result = multiply(-2, 4);
    expect(result).toBe(-8);
  });

  test('should equal 0 multiplying with 0', () => {
    const result = multiply(4.5, 0);
    expect(result).toBe(0);
  });
});
