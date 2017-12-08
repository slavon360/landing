import React from 'react';
import classes from './SideDrawerToggle.css';

const sideDrawerToggle = (props) => (
      <div
        className={classes.SideDrawerToggleWrp +
        (props.sideDrawerOpen ? ' ' + classes.SideDrawerToggleWrpActive : '')}
        onClick={props.sideDrawerClick}>
          <div style={{
                        transitionDelay:'0s'
                      }}></div>
          <div style={{
                        transitionDelay:'0.1s'
                      }}></div>
          <div style={{
                        transitionDelay:'0.2s'
                      }}></div>
      </div>
);

export default sideDrawerToggle;
