import React from 'react';
import Login from "../../components/Login/Login";
import ForgetPasswordLink from "../../components/ForgetPasswordLink/ForgetPasswordLink";

const LoginPage = () => {
  return (
    <div className={'m-3'}>
      <Login />
      <ForgetPasswordLink />
    </div>
  );
};

export default LoginPage;