import Overview from './components/Overview';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: ['run', 'sleep', 'eat'],
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // alert('A name was submitted: ' + this.state.value);
    const task = this.state.value;
    const updatedTasks = [...this.state.tasks, task];
    this.setState({ tasks: updatedTasks });
  }

  render() {
    return (
      <div className='App'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Task:
            <input
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>
        <Overview tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
