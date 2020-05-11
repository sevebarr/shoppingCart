import React, { Component } from 'react';
import './counters.css';

class Counter extends Component {
	state = {
		// controlled components don't have their own state
		// // value: this.props.counter.value,
		// props.counter because on parent component counter={counter}
		//  // this is a local state -- no single source of truth
		classes: {},
		buttonClasses: 'btn btn-secondary btn-lg m-2'
	};

	// constructor() {
	//   super();
	//   this.handleIncrement = this.handleIncrement.bind(this);
	// }

	render() {
		// PROPS are the attributes that were passed down from the parent compenent

		return (
			<div>
				{/* {this.props.children} */}
				{/* this will render the CHILD elements within the parent compenent tags */}
				<span className={this.getBadgeClasses()}>
					<h2 className="numberButton">{this.props.counter.value}</h2>
				</span>
				{/* calling methods with brackets - object.method() - will result in context of object */}
				<button
					// onClick={this.handleIncrement}
					onClick={() => this.props.onIncrement(this.props.counter)}
					className={this.state.buttonClasses}
				>
					{/* calling method without brackets automatically results in context of window, must provide context */}
					+
				</button>
				<button onClick={() => this.props.onDecrement(this.props.counter)} className={this.state.buttonClasses}>
					-
				</button>
				<button
        // on click, pass this.props.counter.id to the onDelete method
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="button btn-danger btn-sm m-2"
				>
					DELETE
				</button>
			</div>
		);
	}

	// handleIncrement = () => {
	//   this.setState({ value: this.state.value + 1 });
	// }; REMOVED to refactor to controlled compoenent

	// handleDecrement = () => {
	//   this.state.value !== 0
	//     ? this.setState({ value: this.props.counter.value - 1 })
	//     : this.setState({ value: this.props.counter.value });
	// }; REMOVED to refactor to controlled compoenent

	getBadgeClasses() {
		let classes = 'badge m-2 badge-';
		classes += this.props.counter.value === 0 ? 'warning' : 'primary';
		return classes;
	}
	// formatCount() {
	//   const value = this.props.counter.value;
	//   return value === 0 ? <h2>0</h2> : <h2>{value}</h2>;
	// }
}

export default Counter;
