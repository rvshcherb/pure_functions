import game from '../game';

test.each([
  { warrior: { name: 'W1', health: 64 }, expected: 'healthy' },
  { warrior: { name: 'W2', health: 32 }, expected: 'wounded' },
  { warrior: { name: 'W3', health: 4 }, expected: 'critical' },
])('Test warrior $warrior.name', ({ warrior, expected }) => {
  const result = game(warrior);
  expect(result).toBe(expected);
});
