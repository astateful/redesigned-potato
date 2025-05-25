export type MedalEntry = {
  code: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
};

export enum SortingType {
  Gold = 'gold',
  Silver = 'silver',
  Bronze = 'bronze',
  Total = 'total',
}

export type TotallessMedalEntry = {
  code: string;
  gold: number;
  silver: number;
  bronze: number;
};
