import React, { useState, Component } from 'react';
import FormRow from './FormRow';
import Display from './Display';

// class Table extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: 'fff'
//         }
//     }

//     updateInput = (value) => {
//         this.setState({
//             value: value
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <FormRow state={this.state.value} changeState={this.updateInput} />
//                 <Display state={this.state.value} />
//             </div>
//         )
//     }
// }

const Table = props => {
    const [state, setState] = useState({
        value: 'Default Value'
    });

    const onChangeHandler = e => {
        setState({
            value: e
        })
    }

    return (
        <div>
            <FormRow state={state.value} setState={onChangeHandler} />
            <Display state={state.value} />
        </div>
    );
}

export default Table