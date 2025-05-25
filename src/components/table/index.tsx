'use client';

import { useCallback, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Flag from '../flag';
import { SortingType } from '../../../types/medals';
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
    getMedals(sortingType);
  }, [getMedals, sortingType]);

  const updateSorting = useCallback(
    (sortingType: SortingType) => {
      const sp = new URLSearchParams();
      sp.set('sort', sortingType);
      router.push(`?${sp.toString()}`);
    },
    [router]
  );

  return (
    <table style={{ width: '500px' }}>
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
        {medals.map((medal, i) => (
          <tr key={medal.code}>
            <td className="flex flex-row">
              {i} <Flag code={medal.code} /> {medal.code}
            </td>
            <td>{medal.gold}</td>
            <td>{medal.silver}</td>
            <td>{medal.bronze}</td>
            <td>{medal.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
