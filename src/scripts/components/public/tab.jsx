import React, {PropTypes} from 'react'
import { findDOMNode } from 'react-dom'
import cx from 'classnames'
import _ from 'lodash'

// Get a universally unique identifier
var uuid = (function () {
	var count = 0;
	return function () {
		return 'react-tabs-' + count++;
	}
})();

function isTabNode(node) {
	return node.nodeName === 'LI' && node.getAttribute('role') === 'tab';
}

module.exports = React.createClass({
	handleClick(e) {
		var node = e.target;
		if (isTabNode(node)) {
			var index = [].slice.call(node.parentNode.children).indexOf(node);
			this.setSelected(index);
		}	
	},
	getInitialState() {
		var tabIds = [],
			panelIds = [];

		// Setup tab/panel ids
		React.Children.forEach(this.props.children[0].props.children, function () {
			tabIds.push(uuid());
			panelIds.push(uuid());
		});

	    return {
	        selectedIndex: this.props.selectedIndex,
			focus: this.props.focus,
			tabIds: tabIds,
			panelIds: panelIds  
	    };
	},
	getTabsCount() {
		return React.Children.count(this.props.children[0].props.children);
	},
	setSelected(index, focus) {
		// Don't do anything if nothing has changed
		if (index === this.state.selectedIndex) return;
		// Check index boundary
		if (index < 0 || index >= this.getTabsCount()) return;

		// Keep reference to last index for event handler
		var last = this.state.selectedIndex;

		// Update selected index
		this.setState({ selectedIndex: index, focus: focus === true });

		// Call change event handler
		if (typeof this.props.onSelect === 'function') {
			this.props.onSelect(index, last);
		}
	},
	render() {
		return (
			<div 
				className={cx(
					this.props.className
				)}
				onClick={this.handleClick}
				>
				{this.getChildren()}
			</div>
		)
	}
})