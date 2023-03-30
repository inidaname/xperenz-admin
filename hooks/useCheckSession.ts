import { setCredentials } from '@app/features/auth-slice';
import { getSessionToken } from '@helpers/session-manager';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useCheckSession = () => {
  const dispatch = useDispatch();

  const authToken = useSelector<IAuthSlice>((state) => state.token);

  const setAuthToken = () => {
    const token = getSessionToken();
    if (token) {
      dispatch(setCredentials({token: "weehere"}));
    }
  };

  useEffect(() => {
    setAuthToken();
    // eslint-disable-next-line
  }, []);

  return authToken;
}

export default useCheckSession
