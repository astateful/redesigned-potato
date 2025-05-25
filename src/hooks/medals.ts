'use client';

import { MedalEntry } from '../../types/medals';

import { useCallback, useReducer } from 'react';

type MedalState = {
  data: Array<MedalEntry>;
  count: number;
};

enum MedalActionKind {
  MedalsFetched = 'MEDALS_FETCHED',
}

interface MedalAction {
  type: MedalActionKind;
  data: Array<MedalEntry>;
  count: number;
}

const initialState: MedalState = { data: [], count: 0 };

const reducer = (state: MedalState, action: MedalAction) => {
  switch (action.type) {
    case MedalActionKind.MedalsFetched: {
      return {
        ...state,
        data: [...action.data],
        count: action.count,
      };
    }

    default:
      return state;
  }
};

const useMedals = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getMedals = useCallback(async () => {
    try {
      const response = await fetch('/api/medals');
      const { result } = await response.json();

      const count = result.length;

      dispatch({ type: MedalActionKind.MedalsFetched, data: result, count });
    } catch (err: any) {
      alert(err.message);
    }
  }, []);

  return { getMedals, medals: state.data };
};

export default useMedals;
