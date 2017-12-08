import React from 'react';
//import Adj from '../../../hoc/AdjComponent/AdjComponent';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => {
    let withoutBackground = false, attachedClasses = [classes.NavigationItemsWrp];
    if (props.sideDrawerOpen && props.windowDimensions.width < 767){
      attachedClasses = [classes.NavigationItemsWrp, classes.NavigationItemsWrpActive];
    }
    const navItems = props.navItems.map((navItem, index) => {
      !navItem.img && navItem.active && (withoutBackground = true);
      return <NavigationItem
                  windowDimensions={props.windowDimensions}
                  key={navItem.id}
                  navIndex={index}
                  itemTitle={navItem.title}
                  active={navItem.active}
                  toggle={props.toggle}/>
    });
    return (
      <div className={attachedClasses.join(' ')}
        style={{ color:(withoutBackground && props.windowDimensions.width > 767) ? '#000' : '#fff' }}>
        {navItems}
      </div>
    )
};

export default navigationItems;
