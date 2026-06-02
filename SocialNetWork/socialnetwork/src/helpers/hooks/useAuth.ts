import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HTTP } from '../../config/api';
import type { Account } from '../types';

type ReturnValue = [Account | null, (acc: Account | null) => void];

export const useAuth = (): ReturnValue => {
  const [user, setUser] = useState<Account | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    HTTP.get<{ user: Account }>('/auth/user')
      .then((response) => {
        setUser(response.data.user);
      })
      .catch(() => {
        localStorage.removeItem('authtoken');
        navigate('/');
      });
  }, [navigate]);
  return [user, setUser];
};
