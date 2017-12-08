import React from 'react';
import classes from './BackDrop.css';

const backDrop = (props) => (
  props.sideDrawerOpen ? <div
                            className={classes.Backdrop}
                            onClick={props.closeSideDrawer}></div> : null
);

export default backDrop;
