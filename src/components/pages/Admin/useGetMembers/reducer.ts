export enum Action {
  FETCH_LOADING = 'FETCH_LOADING',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR',
}

type MemberListAction =
  | { type: Action.FETCH_LOADING }
  | {
      type: Action.FETCH_SUCCESS;
      members: string[][];
    }
  | { type: Action.FETCH_ERROR };

interface MemberListState {
  members: string[][];
  loading: boolean;
  error: boolean;
}

export const initialState: MemberListState = {
  members: [],
  loading: false,
  error: false,
};

export function MemberListReducer(
  state: MemberListState,
  action: MemberListAction,
): MemberListState {
  switch (action.type) {
    case Action.FETCH_LOADING: {
      return { ...state, loading: true };
    }
    case Action.FETCH_SUCCESS: {
      const { members } = action;
      return {
        ...state,
        loading: false,
        members,
      };
    }
    case Action.FETCH_ERROR: {
      return { ...state, error: true, loading: false };
    }
    default:
      return state;
  }
}
