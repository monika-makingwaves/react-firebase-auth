import React from 'react';
import { Link } from 'react-router-dom';

import * as routs from '../../config/routes';

const Header = () => {
  return (
    <div>
      <ul>
        <li><Link to={routs.LOGIN}>Log in</Link></li>
        <li><Link to={routs.LANDING}>Landing</Link></li>
        <li><Link to={routs.HOME}>Home</Link></li>
        <li><Link to={routs.PROFILE}>Profile</Link></li>
      </ul>
    </div>
  );
};

export default Header;