import React, { useState, Component } from 'react';


// class FormRow extends Component {
//     constructor(props) {
//         super(props);
//     }

//     onChangeHandler = (event) => {
//         this.props.changeState(event.target.value);
//     }

//     render() {
//         return (
//             <input value={this.props.state} onChange={e => this.onChangeHandler(e)} />
//         )
//     }
// }

const FormRow = (props) => {
    const [state, setState] = useState('');

    const onChangeHandler = e => {
        props.setState(e.target);
    }

    return (
        <div>
            <label htmlFor={props.name}>{props.label}: </label>
            <input name={props.name} value={props.state} onChange={onChangeHandler} />
        </div>
    );
}

export default FormRow;