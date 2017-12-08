import React, {Component} from 'react';
import classes from './SectionItem.css';
import HomeSection from './HomeSection/HomeSection';
import ServicesSection from './ServicesSection/ServicesSection';
import ContactsSection from './ContactsSection/ContactsSection';

class SectionItem extends Component {
    componentDidMount(){
      this.props.getSectionsElem(this.sectionItem);
      this.props.index === this.props.itemsNumber-1 && this.props.toggleNavigationItem(0);
      console.log('componentDidMount',this.sectionItem.clientHeight);
    }
    componentDidUpdate(){
      console.log('componentDIdUpdate');
      console.log(this.props.item.active)
    }
        render(){
          let container, background, iPad;
          this.props.item.title === 'Главная' && (container=<HomeSection
                                                              windowDimensions={this.props.windowDimensions}
                                                              item={this.props.item}/>);
          this.props.item.title === 'Услуги' && (container=<ServicesSection
                                                              windowDimensions={this.props.windowDimensions}
                                                              item={this.props.item}/>);
          this.props.item.title === 'Контакты' && (container=<ContactsSection
                                                              windowDimensions={this.props.windowDimensions}
                                                              item={this.props.item}/>);
          background = this.props.srcImg ? <div
                                          className={classes.Background}
                                          style={{backgroundImage:'url('+this.props.srcImg+')'}}></div> : null;
          iPad = this.props.windowDimensions.height === 1024 && this.props.windowDimensions.width === 768;
          return (
              <div
                ref={(section) => {this.sectionItem = section}}
                style={{
                        backgroundImage:(this.props.item.backgrColor ? this.props.item.backgrColor : null),
                        minHeight: iPad ? 'auto' : '100vh'
                      }}
                className={classes.SectionItem}>
                {container}
                {background}
              </div>
            );
        }


}

export default SectionItem;
