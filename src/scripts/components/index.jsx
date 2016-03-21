import React from 'react'
import { connect } from 'react-redux'

import PageHead from './pageHead'
import Market from './market'
import WareHouse from './warehouse'
import News from './news'
import PageTab from './pageTab'

class Index extends React.Component {
  render () {
    let {hideMarket,hideWareHouse,hideNews } = this.props;
    var attrs = { };
    console.log(hideMarket+"--"+hideWareHouse+""+hideNews)
    if (hideMarket) {
        attrs = {
          style: "display:none"
        }
    }
    if (hideWareHouse) {
        attrs = {
          style: "display:none"
        }
    }
    if (hideNews) {
        attrs = {
          style: "display:none"
        }
    }

    return (
      <div>
        <PageHead />
        <div className="index-general">
            <div className="index-content">
            	<Market { ...attrs }/>
              <WareHouse { ...attrs }/>
              <News { ...attrs }/>
            </div>
        </div>
       
        <PageTab />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
  	hideMarket: state._index.hideMarket,
    hideWareHouse: state._index.hideWareHouse,
    hideNews: state._index.hideNews,
  }
}

const ConnectedIndex = connect(mapStateToProps)(Index)

export default ConnectedIndex



