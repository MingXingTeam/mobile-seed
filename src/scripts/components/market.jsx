import React, {PropTypes} from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import cx from 'classnames'
import * as MarketActionCreator from '../actions/marketActionCreator'
import _ from 'lodash'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import { Link } from 'react-router'
import { getMarketCode } from '../utils/global'
import { TransitionMotion, spring } from 'react-motion'

// console.log("market.global=>"+getMarketCode);

// import BackButtonImg from '../../images/sy-fh.png'

let Market = React.createClass({
	getInitialState() {
	    return {
	        selectedIndex: 0
	    };
	},
	handleSelect(index, last) {
		var that = this;
		setTimeout(function() {
			that.setState({
				selectedIndex: index
			});
			that.forceUpdate();
		}, 0)
		
		if(index === 2) {
			this.props.dispatch(MarketActionCreator.getHandRateData());
		}
		// console.log('Selected tab: ' + index + ', Last tab: ' + last);
	},
	render() {
		// 去掉选项卡默认样式
		Tabs.setUseDefaultStyles(false);

		let { indexData, plateData, rankData, hideMarket, handRateData } = this.props;
		// console.log(this.props.increaseSelected)
		// console.log(this.props.handRateSelected)
		// console.log("indexData=>"+JSON.stringify(indexData));
		// console.log("plateData=>"+JSON.stringify(plateData));
		console.log("rankData=>"+JSON.stringify(rankData));
		
		handRateData && console.log("handRateData=>"+JSON.stringify(handRateData))
		
		var attrs = { };
		if (hideMarket) {
	        attrs = {
	          style: { display:'none' }
	        }
	    }

		for(let i in indexData) {
			if(i === "399006") {
				indexData[i].id = "OtherIndex";
			} else if(i === "399001") {
				indexData[i].id = "SZIndex";
			} else if(i === "1A0001") {
				indexData[i].id = "SHIndex";
			}
		}

		return (
            <div {...attrs} className="market">
                <div className="bk">
                    <ul id="indexInfo">
	                    {
	                    	indexData && Object.keys(indexData).map((key, index) => {
	                    		// console.log("TestThis=>"+JSON.stringify(this.props))
	                    		let indexObj = indexData[key];
	                    		if( indexObj.name === "深证成指" || 
	                    			indexObj.name === "创业板指" || 
	                    			indexObj.name === "上证指数") {
	                    			// console.log("makert.indexObj[10]=>"+indexObj[10])
	                    			return  <li id={ indexObj.id } key={ indexObj.id }>
						                       <div>{indexObj.name}</div>
						                        <div className={cx({
						                        	"newprice":true, 
						                        	"bold":true,
						                        	"color-blue": indexObj[10] > 0 ? false: true,
						                        	"color-red": indexObj[10] > 0 ? true: false
						                            })}>
						                        	{indexObj[10]}
						                        </div>
						                        <div className="marginTop">
									                <span className={cx({
							                        	"quotevalue":true, 
							                        	"color-blue": indexObj[264648] > 0 ? false: true,
							                        	"color-red": indexObj[264648] > 0 ? true: false
							                            })}>
									                	{indexObj[264648]}
									                </span>
									                <span className={cx({
							                        	"quotesize":true, 
							                        	"color-blue": indexObj[199112] > 0 ? false: true,
							                        	"color-red": indexObj[199112] > 0 ? true: false
							                            })}>
									                	{indexObj[199112] > 0 ? `+${indexObj[199112]}` : `${indexObj[199112]}`}%
									                </span>
									            </div>
					                        </li>
	                    		}
				        	})
	                	}
                    </ul>
                </div>
                <div className="rise">
                    <div className="rise-title">领涨板块</div>
                    <ul id="plateRank">
	                    {
	                    	plateData && plateData.items && Object.keys(plateData.items).map(function(index) {
	                    		let plateObj = plateData.items[index];
                    			return  <li data-name={ plateObj[55] } data-code={ plateObj[275] } key= { plateObj[5] } >
					                    	<div className="bold">{ plateObj[55] }</div>
					                    	<div className={cx({
					                    		"bold": true,
					                    		"color-red": plateObj[199112] > 0 ? true : false,
					                    		"color-blue": plateObj[199112] > 0 ? false : true,
					                    	})}>{ 
					                    		plateObj[199112] > 0 ? `+${plateObj[199112]}` : `${plateObj[199112]}`
					                    	}%</div>
				                    	</li>
	                    		
	                    	}.bind(this))
	                	}
                    </ul>
                </div>
                <div className="ranking">
                	 <Tabs
				        onSelect={this.handleSelect}
				     >
				     	<TabList>
				          <Tab>
				          	<div className={cx({
                            	"bg-color-w": (this.state.selectedIndex == 0?true:false)
                            })}>涨幅榜</div>
				          	<div className="menu-arrow"></div>
				          </Tab>
				          <Tab>
				          	<div className={cx({
                            	"bg-color-w": (this.state.selectedIndex == 1?true:false)
                            })}>跌幅榜</div>
                            <div className="menu-arrow"></div>
				          </Tab>
				          <Tab>
				          	<div className={cx({
                            	"bg-color-w": (this.state.selectedIndex == 2?true:false)
                            })}>换手率</div>
                            <div className="menu-arrow"></div>
				          </Tab>
        				</TabList>

        				<TabPanel>
				            <div id="allRank">
		                        <table className="table">
		                            <tbody>
		                             {
			                    		rankData && Object.keys(rankData).map(function(index) {
			                    			let rankObj = rankData[index];
											rankObj[264648]="0.59";
											// console.log("market.rankObj[264648]=>"+rankObj[264648]);
		                                	return  <tr key={rankObj[5]} className="market-stock bold" id={rankObj[5]} style={{backgroundColor:(index % 2 === 0?'#ffffff':'#e9e9e9')}}>
							                                <td><Link to={`/kline/${getMarketCode(rankObj[5])}`}>
								                                <div style={{color:'black'}}>{rankObj[55]}</div>
								                                <div style={{fontWeight:400,fontSize:'1.2rem',color:'#9A9A9A'}}>{rankObj[5]}</div>
								                                 </Link>
							                                </td>
							                                <td>
							                               	 	<Link to={`/kline/${getMarketCode(rankObj[5])}`}><div className={cx({
							                               	 		"color-red": rankObj[199112] > 0 ? true : false,
							                               	 		"color-black": rankObj[199112] === 0,
							                               	 		"color-blue": rankObj[199112] > 0 ? false : true
							                               	 	})}>{rankObj[10]}</div> </Link>
							                                </td>
							                                <td>
							                                	<Link to={`/kline/${getMarketCode(rankObj[5])}`}><div  className={cx({
							                               	 		"color-red": rankObj[199112] > 0 ? true : false,
							                               	 		"color-black": rankObj[199112] === 0,
							                               	 		"color-blue": rankObj[199112] > 0 ? false : true
							                               	 	})}>{rankObj[264648] > 0 ? `+${rankObj[264648]}` : `${rankObj[264648]}`}</div> </Link>
							                                </td>
							                                <td>
							                                	<Link to={`/kline/${getMarketCode(rankObj[5])}`}><div  className={cx({
							                               	 		"color-red": rankObj[199112] > 0 ? true : false,
							                               	 		"color-black": rankObj[199112] === 0,
							                               	 		"color-blue": rankObj[199112] > 0 ? false : true
							                               	 	})}>{rankObj[199112] > 0 ? rankObj[199112] : `${rankObj[199112]}`}%</div> </Link>
							                                </td>
						                                </tr>
						                           
			                            }.bind(this))
				                	}
		                            </tbody>
		                        </table>
		                    </div>
				        </TabPanel>
				        <TabPanel>
				            <div id="allRank">
		                        <table className="table">
		                            <tbody>
		                             {
			                    		rankData && Object.keys(rankData).map(function(index) {
			                    			let rankObj = rankData[index];
											rankObj[264648]="0.59";
											// console.log("rankObj=>"+JSON.stringify(rankObj));
		                                	return  <tr key={rankObj[5]} className="market-stock bold" id={rankObj[5]} style={{backgroundColor:(index % 2 === 0?'#ffffff':'#e9e9e9')}}>
							                                <td><Link to={`/kline/${getMarketCode(rankObj[5])}`}>
								                                <div style={{color:'black'}}>{rankObj[55]}</div>
								                                <div style={{fontWeight:400,fontSize:'1.2rem',color:'#9A9A9A'}}>{rankObj[5]}</div>
								                                 </Link>
							                                </td>
							                                <td>
							                               	 	<Link to={`/kline/${getMarketCode(rankObj[5])}`}><div className={cx({
							                               	 		"color-red": rankObj[199112] > 0 ? true : false,
							                               	 		"color-black": rankObj[199112] === 0,
							                               	 		"color-blue": rankObj[199112] > 0 ? false : true
							                               	 	})}>{rankObj[10]}</div> </Link>
							                                </td>
							                                <td>
							                                	<Link to={`/kline/${getMarketCode(rankObj[5])}`}><div  className={cx({
							                               	 		"color-red": rankObj[199112] > 0 ? true : false,
							                               	 		"color-black": rankObj[199112] === 0,
							                               	 		"color-blue": rankObj[199112] > 0 ? false : true
							                               	 	})}>{rankObj[264648] > 0 ? `+${rankObj[264648]}` : `${rankObj[264648]}`}</div> </Link>
							                                </td>
							                                <td>
							                                	<Link to={`/kline/${getMarketCode(rankObj[5])}`}><div  className={cx({
							                               	 		"color-red": rankObj[199112] > 0 ? true : false,
							                               	 		"color-black": rankObj[199112] === 0,
							                               	 		"color-blue": rankObj[199112] > 0 ? false : true
							                               	 	})}>{rankObj[199112] > 0 ? rankObj[199112] : `${rankObj[199112]}`}%</div> </Link>
							                                </td>
						                                </tr>
			                            }.bind(this))
				                	}
		                            </tbody>
		                        </table>
		                    </div>
				        </TabPanel>
				        <TabPanel>
				           <div id="allRank">
		                         <table className="table">
		                            <tbody>
		                             {
			                    		handRateData && Object.keys(handRateData).map(function(index) {
			                    			let rankObj = handRateData[index];
											rankObj[264648]="0.59";
											// console.log("rankObj=>"+JSON.stringify(rankObj));
		                                	return  <tr key={rankObj[5]} className="market-stock bold" id={rankObj[5]} style={{backgroundColor:(index % 2 === 0?'#ffffff':'#e9e9e9')}}>
							                                <td><Link to={`/kline/${getMarketCode(rankObj[5])}`}>
								                                <div style={{color:'black'}}>{rankObj[55]}</div>
								                                <div style={{fontWeight:400,fontSize:'1.2rem',color:'#9A9A9A'}}>{rankObj[5]}</div>
								                                 </Link>
							                                </td>
							                                <td>
							                               	 	<Link to={`/kline/${getMarketCode(rankObj[5])}`}><div className={cx({
							                               	 		"color-red": rankObj[199112] > 0 ? true : false,
							                               	 		"color-black": rankObj[199112] === 0,
							                               	 		"color-blue": rankObj[199112] > 0 ? false : true
							                               	 	})}>{rankObj[10]}</div> </Link>
							                                </td>
							                                <td>
							                                	<Link to={`/kline/${getMarketCode(rankObj[5])}`}><div  className={cx({
							                               	 		"color-red": rankObj[199112] > 0 ? true : false,
							                               	 		"color-black": rankObj[199112] === 0,
							                               	 		"color-blue": rankObj[199112] > 0 ? false : true
							                               	 	})}>{rankObj[264648] > 0 ? `+${rankObj[264648]}` : `${rankObj[264648]}`}</div> </Link>
							                                </td>
							                                <td>
							                                	<Link to={`/kline/${getMarketCode(rankObj[5])}`}><div  className={cx({
							                               	 		"color-red": rankObj[199112] > 0 ? true : false,
							                               	 		"color-black": rankObj[199112] === 0,
							                               	 		"color-blue": rankObj[199112] > 0 ? false : true
							                               	 	})}>{rankObj[199112] > 0 ? rankObj[199112] : `${rankObj[199112]}`}%</div> </Link>
							                                </td>
						                                </tr>
			                            }.bind(this))
				                	}
		                            </tbody>
		                        </table>
		                    </div>
				        </TabPanel>
				     </Tabs>
				     </div>
            </div>
			)
	},
	componentWillMount() {
	   this.props.dispatch(MarketActionCreator.getIndexData());
	   this.props.dispatch(MarketActionCreator.getPlateData());
	   this.props.dispatch(MarketActionCreator.getRankData());
	},
	componentDidMount() {
	},
	componentWillUpdate(nextProps, nextState) {
	},
	componentWillUnmount() {
	},
	componentDidUpdate(prevProps, prevState) {
	}
});

const mapStateToProps = (state, props) => {
  return {
  	indexData: state._index.result,
  	plateData: state._plate.result,
  	rankData: state._rank.result,
  	handRateData: state._rank.handRateResult,

  	hideMarket: state._pageTab.hideMarket
  }
}

const ConnectedMarket = connect(mapStateToProps)(Market)

export default ConnectedMarket
