import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
  }

  addNew() {
    this.setState({
      tasks: this.state.tasks.concat([{ text: "test" }])
    });
  }

  onChange(index, value) {
    this.setState({
      tasks: this.state.tasks.map((v, i) => {
        if (i === index) {
          return { text: value };
        } else {
          return v;
        }
      })
    });
  }

  remove(index) {
    this.setState({
      tasks: this.state.tasks.slice(0, index).concat(this.state.tasks.slice(index+1))
    });
  }

  makeTask(task, index) {
    return (
      <div>
        <input
          type="textarea"
          value={task.text}
          onChange={e => this.onChange(index, e.target.value)}
        />
        <button onClick={e=>this.remove(index)}>x</button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>
        {this.state.tasks.map(this.makeTask.bind(this))}
        </div>
        <button onClick={this.addNew.bind(this)}>add new</button>
      </div>
    );
  }
}

export default Todo;
