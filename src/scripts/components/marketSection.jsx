import React from 'react'
import { connect } from 'react-redux'

// import BackButtonImg from '../../images/sy-fh.png'

let MarketSection = React.createClass({
	
	render() {
		// let { isBackAble, isSearchAble } = this.props;
		console.log("debug--[marketSection.props]->"+JSON.stringify(this.props));

		let placeholder = function() {
			return (
				<div className="marginTop">
	                <span className="quotevalue">--</span>
	                <span className="quotesize">--</span>
	            </div>
	        )
		}

		let list = [];
		list.length = 6;
		list = list.map(function () {
		    return  (
	     		<li data-name="--" data-code="--">
                    <div className="bold">--</div>
                    <div className="bold color-red">--</div>
                </li>
            );
		 });
		
		 let list2 = [];
		 // for(let i = 0; i < 10; i++) {
		 // 	let style;
		 // 	if(index %2 == 0) {
		 // 		style = "backgroundColor: #e9e9e9;"
		 // 	} else {
		 // 		style = "backgroundColor: #ffffff;"
		 // 	}
		 // 	list2.push();
		 // }
		 list2 = list2.map(function (value, index) {
		 	let style;
		 	if(index %2 == 0) {
		 		style = "backgroundColor: #e9e9e9;"
		 	} else {
		 		style = "backgroundColor: #ffffff;"
		 	}
		    return  (
	     		<tr className="market-stock bold" id="--" style={{style}}>
                    <td>
                    	<div>--</div>
                    	<div style={{fontWeight:'400',fontSize:'1.2rem',color:'#9A9A9A'}}>--</div>
                    </td>
                    <td className="color-red">
                    	<div>--</div>
                    </td>
                    <td className="color-red">
                    	<div>--</div>
                    </td>
                    <td className="color-red">
                    	<div>--</div>
                    </td>
                </tr>
            );
		 });

		 // console.error(JSON.stringify(list2, null ,4));

		return (
            <div className="market">
                <div className="bk">
                    <ul id="indexInfo">
                        <li id="SHIndex">
	                        <div>上证指数</div>
	                        <div className="newprice bold" >--</div>
	                        {placeholder}
                        </li>
                        <li id="SZIndex">
	                        <div>深证成指</div>
	                        <div className="newprice bold">--</div>
                       		{placeholder}
                        </li>
                        <li id="OtherIndex">
	                        <div className="m-stock-name">创业板指</div>
	                        <div className="newprice bold">--</div>
                       		{placeholder}
                        </li>
                    </ul>
                </div>
                <div className="rise">
                    <div className="rise-title">领涨板块</div>
                     <ul id="plateRank">
                     	{list}
                    </ul>
                </div>
                <div className="ranking">
                    <ul>
                        <li id="increase">
                            <div className="bg-color-w">涨幅榜</div>
                            <div className="menu-arrow"></div>
                        </li>
                        <li id="drop">
                            <div>跌幅榜</div>
                            <div className="menu-arrow"></div>
                        </li>
                        <li id="handrate">
                            <div>换手率</div>
                            <div className="menu-arrow"></div>
                        </li>
                    </ul>
                    <div id="allRank">
                        <table className="table">
                            <tbody>
                                {list2}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
			)
	},
	componentWillMount() {
	   console.log('进入 MarketSection--componentWillMount');
	   // this.props.dispatch(actionCreator.getTime(delay))
	},
	componentDidMount() {
	   console.log('进入 MarketSection--componentDidMount');
	},
	componentWillUpdate(nextProps, nextState) {
	    console.log('进入 MarketSection--componentWillUpdate');
	    // console.log('debug--[nextProps]:'+JSON.stringify(nextProps)+",[nextState]"+JSON.stringify(nextState));
	},
	componentWillUnmount() {
	   console.log('进入 MarketSection--componentWillUnmount');
	},
	componentDidUpdate(prevProps, prevState) {
	    console.log('进入 MarketSection--componentDidUpdate');
	}
});

const mapStateToProps = (state, props) => {
  console.log("debug--[state]->"+JSON.stringify(state)+",[props]->"+JSON.stringify(props));
  return {
  }
}

const ConnectedMarketSection = connect(mapStateToProps)(MarketSection)

export default ConnectedMarketSection
