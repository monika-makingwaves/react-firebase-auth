import React from 'react';
import {Link} from "react-router-dom";
import * as routes from "../../config/routes";

const ChangePasswordLink = () => {
  return (
    <Link to={routes.PASSWORD_CHANGE}>Change password</Link>
  );
};

export default ChangePasswordLink;
