import React from 'react';
import classes from './NavigationItem.css';

const navigationItem = (props) => (
    <div
      onClick={() => props.toggle(props.navIndex)}
      className={classes.NavigationItem}
      style={{fontWeight:(props.active && props.windowDimensions.width > 767) ? '700' : '100'}}>
      {props.itemTitle}
    </div>
)

export default navigationItem;
