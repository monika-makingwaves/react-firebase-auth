import React from 'react';
import ChangePasswordLink from "../../components/ChangePasswordLink/ChangePasswordLink";
import withAuthorization from "../../components/withAuthorization/withAuthorization";

const Home = () => {
  return (
    <div>
      Home page - protected
      <p>Would you like to <ChangePasswordLink /></p>
    </div>
  );
};

export default withAuthorization(Home);