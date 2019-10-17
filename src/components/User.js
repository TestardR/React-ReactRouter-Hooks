import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { firstname, lastname } = useParams();
  return (
    <div>
      I am the User component: {firstname} {lastname}
    </div>
  );
};

export default User;
