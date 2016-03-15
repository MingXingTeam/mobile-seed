import React, { Component } from 'react'
//必须以./开头
import TextInput from './TextInput'

class App extends Component {
	render() {
		return  (
			<div>
				Hello Worlds 
				<TextInput />
			</div>
			)
	}
}

export default App