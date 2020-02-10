import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            taskName: ''
        };
    }

    handleChanges = e => {
        this.setState({
            taskName: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.taskName !== '') {
            this.props.addItemToList(this.state.taskName);
            this.setState({
                taskName: ''
            });
        }
    };

    render(){
        return (
            <form onSubmit = {this.handleSubmit} >
                <input onChange = {this.handleChanges}
                    type='text' name='taskName' value= {this.state.taskName} />
                <button> add </button>
            </form>
        );
    }
}

export default TodoForm