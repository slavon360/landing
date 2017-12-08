import React from 'react';
import classes from './Logo.css';
import testLogo from '../../assets/images/logo4.png';

const logo = () => (
  <div className={classes.Logo}>
    <img src={testLogo} alt="logo"/>
  </div>
)

export default logo;
