import React from 'react'
import { connect } from 'react-redux'

import PageHead from './pageHead'
import Market from './market'
import WareHouse from './warehouse'
import News from './news'
import PageTab from './pageTab'

class Index extends React.Component {
  render () {

    return (
      <div>
        <PageHead />
        <div className="index-general">
            <div className="index-content">
            	<Market />
              <WareHouse />
              <News />
            </div>
        </div>
       
        <PageTab />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
  	
    
  }
}

const ConnectedIndex = connect(mapStateToProps)(Index)

export default ConnectedIndex



