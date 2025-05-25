'use client';

import { useMemo } from 'react';

const spritePositionInImage: Record<string, number> = {
  AUT: 13,
  BLR: 12,
  CAN: 11,
  CHN: 10,
  FRA: 9,
  GER: 8,
  ITA: 7,
  NED: 6,
  NOR: 5,
  RUS: 4,
  SUI: 3,
  SWE: 2,
  USA: 1,
};

const Flag = ({ code }: { code: string }) => {
  const style = useMemo(() => {
    const offset = -221 + 17 * spritePositionInImage[code];
    return {
      width: '28px',
      height: '17px',
      background: `url("/flags.png") 0 ${offset}px`,
    };
  }, [code]);

  return <div style={style} />;
};

export default Flag;
