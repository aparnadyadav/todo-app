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
                    className="ui labeled icon button"
                    onClick={this.onButtonClick("ALL")}
                >
                    All
                </button>
                <button
                    className="ui labeled icon button"
                    onClick={this.onButtonClick("COMPLETED")}
                >
                    <i className="large check circle outline icon"></i>
                    Done 
                </button>
                <button
                    className="ui labeled icon button"
                    onClick={this.onButtonClick("ACTIVE")}
                >
                    <i className="large red times icon"></i>
                    Not done
                </button>
            </Fragment>
        );
    }
}

export default FilterTodos;