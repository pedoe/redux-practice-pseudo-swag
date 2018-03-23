import React, { Component } from 'react'
import { UserProfile } from 'molecules'

class AboutPage extends Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<p>About Page</p>	
			<UserProfile/>
		)
	}
}


export default AboutPage
