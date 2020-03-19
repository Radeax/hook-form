import React, { useState, Component } from 'react';

class FormRow extends Component {
    constructor(props) {
        super(props);
    }

    onChangeHandler = (event) => {
        this.props.changeState(event.target.value);

    }

    render() {
        return (
            <input value={this.props.state} onChange={e => this.onChangeHandler(e)} />
        )
    }
}

// const FormRow = (props) => {
//     const onChangeHandler = () => {
//         console.log(props.state);

//     }

//     return (
//         <input value={props.state} onChange={onChangeHandler} />
//     )



// }


// const onChangeHandler = event => {
//     setState({
//         ...state,
//         value: event.target.value
//     })
//     console.log(state)
// }

export default FormRow;