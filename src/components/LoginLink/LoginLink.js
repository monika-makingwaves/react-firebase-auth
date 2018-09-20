import React from 'react';
import {Link} from "react-router-dom";
import * as routes from "../../config/routes";

const LoginLink = () => {
  return (
    <p>
      Do you have an account
      {' '}
      <Link to={routes.LOGIN}>Login</Link>
    </p>
  );
};

export default LoginLink;