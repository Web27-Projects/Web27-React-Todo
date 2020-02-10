import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const data = [
  {
    task: 'Complete this assignment', 
    id: 1,
    completed: false
  }, 
  {
    task: 'Complete Node.js',
    id: 2,
    completed: false
  }
]
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list : data
    }
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  toggleCompleted(taskId) {
    this.setState({
      list: this.state.list.map(item => {
        if(item.id === taskId) {
          return { ...item, completed: !item.completed};
        }
        return item;
      })
    })
  }

  addItemToList = item => {
    this.setState({
      list: [ ...this.state.list, 
        {
          task: item,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  clearItem = () => {
    this.setState({
      list: this.state.list.filter(item => {
        return !item.completed;
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItemToList = {this.addItemToList} />
        {/* <TodoList /> */}
      </div>
    );
  }
}

export default App;
