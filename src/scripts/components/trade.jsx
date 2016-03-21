import React from 'react'
import { connect } from 'react-redux'

class PageTab extends React.Component {
  render () {

    return (
        <div> 
    	  交易页面
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