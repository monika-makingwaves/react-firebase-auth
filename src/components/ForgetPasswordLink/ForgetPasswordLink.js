import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../config/routes';

const ForgetPasswordLink = () => {
  return (
    <Link to={routes.PASSWORD_FORGET}>Forgot your password?</Link>
  );
};

export default ForgetPasswordLink;