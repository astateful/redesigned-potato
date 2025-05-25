import { MedalEntry, SortingType } from '../types/medals';

const makeSorter = (sortingType: SortingType) => {
  switch (sortingType) {
    case SortingType.Gold: {
      return (a: MedalEntry, b: MedalEntry) => {
        if (a.gold > b.gold) return -1;
        if (a.gold < b.gold) return 1;
        if (a.gold === b.gold) {
          if (a.silver < b.silver) 1;
          if (a.silver > b.silver) return -1;
          return 0;
        }

        return 0;
      };
    }

    case SortingType.Silver: {
      return (a: MedalEntry, b: MedalEntry) => {
        if (a.silver > b.silver) return -1;
        if (a.silver < b.silver) return 1;
        if (a.silver === b.silver) {
          if (a.gold < b.gold) 1;
          if (a.gold > b.gold) return -1;
          return 0;
        }

        return 0;
      };
    }

    case SortingType.Bronze: {
      return (a: MedalEntry, b: MedalEntry) => {
        if (a.bronze > b.bronze) return -1;
        if (a.bronze < b.bronze) return 1;
        if (a.bronze === b.bronze) {
          if (a.gold < b.gold) 1;
          if (a.gold > b.gold) return -1;
          return 0;
        }

        return 0;
      };
    }

    case SortingType.Total: {
      return (a: MedalEntry, b: MedalEntry) => {
        if (a.total > b.total) return -1;
        if (a.total < b.total) return 1;
        if (a.total === b.total) {
          if (a.gold < b.gold) 1;
          if (a.gold > b.gold) return -1;
          return 0;
        }

        return 0;
      };
    }
  }
};

const sort = (data: Array<MedalEntry>, sortingType: SortingType) => {
  const sorter = makeSorter(sortingType);
  return [...data].sort(sorter);
};

export default sort;
