import React, { Component } from 'react'
import TextDisplay from './TextDisplay'

class TextInput extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			inputText: 'initial text'
		}
	}

	handleChange(event) {
		console.log(this);
		console.log('change detected');
		console.log(event);
		this.setState({
			inputText: event.target.value
		});
	}

	deleteALetter() {
		this.setState({
			inputText: this.state.inputText.substring(0, this.state.inputText.length - 1)
		})
	}

	render() {
		return (<div>
			<input 
			type="text"
			placeholder="This is the TextInput component :)" 
			value = {this.state.inputText} 
			onChange = {this.handleChange.bind(this)}
			/>
			<TextDisplay text={this.state.inputText} deleteALetter={this.deleteALetter.bind(this)} />
			</div>
			)
	}
}

export default TextInput