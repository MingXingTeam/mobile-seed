import React, { Component } from 'react'

class TextDisplay extends Component {

	render() {
		return (
			<div>
				<div>{this.props.text}</div>
				<button onClick={this.props.deleteALetter}>删除一个字符</button>	
			</div>
			)
	}
}

export default TextDisplay