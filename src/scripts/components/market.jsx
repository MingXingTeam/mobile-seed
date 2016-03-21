import React from 'react'
import { connect } from 'react-redux'
import * as MarketSectionActionCreator from '../actions/marketSectionActionCreator'
import _ from 'lodash'

// import BackButtonImg from '../../images/sy-fh.png'

let Market = React.createClass({
	getInitialState() {
	    return {
	    };
	},
	render() {
		let { indexData, plateData, rankData } = this.props;
		console.log("indexData=>"+JSON.stringify(indexData));
		// console.log("plateData=>"+JSON.stringify(plateData));
		// console.log("rankData=>"+JSON.stringify(rankData));

		function handlePlusOrMinus(value, havePlus) {
			if(value > 0 && (typeof havePlus === 'undefined') || havePlus) {
				value = "+"+value + "%";
			} else if(value > 0 && !havePlus) {
				value = value + "%";
			} else if(value < 0) {
				value = "-"+value + "%";
			} 
			return value
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

		indexData = {
			"399001" : {
				"id": "SZIndex",
				"10" : "10300.36",
				"199112" : "1.716",
				"264648" : "173.772",
				"name" : "深证成指",
				"marketid" : "32"
			},
			"399005" : {
				"10" : "6752.34",
				"199112" : "1.811",
				"264648" : "120.100",
				"name" : "中小板指",
				"marketid" : "32"
			},
			"399006" : {
				"id": "OtherIndex",
				"10" : "2216.01",
				"199112" : "1.751",
				"264648" : "38.135",
				"name" : "创业板指",
				"marketid" : "32"
			},
			"399300" : {
				"10" : "3238.50",
				"199112" : "2.098",
				"264648" : "66.537",
				"name" : "沪深300",
				"marketid" : "32"
			},
			"1A0001" : {
				"id": "SHIndex",
				"10" : "3002.36",
				"199112" : "1.598",
				"264648" : "47.210",
				"name" : "上证指数",
				"marketid" : "16"
			}
		}

		plateData = {
			"blocks" : {
				"subcodeCount" : 66
			},
			"items" : [{
					"5" : "881157",
					"55" : "证券",
					"275" : "601901",
					"199112" : "8.746"
				}, {
					"5" : "881156",
					"55" : "保险及其他",
					"275" : "000563",
					"199112" : "4.393"
				}, {
					"5" : "881150",
					"55" : "公交",
					"275" : "600650",
					"199112" : "3.129"
				}, {
					"5" : "881128",
					"55" : "交运设备服务",
					"275" : "601965",
					"199112" : "2.427"
				}, {
					"5" : "881103",
					"55" : "农产品加工",
					"275" : "002548",
					"199112" : "2.352"
				}, {
					"5" : "881154",
					"55" : "园区开发",
					"275" : "600463",
					"199112" : "2.000"
				}
			]
		}

		rankData = [{
				"5" : "002269",
				"10" : "4.90",
				"13" : "33618601.00",
				"55" : "美邦服饰",
				"199112" : "10.112",
				"1968584" : "1.338"
			}, {
				"5" : "300323",
				"10" : "6.99",
				"13" : "33435532.00",
				"55" : "华灿光电",
				"199112" : "10.079",
				"1968584" : "4.953"
			}, {
				"5" : "000981",
				"10" : "9.41",
				"13" : "31437545.00",
				"55" : "银亿股份",
				"199112" : "10.059",
				"1968584" : "1.221"
			}, {
				"5" : "002448",
				"10" : "10.84",
				"13" : "6868435.00",
				"55" : "中原内配",
				"199112" : "10.051",
				"1968584" : "1.498"
			}, {
				"5" : "600080",
				"10" : "11.29",
				"13" : "25886844.00",
				"55" : "金花股份",
				"199112" : "10.039",
				"1968584" : "8.479"
			}, {
				"5" : "600864",
				"10" : "13.05",
				"13" : "25412540.00",
				"55" : "哈投股份",
				"199112" : "10.034",
				"1968584" : "4.651"
			}, {
				"5" : "300131",
				"10" : "10.20",
				"13" : "104894728.00",
				"55" : "英唐智控",
				"199112" : "10.032",
				"1968584" : "39.514"
			}, {
				"5" : "000810",
				"10" : "17.11",
				"13" : "32144129.00",
				"55" : "创维数字",
				"199112" : "10.032",
				"1968584" : "8.193"
			}, {
				"5" : "002488",
				"10" : "19.20",
				"13" : "2100702.00",
				"55" : "金固股份",
				"199112" : "10.029",
				"1968584" : "0.547"
			}, {
				"5" : "300505",
				"10" : "21.62",
				"13" : "14987.00",
				"55" : "川金诺  ",
				"199112" : "10.025",
				"1968584" : ""
			}
		]

		return (
            <div className="market">
                <div className="bk">
                    <ul id="indexInfo">
	                    {
	                    	indexData && Object.keys(indexData).map(function(key, index) {
	                    		let indexObj = indexData[key];
	                    		if( indexObj.name === "深证成指" || 
	                    			indexObj.name === "创业板指" || 
	                    			indexObj.name === "上证指数") {
	                    			return  <li id={ indexObj.id } key={ indexObj.id }>
						                        <div>{indexObj.name}</div>
						                        <div className="newprice bold">
						                        	{indexObj[10]}
						                        </div>
						                        <div className="marginTop">
									                <span className="quotevalue">
									                	{indexObj[264648]}
									                </span>
									                <span className="quotesize">
									                	{indexObj[199112]}
									                </span>
									            </div>
					                        </li>
	                    		}
				        	}.bind(this))
	                	}
                    </ul>
                </div>
                <div className="rise">
                    <div className="rise-title">领涨板块</div>
                    <ul id="plateRank">
	                    {
	                    	plateData && plateData.items && Object.keys(plateData.items).map(function(index) {
	                    		let plateObj = plateData.items[index];
                    			plateObj[199112] = handlePlusOrMinus(plateObj[199112]);
                    			return  <li data-name={ plateObj[55] } data-code={ plateObj[275] } key= { plateObj[275] } >
					                    	<div className="bold">{ plateObj[55] }</div>
					                    	<div className="bold color-red">{ plateObj[199112] }</div>
				                    	</li>
	                    		
	                    	}.bind(this))
	                	}
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
                             {
	                    		rankData && Object.keys(rankData).map(function(index) {
	                    			let rankObj = rankData[index];
	                    			if(rankObj[199112] === 0) {
										rankObj.className = 'color-black';
									} else if(rankObj[199112] > 0) {
										rankObj.className = 'color-red';
									} else if(rankObj[199112] < 0) {
										rankObj.className = 'color-blue';
									}

									rankObj[264648] = handlePlusOrMinus(rankObj[264648]);
									rankObj[199112] = handlePlusOrMinus(rankObj[199112], false);

									console.log("rankObj=>"+JSON.stringify(rankObj));

                                	return  <tr className="market-stock bold" id={rankObj[5]} style={{backgroundColor:(index % 2 === 0?'#ffffff':'#e9e9e9')}}>
				                                <td>
					                                <div>{rankObj[55]}</div>
					                                <div style={{fontWeight:400,fontSize:'1.2rem',color:'#9A9A9A'}}>{rankObj[5]}</div>
				                                </td>
				                                <td className={rankObj.className}>
				                               	 	<div>{rankObj[10]}</div>
				                                </td>
				                                <td className={rankObj.className}>
				                                	<div>{rankObj[264648]}</div>
				                                </td>
				                                <td className={rankObj.className}>
				                                	<div>{rankObj[199112]}</div>
				                                </td>
			                                </tr>
	                            }.bind(this))
		                	}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
			)
	},
	componentWillMount() {
	   // this.props.dispatch(MarketSectionActionCreator.getIndexData());
	   // this.props.dispatch(MarketSectionActionCreator.getPlateData());
	   // this.props.dispatch(MarketSectionActionCreator.getRankData());
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
  	hideOrShow: state._index.hideOrShow
  	// ,
  	// plateData: state._plate.result,
  	// rankData: state._rank.result
  }
}

const ConnectedMarket = connect(mapStateToProps)(Market)

export default ConnectedMarket
