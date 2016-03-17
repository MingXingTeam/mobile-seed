import React from 'react'
import { connect } from 'react-redux'
import PageHead from './pageHead'
import MarketSection from './marketSection'

import * as actionCreator from '../actions/actionCreator'

import  '../../styles/all.scss'

class Index extends React.Component {
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
      <div>
        <PageHead />
        <div className="index-general">
            <div className="index-content">
            	<MarketSection />
            </div>
        </div>
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



