import React from 'react'
import { connect } from 'react-redux'

import BackButtonImg from '../../images/sy-fh.png'

let PageHead = React.createClass({
	renderBackButton() {
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
  return {
  	isBackAble: state._app.isBackAble,
  	isSearchAble: state._app.isSearchAble
  }
}

const ConnectedPageHead = connect(mapStateToProps)(PageHead)

export default ConnectedPageHead
