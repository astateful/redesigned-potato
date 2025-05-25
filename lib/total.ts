import { MedalEntry, TotallessMedalEntry } from '../types/medals';

const withTotal = (medals: Array<TotallessMedalEntry>): Array<MedalEntry> =>
  medals.map((medal: TotallessMedalEntry) => ({
    ...medal,
    total: medal.gold + medal.silver + medal.bronze,
  }));

export default withTotal;
