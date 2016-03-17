import React from 'react'
import { connect } from 'react-redux'

import BackButtonImg from '../../images/sy-fh.png'

let PageHead = React.createClass({
	renderBackButton() {
		console.log("debug--进入 renderBackButton")
		return (
			<div className="back"> 
                <span className="back-button" href="#">
                	<img src={BackButtonImg} />
                </span> 
            </div>
        )
	},
	renderBackButtonWithoutImg() {
		return (
			<div className="back"> 
                <span className="back-button" href="#">
                </span> 
            </div>
			)
	},
	onSearchBtnClick(e) {
		console.log("跳转到搜索页面");
	},
	renderSearchButton() {
		return (
		    <div className="homeSearch" onClick={() => this.onSearchBtnClick()}></div>
		)
	},
	render() {
		let { isBackAble, isSearchAble, goSearchPage } = this.props;
		console.log("debug--[pageHead.props]->"+JSON.stringify(this.props));
		return (
			 <div className="deal-top">
			    {isBackAble ? this.renderBackButton() : this.renderBackButtonWithoutImg()}
                <div className="title">
                	<div id="title" style={{lineHeight: '4rem',fontSize: '150%'}}>行情中心</div>
                </div>
                {isSearchAble ? this.renderSearchButton() : null}
             </div>
			)
	}
});

const mapStateToProps = (state, props) => {
  console.log("debug--[state]->"+JSON.stringify(state)+",[props]->"+JSON.stringify(props));
  return {
  	isBackAble: false,
  	isSearchAble: true,
  	goSearchPage: state._pageHead.goSearchPage
  }
}

const ConnectedPageHead = connect(mapStateToProps)(PageHead)

export default ConnectedPageHead
