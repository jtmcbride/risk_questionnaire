import React from 'react';

import AgeForm from './age_form.jsx';
import SavingsForm from './savings_form.jsx';
import NameForm from './name_form.jsx';

export default class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			order: null,
			current: 0
		}
		this.components = {
			1: AgeForm,
			2: SavingsForm,
			3: NameForm
		}
	}


	componentDidMount() {
		this.getOrder();
	}


	getOrder() {
		// load order of screen for specific user based on token
		let that = this;
		$.ajax({
			url: "/api/form/?token=" + this.props.token,
			success: (data) => that.setState({order: data}),
			error: (e) => console.log(e)
		});
	}

	incrementCurrent() {
		this.setState({
			current: this.state.current + 1
		})
	}


	decrementCurrent(){
		this.setState({
			current: this.state.current - 1
		})
	}


	render() {
		if (this.state.current > 0) {

			let x = this.components[this.state.current]
			return (
				<div>
					{x()}
					 <button onClick={this.incrementCurrent.bind(this)}>Next</button>
					 <button onClick={this.decrementCurrent.bind(this)}>Back</button>
				</div>
			);
		} else {
			return (
				<div>
					<h2>hello</h2>
					<button onClick={this.incrementCurrent.bind(this)}>Begin</button>
				</div>
			);
		}
	}
}