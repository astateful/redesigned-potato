'use client';

import { useEffect } from 'react';

import { useMedals } from '../../hooks';

const Table = () => {
  const { medals, getMedals } = useMedals();

  useEffect(() => {
    getMedals();
  }, [getMedals]);

  return (
    <table>
      <thead>
        <tr>
          <th>Country</th>
          <th>Gold</th>
          <th>Silver</th>
          <th>Bronze</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {medals.map((medal) => (
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
