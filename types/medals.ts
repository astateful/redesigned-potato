export type MedalEntry = {
  code: string;
  gold: number;
  silver: number;
  bronze: number;
};

export enum SortingType {
  Gold = 'gold',
  Silver = 'silver',
  Bronze = 'bronze',
  Total = 'total',
}
