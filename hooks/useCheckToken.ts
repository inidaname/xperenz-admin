import { useAuthUserDataQuery } from '@app/services/user/auth-user-api-slice';
import React, { useCallback } from 'react';

const useCheckToken = () => {
  const userData = useAuthUserDataQuery()
  const tokenStatus = useCallback(() => {
    
  }, [])
  return true
}