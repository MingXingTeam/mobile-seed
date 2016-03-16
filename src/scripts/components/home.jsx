import React from 'react'
import { connect } from 'react-redux'

import * as actionCreator from '../actions/actionCreator'

class Home extends React.Component {
  onTimeButtonClick (delay) {
  	this.props.dispatch(actionCreator.getTime(delay))
  }

  render () {
    
  	var { frozen, time } = this.props
    var attrs = {}
    const DELAY = 500 // in ms

    if (frozen) {
        attrs = {
          disabled: true
        }
    }

    return (
      <div>
        <h1>example</h1>
        <span>
          <b>What time is it?</b> { time ? `It is currently ${time}` : 'No idea yet...' }
        </span>
        <br /> <br />
        <i>
          When clicking the button below, the time will be provided after a {DELAY}ms delay.<br />
          Try to change this value (in <b>src/home.jsx - line 95</b>) to verify that the delay given correctly impacts our UI.
        </i>
        <br />
        {/* We register our button "onClick" handler here: */}
        <button { ...attrs } onClick={() => this.onTimeButtonClick(DELAY)}>Get time!</button>
      </div>
    )
  }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    frozen: state._time.frozen,
    time: state._time.time
  }
}

const ConnectedHome = connect(mapStateToProps)(Home)

export default ConnectedHome



