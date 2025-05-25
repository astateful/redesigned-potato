'use client';

import { useCallback, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { SortingType } from '../../../types/medals';
import sort from '../../../lib/sort';
import { useMedals } from '../../hooks';

const Table = () => {
  const { medals, getMedals } = useMedals();
  const searchParams = useSearchParams();
  const router = useRouter();

  const sortingType = useMemo<SortingType>(() => {
    if (searchParams.has('sort')) {
      const sort = searchParams.get('sort') as SortingType;
      if (Object.values(SortingType).includes(sort)) return sort;
    }

    return SortingType.Gold;
  }, [searchParams]);

  useEffect(() => {
    getMedals();
  }, [getMedals]);

  const updateSorting = useCallback(
    (sortingType: SortingType) => {
      const sp = new URLSearchParams();
      sp.set('sort', sortingType);
      router.push(`?${sp.toString()}`);
    },
    [router]
  );

  const sortedMedals = useMemo(
    () => sort(medals, sortingType),
    [medals, sortingType]
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Country</th>
          <th onClick={() => updateSorting(SortingType.Gold)}>Gold</th>
          <th onClick={() => updateSorting(SortingType.Silver)}>Silver</th>
          <th onClick={() => updateSorting(SortingType.Bronze)}>Bronze</th>
          <th onClick={() => updateSorting(SortingType.Total)}>Total</th>
        </tr>
      </thead>
      <tbody>
        {sortedMedals.map((medal) => (
          <tr key={medal.code}>
            <td>{medal.code}</td>
            <td>{medal.gold}</td>
            <td>{medal.silver}</td>
            <td>{medal.bronze}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
