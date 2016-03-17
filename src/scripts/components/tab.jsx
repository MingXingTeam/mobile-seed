import React from 'react'
import { connect } from 'react-redux'
import * as actionCreator from '../actions/actionCreator'

class Tab extends React.Component {
  // onTimeButtonClick (delay) {
  // 	this.props.dispatch(actionCreator.getTime(delay))
  // }

  render () {
    
  	// var { frozen, time } = this.props
   //  var attrs = {}
   //  const DELAY = 500 // in ms

   //  if (frozen) {
   //      attrs = {
   //        disabled: true
   //      }
   //  }

    return (
     <div class="index-bottom">
	    <ul>
	        <li id="market" className="select">行情</li>
	        <li id="warehouse">自选</li>
	        <li id="news">资讯</li>
	        <li id="trade">交易</li>
	    </ul>
	 </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log("debug--"+JSON.stringify(state) + '---' + JSON.stringify(props));
  return {
  	
  }
}

const ConnectedIndex = connect(mapStateToProps)(Index)

export default ConnectedIndex