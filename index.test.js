import { runAnalysis } from './runAnalysis.js';

test('returns correct cap rate string', () => {
  const results = runAnalysis(8, 4950);
  expect(results.capRate).toBe('14.1%');
});

test('calculates correct monthly per-unit cash flow', () => {
  const results = runAnalysis(8, 4950);
  expect(results.monthlyPerUnit).toBe('$51.56');
});
