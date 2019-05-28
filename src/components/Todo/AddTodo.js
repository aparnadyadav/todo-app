import React from 'react';

const AddTodo = () => {
    let input = React.createRef();

    // const onButtonClick = () => {
    //     input.current.value = '';
    // }

    return (
        <div className="ui fluid action input">
            <input ref={input} />
            <button className="ui red button">Add task</button>
        </div>
    );
}

export default AddTodo;