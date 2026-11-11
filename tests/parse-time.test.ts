import { describe, expect, it } from 'vitest';
import { parseTime } from '../src/utilities/parseTime';

describe('parseTime', () => {
  it.each([
    ['09.08.2022', '2022-08-09'],
    ['01-10-2021', '2021-10-01'],
    ['2020-07-31', '2020-07-31'],
    ['2019', '2019-01-01'],
  ])('parses %s using the expected date format', (input, expected) => {
    expect(parseTime(input, 'now').from.format('YYYY-MM-DD')).toBe(expected);
  });

  it('rejects invalid dates instead of normalizing them silently', () => {
    expect(() => parseTime('31.02.2020', 'now')).toThrow(RangeError);
  });
});
