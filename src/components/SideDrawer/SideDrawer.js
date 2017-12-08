import React from 'react';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import BackDrop from '../BackDrop/BackDrop';
import Adj from '../../hoc/AdjComponent/AdjComponent';

const sideDrawer = (props) => (
      <Adj>
        <BackDrop
          sideDrawerOpen={props.sideDrawerOpen}
          closeSideDrawer={props.closeSideDrawer}/>
        <NavigationItems
          navItems={props.navigationItems}
          sideDrawerOpen={props.sideDrawerOpen}
          windowDimensions={props.windowDimensions}
          toggle={props.toggleNavigationItem}/>
      </Adj>
)

export default sideDrawer;
