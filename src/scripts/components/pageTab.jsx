import React from 'react'
import { connect } from 'react-redux'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import $ from 'jquery'

import * as PageTabActionCreator from '../actions/pageTabActionCreator'

class PageTab extends React.Component {
  showWarehouse() {
    this.props.dispatch(PageTabActionCreator.showWarehouse())
  }
  showMarket() {
    this.props.dispatch(PageTabActionCreator.showMarket())
  }
  showNews() {
    this.props.dispatch(PageTabActionCreator.showNews())
  }

  // addMyOwnClass() {
  //   console.log("nima");
  //   // document.getElementById('market').className = "testClassName";
  //   // console.log($(this).find);
  //   $(require('react-dom').findDOMNode(this)).find("#market").addClass('testClassName');
  //   // $(this.refs.marketref.getDOMNode()).addClass('testClassName');
  // }

  // componentDidUpdate(prevProps, prevState) {
  //        console.log("did moutn"+$(this).find("#market").length);
  // }

  render() {
    let {hideMarket, hideNews, hideWareHouse} = this.props;
    var marketAttrs = {};
    if(typeof hideMarket !== 'undefined' && !hideMarket) {
      marketAttrs = {
        className: 'select'
      }
    } 

    var wareHouseAttrs = {};
    if(typeof hideWareHouse !== 'undefined' && !hideWareHouse) {
      wareHouseAttrs = {
        className: 'select'
      }
    } 

    var newsAttrs = {};
    if(typeof hideNews !== 'undefined' && !hideNews) {
      newsAttrs = {
        className: 'select'
      }
    } 
    return (
        <div className="index-bottom">

    	    <ul>
    	        <li {...marketAttrs} id="market" ref="marketref" onClick={() => this.showMarket()}>行情</li>
    	        <li {...wareHouseAttrs} id="warehouse" onClick={() => this.showWarehouse()}>自选</li>
    	        <li {...newsAttrs} id="news" onClick={() => this.showNews()}>资讯</li>
    	        <li id="trade" onClick={() => this.showTrade()}>交易</li>
    	    </ul>
        </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
  	 hideMarket: state._pageTab.hideMarket,
     hideNews: state._pageTab.hideNews,
     hideWareHouse: state._pageTab.hideWareHouse
  }
}

const ConnectedPageTab = connect(mapStateToProps)(PageTab)

export default ConnectedPageTab