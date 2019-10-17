import React, { Fragment } from 'react';
import { useLocation, useHistory } from 'react-router';

const About = () => {
  const location = useLocation();
  const history = useHistory();

  function goBackHandle() {
    history.push('user/romain/testard');
  }

  return (
    <Fragment>
      <div>I am the About component</div>
      <div>Location = {location.pathname}</div>
      <button onClick={goBackHandle}>Go Back</button>
    </Fragment>
  );
};

export default About;
