import React from 'react';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: ''
    };
    this.enterFirst = this.enterFirst.bind(this);
    this.enterLast = this.enterLast.bind(this);
  }

  enterFirst(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  enterLast(event) {
    this.setState({
      lastName: event.target.value
    });
  }
  
  render() {
    return (
      <div>
        
        <div>
          {this.state.firstName} <br /> 
          First Name: <input name="first" onChange={this.enterFirst} /><br />
          {this.state.lastName} <br /> 
          Last Name: <input name="last" onChange={this.enterLast} />
        </div>
        
        <List />
      
      </div>
    );
  }
}

export default App;