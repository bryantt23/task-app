import { Component } from 'react';

class Overview extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    const tasksMap = [...this.props.tasks].map((task, index) => {
      return <p key={index}>{task}</p>;
    });

    return <div>{tasksMap}</div>;
  }
}

export default Overview;
