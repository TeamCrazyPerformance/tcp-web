import { useEffect, useReducer } from 'react';
import *  as adminApi from '~/apis/Admin';
import { Action, initialState, MemberListReducer } from './reducer';

export default function useGetMembers() {
  const [state, dispatch] = useReducer(MemberListReducer, initialState);

  const fetch = () => {
    dispatch({ type: Action.FETCH_LOADING });
    adminApi.getMembers()
    .then(members => dispatch ( {type: Action.FETCH_SUCCESS, members}))
    .catch(() => dispatch({ type: Action.FETCH_ERROR }));
  };

  useEffect(() => {
    fetch();
  }, []);

  return { state };
}
