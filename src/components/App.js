import React from 'react';
import AddButton from './AddButton';
import TaskList from './TaskList';

class App extends React.Component {
    state = { tasks: [] };

    addTask = task => {
        this.setState({ tasks: [...this.state.tasks,task] })
    }

    deleteTask = task => {
        this.setState(state => {
            const tasks = this.state.tasks.filter((item) => {
                return item !== task;
            });

            return { tasks };
        });
    }

    render() {
        return (
            <div>
                <AddButton addTask={this.addTask} />
                <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} />
            </div>
        );
    }
}

export default App;