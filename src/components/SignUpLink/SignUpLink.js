import React from 'react';
import * as routes from "../../config/routes";
import {Link} from "react-router-dom";

const SignUpLink = () => {
  return (
    <p>
      Don't have an account?
      {' '}
      <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>
  );
};

export default SignUpLink;