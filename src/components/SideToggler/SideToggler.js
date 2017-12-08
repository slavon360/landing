import React from 'react';
import classes from './SideToggler.css';
import ToggleItem from './ToggleItem';

const sideToggler = (props) => {
      const toggleItems = props.navigationItems.map((navItem, index) => {
        return <ToggleItem
                  active={navItem.active}
                  title={navItem.title}
                  navIndex={index}
                  toggle={props.toggleNavigationItem}
                  dimensions={props.dimensions}
                  key={navItem.id}/>
      })

      return (
              <div
                className={classes.SideToggler}
                style={{
                        width:props.dimensions.width+'px',
                        height:props.dimensions.height*props.navigationItems.length+'px',
                      }}>
                      {toggleItems}
              </div>
            )
};

export default sideToggler;
