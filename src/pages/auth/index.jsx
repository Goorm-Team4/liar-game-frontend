import { ROUTE } from '@/constants/router';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();

  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('accessToken');
    localStorage.setItem('accessToken', code);

    const timer = setTimeout(() => {
      navigate(ROUTE.main);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <></>;
};

export default Auth;
