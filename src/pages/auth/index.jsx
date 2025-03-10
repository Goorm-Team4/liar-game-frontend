import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();

  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code)

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("accessToken");
    console.log(code);
    localStorage.setItem("accessToken", code);

    const timer = setTimeout(() => {
      navigate("/");
    }, 1000);

    return () => clearTimeout(timer); // 타이머 종료

  }, []);

  return (
    <></>
  )
};

export default Auth;
