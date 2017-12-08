import React from 'react';
import SectionItem from './SectionItem/SectionItem';
import classes from './SectionItems.css';

const sectionItems = (props) => {
    const sectItems = props.navigationItems.map((navItem, index, array) => {
      return <SectionItem
                getSectionsElem={props.getSectionsElem}
                windowDimensions={props.windowDimensions}
                index={index}
                itemsNumber={array.length}
                key={navItem.id}
                srcImg={navItem.img}
                item={navItem}/>
    })

    return (
            <div className={classes.SectionItemsWrp}>
              {sectItems}
            </div>
          )
};

export default sectionItems;
