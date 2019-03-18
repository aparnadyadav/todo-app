import React from 'react';
import AddButton from './AddButton';
import TaskList from './TaskList';

class App extends React.Component {
    state = { tasks: [] };

    addTask = (task) => {
        this.setState({ tasks: [...this.state.tasks,task] })
    }

    render() {
        return (
            <div>
                <AddButton addTask={this.addTask} />
                <TaskList tasks={this.state.tasks} />
            </div>
        );
    }
}

export default App;