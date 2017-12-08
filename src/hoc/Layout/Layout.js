import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import Adj from '../AdjComponent/AdjComponent';
import SideToggler from '../../components/SideToggler/SideToggler';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SectionItems from '../../components/SectionItems/SectionItems';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import homeImg from '../../assets/images/banner3.jpg';
import repair from '../../assets/images/boiler1.jpg';
import installing from '../../assets/images/installing.jpg';
import details from '../../assets/images/details1.jpg';
import contactImg from '../../assets/images/contactImg.jpg';

class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navigationItems: [
        { title:'Главная',
          active:true,
          id:1,
          img:homeImg,
          header:'У Вас поломка котла или водонагревателя?',
          sentence:'Или может нуждаетесь в его приобретении?',
          conclusion:'Значит Вам к нам!'
        },
        { title:'Услуги',
          active:false,
          id:2,
          sentence:'Мы предоставляем следующие виды услуг:',
          details:[
            { title:'Ремонт',
              info:'Ремонт котлов и водонагревателей',
              moreInfo:`Качественный ремонт газовых котлов и водонагревателей. Наши специалисты выполняют диагностику
               и ремонт котлов, газовых колонок и водонегравателей любой модели и производителя.`,
              img:repair
            },
            { title:'Установка оборудования',
              info:'Установка котлов и водонагревателей',
              moreInfo:`Наш персонал производит установки газовых и электрических котлов, а также водонагревателей и
              насосов.`,
              img:installing
            },
            { title:'Продажа запчастей и комплектующих',
              info:'Огромный выбор запчастей и комплектующих',
              moreInfo:`У нас Вы можете заказать все необходимые детали и запчасти для интересующей Вас модели.
              Звоните, и мы ответим на все интересующие Вас вопросы.`,
              img:details
            },
          ]
        },
        { title:'Контакты',
          active:false,
          id:3,
          header:'Звоните нам прямо сейчас!',
          sentence:`И мы гарантированно проведем качественные работы по обслуживанию, ремонту, и предоставим
          всю необходимую информацию о интересующих Вас товарах.`,
          contactImg:contactImg,
          contacts:[
            { name:'Вадим',
              phones:['067 632 72 00', '056 233 72 79', '056 785 90 86', '068 402 08 21']
            }
          ]
        }
      ],
      sideToggler: {
        width:34,
        height:25
      },
      sideDrawerOpen:false,
      sectionsElem:[],
      windowDimensions:{
        width:0,
        height:0
      }
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

    componentDidMount = () => {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
      this.setState({ windowDimensions: {
                                          width:window.innerWidth,
                                          height: window.innerHeight
                                        }
                    });
    }

    toggleNavigationItemHandler = (index) => {
      let updatedNavItems = [...this.state.navigationItems];
          updatedNavItems.map(navItem => {
                navItem.active=false;
                return navItem;
          })
          updatedNavItems[index].active=true;
          this.setState({navigationItems:updatedNavItems,sideDrawerOpen:false});
          scrollToComponent(this.state.sectionsElem[index],{offset:0,align:'top',duration:600,ease:'linear'})
    }
    sideDrawerClickHandler = () => {
      this.setState({sideDrawerOpen:!this.state.sideDrawerOpen})
    }
    getSectionsElemHandler = (section) => {
      this.state.sectionsElem.push(section);
    }
    closeSideDrawerHandler = () => {
      this.setState({sideDrawerOpen:false});
    }

    render () {

      return (
        <Adj>
          <Toolbar
            navigationItems={this.state.navigationItems}
            toggleNavigationItem={this.toggleNavigationItemHandler}
            sideDrawerOpen={this.state.sideDrawerOpen}
            sideDrawerClick={this.sideDrawerClickHandler}
            windowDimensions={this.state.windowDimensions}
          />
          <SideToggler
            dimensions={this.state.sideToggler}
            toggleNavigationItem={this.toggleNavigationItemHandler}
            navigationItems={this.state.navigationItems}/>
          <SectionItems
            getSectionsElem={this.getSectionsElemHandler}
            navigationItems={this.state.navigationItems}
            windowDimensions={this.state.windowDimensions}
            toggleNavigationItem={this.toggleNavigationItemHandler}/>
          <SideDrawer
            closeSideDrawer={this.closeSideDrawerHandler}
            windowDimensions={this.state.windowDimensions}
            sideDrawerOpen={this.state.sideDrawerOpen}
            toggleNavigationItem={this.toggleNavigationItemHandler}
            navigationItems={this.state.navigationItems}/>
        </Adj>
      )
    }
}

export default Layout;
