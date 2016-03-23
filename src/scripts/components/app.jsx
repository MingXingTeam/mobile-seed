import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'

import PageHead from './pageHead'
import Market from './market'
import WareHouse from './warehouse'
import News from './news'
import PageTab from './pageTab'

class App extends React.Component {
  render () {
    var {} = this.props;

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

const ConnectedApp = connect(mapStateToProps)(App)

export default ConnectedApp



