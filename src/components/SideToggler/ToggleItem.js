import React from 'react';
import classes from './ToggleItem.css';

const toggleItem = (props) => (
    <div
      data-nav-title={props.title}
      className={classes.ToggleItem + (props.active ? ' '+classes.ActiveToggle : '')}
      style={{height:props.dimensions.height+'px'}}
      onClick={() => props.toggle(props.navIndex)}>
      <div></div>
    </div>
)

export default toggleItem;
