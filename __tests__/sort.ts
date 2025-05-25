import { describe, expect, test } from '@jest/globals';

import { SortingType } from '../types/medals';

import sort from '../lib/sort';
import withTotal from '../lib/total';

export type TotallessMedalEntry = {
  code: string;
  gold: number;
  silver: number;
  bronze: number;
};

describe('medal count sorter', () => {
  test('sort by gold', () => {
    const data: Array<TotallessMedalEntry> = [
      { code: 'a', gold: 1, silver: 1, bronze: 1 },
      { code: 'b', gold: 5, silver: 1, bronze: 1 },
      { code: 'c', gold: 2, silver: 1, bronze: 1 },
      { code: 'd', gold: 5, silver: 3, bronze: 1 },
    ];

    const sortedData = sort(withTotal(data), SortingType.Gold);

    expect(sortedData[0].code).toBe('d');
    expect(sortedData[1].code).toBe('b');
    expect(sortedData[2].code).toBe('c');
    expect(sortedData[3].code).toBe('a');
  });

  test('sort by silver', () => {
    const data: Array<TotallessMedalEntry> = [
      { code: 'a', gold: 1, silver: 10, bronze: 1 },
      { code: 'b', gold: 6, silver: 5, bronze: 1 },
      { code: 'c', gold: 2, silver: 8, bronze: 1 },
      { code: 'd', gold: 5, silver: 2, bronze: 1 },
      { code: 'e', gold: 4, silver: 8, bronze: 1 },
    ];

    const sortedData = sort(withTotal(data), SortingType.Silver);

    expect(sortedData[0].code).toBe('a');
    expect(sortedData[1].code).toBe('e');
    expect(sortedData[2].code).toBe('c');
    expect(sortedData[3].code).toBe('b');
    expect(sortedData[4].code).toBe('d');
  });

  test('sorting by bronze', () => {
    const data: Array<TotallessMedalEntry> = [
      { code: 'a', gold: 6, silver: 10, bronze: 10 },
      { code: 'b', gold: 5, silver: 5, bronze: 20 },
      { code: 'c', gold: 4, silver: 8, bronze: 15 },
      { code: 'd', gold: 8, silver: 2, bronze: 6 },
      { code: 'e', gold: 3, silver: 8, bronze: 6 },
    ];

    const sortedData = sort(withTotal(data), SortingType.Bronze);

    expect(sortedData[0].code).toBe('b');
    expect(sortedData[1].code).toBe('c');
    expect(sortedData[2].code).toBe('a');
    expect(sortedData[3].code).toBe('d');
    expect(sortedData[4].code).toBe('e');
  });

  test('sorting by total', () => {
    const data: Array<TotallessMedalEntry> = [
      { code: 'a', gold: 5, silver: 5, bronze: 5 },
      { code: 'b', gold: 4, silver: 4, bronze: 7 },
      { code: 'c', gold: 3, silver: 3, bronze: 8 },
      { code: 'd', gold: 2, silver: 7, bronze: 8 },
      { code: 'e', gold: 1, silver: 5, bronze: 5 },
    ];

    const sortedData = sort(withTotal(data), SortingType.Total);

    expect(sortedData[0].code).toBe('d');
    expect(sortedData[1].code).toBe('a');
    expect(sortedData[2].code).toBe('b');
    expect(sortedData[3].code).toBe('c');
    expect(sortedData[4].code).toBe('e');
  });
});
