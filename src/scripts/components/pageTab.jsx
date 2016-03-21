import React from 'react'
import { connect } from 'react-redux'

import * as MarketSectionActionCreator from '../actions/marketSectionActionCreator'

class PageTab extends React.Component {
  showWarehouse() {
    this.props.dispatch(MarketSectionActionCreator.showWarehouse())
  }

  render() {

    return (
        <div className="index-bottom"> 
    	    <ul>
    	        <li id="market" className="select">行情</li>
    	        <li id="warehouse" onClick={() => this.showWarehouse()}>自选</li>
    	        <li id="news">资讯</li>
    	        <li id="trade">交易</li>
    	    </ul>
        </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
  	
  }
}

const ConnectedPageTab = connect(mapStateToProps)(PageTab)

export default ConnectedPageTab