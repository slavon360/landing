import React from 'react';
import classes from './HomeSection.css';

const homeSection = (props) => {


          return (
                  <div className={classes.HomeSectionTable}>
                    <div className={classes.HomeSectionTableCell}>
                      <div className={classes.HomeSection}>
                        <h1
                          className={classes.FirstSentence}>
                          {props.item.header}
                        </h1>
                        <h2
                          className={classes.SecondSentence}
                          style={{marginBottom:'4em'}}>{props.item.sentence}</h2>
                        <h2
                          className={classes.ThirdSentence}>
                          {props.item.conclusion}
                        </h2>
                      </div>
                    </div>
                  </div>
                );
}

export default homeSection;
