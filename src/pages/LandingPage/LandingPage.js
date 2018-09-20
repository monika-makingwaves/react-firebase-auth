import React from 'react';
import SignUpLink from "../../components/SignUpLink/SignUpLink";
import LoginLink from "../../components/LoginLink/LoginLink";

const LandingPage = () => {
  return (
    <div className={'m-5 d-flex flex-column align-items-center'}>
      <SignUpLink />
      <LoginLink />
    </div>
  );
};

export default LandingPage;