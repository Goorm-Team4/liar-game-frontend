import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();

  const code = new URL(window.location.href).searchParams.get('code');
  console.log(code);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 1000);

    return () => clearTimeout(timer); // 타이머 종료
  }, []);

  return <></>;
};

export default Auth;
