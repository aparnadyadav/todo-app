import React, { Component, Fragment } from 'react';

class FilterTodos extends Component {
    onButtonClick = filter => {
        const { setVisibilityFilter } = this.props;

        return () => setVisibilityFilter(filter);
    }

    render() {
        return (
            <Fragment>
                <button
                    className="ui small button"
                    onClick={this.onButtonClick("ALL")}
                >
                    <i className="tasks icon"></i>
                    All
                </button>
                <button
                    className="ui small button"
                    onClick={this.onButtonClick("COMPLETED")}
                >
                    <i className="green check circle outline icon"></i>
                    Done 
                </button>
                <button
                    className="ui small button"
                    onClick={this.onButtonClick("ACTIVE")}
                >
                    <i className="red times icon"></i>
                    Not done
                </button>
            </Fragment>
        );
    }
}

export default FilterTodos;