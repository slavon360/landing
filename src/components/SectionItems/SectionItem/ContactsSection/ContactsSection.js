import React from 'react';
import classes from './ContactsSection.css';
import IconPhone from '../../../IconPhone/IconPhone';

const contactsSection = (props) => {
          let mobileDevices=false;
          const contacts = props.item.contacts.map(contact => {
            return contact.phones.map((phone, index) => {
              return <li key={index}><a href={"tel:"+phone}><IconPhone index={index}/>{phone}</a></li>
            })
          })
          props.windowDimensions.width<1024 && (mobileDevices=true);
          return (
            <div className={classes.ContactsSectionWrp}>
              <div
                className={classes.ContactImgWrp +
                  ((props.item.active || props.windowDimensions.width<1024) ? ' '+classes.ContactImgWrpActive : '')}>
                <div
                  className={classes.ContactImg}
                  style={{backgroundImage:'url('+(!mobileDevices ? props.item.contactImg : null)+')'}}></div>
              </div>
              <div
                className={classes.ContactsContainer +
                  ((props.item.active || props.windowDimensions.width<1024) ? ' '+classes.ContactsContainerActive : '')}>
                <h2>{props.item.header}</h2>
                <p>{props.item.sentence}</p>
                <h3>{props.item.title}</h3>
                <ul>
                  {contacts}
                </ul>
              </div>
            </div>
          )
};

export default contactsSection;
