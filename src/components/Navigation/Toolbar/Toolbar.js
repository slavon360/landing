import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggle from '../../SideDrawer/SideDrawerToggle';
import classes from './Toolbar.css';

const toolbar = (props) => (
      <header className={classes.Toolbar}>
        <Logo />
        <div className={classes.DesktopOnly}>
          <NavigationItems
            windowDimensions={props.windowDimensions}
            sideDrawerOpen={props.sideDrawerOpen}
            navItems={props.navigationItems}
            toggle={props.toggleNavigationItem}/>
        </div>
        <SideDrawerToggle
          sideDrawerOpen={props.sideDrawerOpen}
          sideDrawerClick={props.sideDrawerClick}/>
      </header>
);

export default toolbar;
