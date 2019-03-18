import React from 'react';

const AddButton = ({ addTask }) => {
    let input = React.createRef();

    const onButtonClick = () => {
        addTask(input.current.value);
        input.current.value = '';
    }

    return (
        <div>
            <button className="ui button" onClick={onButtonClick}>
                Add task
            </button>
            <input ref={input} />
        </div>
    );
}

export default AddButton;