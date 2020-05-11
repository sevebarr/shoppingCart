import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
	state = {
		counters: [ { id: 1, value: 999 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 } ],
		totalCounters: 4 // TO DO how do i get this to justbe the amount of counters?
	};

	// takes all exisitng counters, maps it to c, sets all values to 0, not sure why it returns, then setsState of counters(component state) to counters(function variable)
	handleReset = () => {
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};

	handleIncremenet = (counter) => {
		// copies array into counters variable
		const counters = [ ...this.state.counters ];
		// gets the index of counter (subcomponent) in counters (state) being worked
		const index = counters.indexOf(counter);
		// increment this counter.value in new array by one
		counters[index].value++;
		// set state of the counters in Counters component to counters constant
		this.setState({ counters });
		console.log('increment', counter.value);
	};

	handleDecrement = (counter) => {
		const counters = [ ...this.state.counters ];
		const index = counters.indexOf(counter);
		counters[index].value === 0 ? (counters[index].value = 0) : counters[index].value--;
		this.setState({ counters: counters });
		console.log('decrement');
	};

	handleDelete = (counterId) => {
		// filter state.counters where !== counterId
		const newCounters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({ counters: newCounters });
		console.log(...newCounters, 'delete');
	};

	handleAddCounter = (counter) => {
		const myCounters = [ ...this.state.counters ];
		let newIdx = this.state.totalCounters + 1;
		myCounters.push({ id: newIdx, value: 0 });
		this.setState({ totalCounters: this.state.totalCounters + 1, counters: myCounters });
		console.log(this.state.totalCounters);
	};

	render() {
		return (
			<div>
				<button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">
					Reset Quantity
				</button>
				<button onClick={this.handleAddCounter} className="btn btn-primary btn-sm m-2">
					Add Counter
				</button>
				{/* for each counter, render counter object */}
				{this.state.counters.map((counter) => (
					<Counter
						key={counter.id}
						// key is used internally by react so we won't be able to access it in the Component, that's why id is repeated with an identical value
						counter={counter} // replace indivdual assignments
						//id={counter.id}
						//value={counter.value}
						onDelete={this.handleDelete}
						onIncrement={this.handleIncremenet}
						onDecrement={this.handleDecrement}
						// These are the PROPS that are passed from parent compenent to child component, ie. these will be avaialble in Counter(child) component
						// can also send the following to avoid individually assigning attributes down to component:
						//counter={counter}
					>
						{/* <h2>#{counter.id}</h2> */}
						{/* // Anything between the tags such as childe elements can be passed
            down to the child element ass CHILDERN */}
					</Counter>
				))}
			</div>
		);
	}
}

export default Counters;
