import React, { Fragment, Component } from 'react';
import TodoItem from './components/ToDoCard/todo';
import nanoid from 'nanoid';

export default class App extends Component {
  state = {
    text: '',
    todoItems: [
      { id: nanoid(), value: 'test', isCompleted: false },
      { id: nanoid(), value: 'test', isCompleted: false },
      { id: nanoid(), value: 'test', isCompleted: false },
    ]
  }

  onChanged = (event) => {
    const text = event.target.value;
    this.setState({ text });
  }

  onDelete = (id) => {
    console.log(id)
    const index = this.state.todoItems.findIndex(p => p.id === id)
    const todoItems = [...this.state.todoItems];
    todoItems.splice(index, 1);
    this.setState({ todoItems });
  }

  onCompleted = (id) => {
    const index = this.state.todoItems.findIndex(p => p.id === id);
    const todoItems = [...this.state.todoItems];
    todoItems[index].isCompleted = !todoItems[index].isCompleted;
    this.setState({ todoItems });
  }

  addTodoItems = () => {
    const newTodo = { id: nanoid(), value: this.state.text, isCompleted: false };
    const todoItems = this.state.todoItems;
    todoItems.push(newTodo);
    this.setState({ todoItems });
  }

  render() {
    return (
      <Fragment>
        <div className="container mt-3 d-flex flex-column align-items-center">
          <div className="border w-50 text-center p-3 border-primary rounded">
            <h1 className="text-center">ToDo List</h1>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Todo task" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={this.onChanged} />
              <div className="input-group-append">
                <button className="btn btn-outline-primary" type="button" id="button-addon2" onClick={this.addTodoItems}>Button</button>
              </div>
            </div>
          </div>
          <div className="list-group">
            {this.state.todoItems.map((item) => {
              return (<TodoItem completed={item.isCompleted} key={item.id} value={item.value} onDelete={() => this.onDelete(item.id)} onCompleted={() => this.onCompleted(item.id)} />)
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}
