// Dependencies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyApp extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      lastName: ''
    };

    this.handlefullName = this.handlefullName.bind(this);
  }

  handlefullName = (e) => {
    if (e.target.name === "name"){
      this.setState({
        name: e.target.value
      });
    } else {
      this.setState({
        lastName: e.target.value
      });
    }
  }

  render() {
    return (
      <div>
        <h4>Hello Universe from react!!</h4>
        <div>
          <label>Name:</label>
        <input type='text' onChange={e => this.handlefullName(e)} name="name" />
          <label>Apellido:</label>
        <input type='text' onChange={e => this.handlefullName(e)} name="lastname" />
        </div>
        <div>
          {this.state.name} {this.state.lastName}
        </div>
      </div>
    );
  }

}

ReactDOM.render(<MyApp />, document.getElementById('my-app'));
