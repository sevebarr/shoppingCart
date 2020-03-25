import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 999 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncremenet = counter => {
    const counters = [...this.state.counters];
    // copies array into counters variable
    const index = counters.indexOf(counter);
    // checks the index of counter parm in new array and stores in index variable
    //counters[index] = { ...counter };
    //set the matching counter object in the new array to the object parm, I'M NOT SURE WHY THIS IS NEEDED
    counters[index].value++;
    // add one to the replaced object
    this.setState({ counters });
    //sets coutners of this state to new counters array
  };

  handleDecrement = counter => {
    const newDecArray = [...this.state.counters];
    const index = newDecArray.indexOf(counter);
    newDecArray[index].value === 0
      ? (newDecArray[index].value = 0)
      : newDecArray[index].value--;
    this.setState({ counters: newDecArray });
    console.log("decrement");
  };

  handleDelete = counterId => {
    // console.log("Delete has been clicked", counterId);
    const newCounters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: newCounters });
    console.log(...newCounters, "delete");
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
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
            <h2>#{counter.id}</h2>
            {/* // Anything between the tags such as childe elements can be passed
            down to the child element ass CHILDERN */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
