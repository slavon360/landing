import React from 'react';
import classes from './ServicesSection.css';

const servicesSection = (props) => {
        let mobileDevices = props.windowDimensions.width <= 768;
        const services = props.item.details.map((detail, index, details) => {
          return  <div
                    key={index}
                    className={classes.ServiceContainer +
                      ((props.item.active || props.windowDimensions.width<1024) ? ' '+classes.ServiceContainerActive : '')}
                    style={{
                            width:(!mobileDevices ? (100/details.length-2+'%') : '100%'),
                            height:(!mobileDevices ? '60vh' : '380px'),
                            transitionDelay:index/6+'s'
                          }}>
                          <div
                            className={classes.FrontSide}
                            style={{backgroundImage:'url('+detail.img+')'}}>
                            <div className={classes.InfoWrp}>
                              <div className={classes.ServiceTitle}>{detail.title}</div>
                              <p className={classes.ServiceInfo}>{detail.info}</p>
                            </div>
                          </div>
                          <div
                            style={{backgroundImage:'url('+detail.img+')'}}
                            className={classes.BackSide}>
                              <div className={classes.InfoWrp}>
                                <div className={classes.ServiceTitle}>{detail.title}</div>
                                <p className={classes.ServiceInfo}>{detail.moreInfo}</p>
                              </div>
                          </div>
                  </div>
        })
        return (
          <div className={classes.ServicesSection}>
            <h2 className={classes.Title +
              ((props.item.active || props.windowDimensions.width<1024) ? ' '+classes.TitleActive : '')}>
              {props.item.title}
            </h2>
            <div className={classes.Divider +
              ((props.item.active || props.windowDimensions.width<1024) ? ' '+classes.DividerActive : '')}></div>
            <h3 className={classes.Sentence +
              ((props.item.active || props.windowDimensions.width<1024) ? ' '+classes.SentenceActive : '')}>
              {props.item.sentence}
            </h3>
            <div
              className={classes.ServicesWrp +
                ((props.item.active || props.windowDimensions.width<1024) ? ' '+classes.ServicesWrpActive : '')}>
              {services}
            </div>
          </div>
        )
}

export default servicesSection;
