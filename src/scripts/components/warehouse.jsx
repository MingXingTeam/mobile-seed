import React from 'react'
import { connect } from 'react-redux'

class WareHouse extends React.Component {
  render () {
    let {hideWareHouse} = this.props;
    var attrs = { };

    if (hideWareHouse) {
        attrs = {
          style: { display:'none' }
        }
    }
    return (
        <div {...attrs} className="warehouse" >
            <div className="bk">
                <ul id="w-indexInfo">
                    <li id="w-SHIndex"><div>上证指数</div><div className="newprice bold">-</div><div><span className="quotevalue">--</span><span className="quotesize">--</span></div></li>
                    <li id="w-SZIndex"><div>深证成指</div><div className="newprice bold">--</div><div><span className="quotevalue">--</span><span className="quotesize">--</span></div></li>
                    <li id="w-OtherIndex" ><div className="stock-name">创业板指</div><div className="newprice bold"></div><div><span className="quotevalue">--</span><span  className="quotesize">--</span></div></li>
                </ul>
            </div>
            <table className="table">
                <tbody>
                    <tr style={{height: '3rem',backgroundColor: '#e2e2e2'}}><td><span>名称</span></td><td><span>现价</span></td><td><span>涨跌幅</span></td><td><span>涨跌额</span></td></tr>
                </tbody>
            </table>
            <div className="stock">
            </div>
            <div className="addStockBtn">添加自选股</div>
        </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    hideWareHouse: state._pageTab.hideWareHouse
  }
}

const ConnectedWareHouse = connect(mapStateToProps)(WareHouse)

export default ConnectedWareHouse