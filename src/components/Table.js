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
        fname: '',
        lname: '',
        email: '',
        pw: '',
        pw2: ''
    });

    const onChangeHandler = e => {
        console.log(e);
        setState({
            ...state,
            [e.name]: e.value
        })
    }

    return (
        <div>
            <h1>Input</h1>
            <FormRow label='First Name' name='fname' state={state.fname} setState={onChangeHandler} />
            <FormRow label='Last Name' name='lname' state={state.lname} setState={onChangeHandler} />
            <FormRow label='Email' name='email' state={state.email} setState={onChangeHandler} />
            <FormRow label='Password' name='pw' state={state.pw} setState={onChangeHandler} />
            <FormRow label='Confirm Password' name='pw2' state={state.pw2} setState={onChangeHandler} />
            <h1>Your Form Data</h1>
            <Display name='First Name' state={state.fname} />
            <Display name='Last Name' state={state.lname} />
            <Display name='Email' state={state.email} />
            <Display name='Password' state={state.pw} />
            <Display name='Confirm Password' state={state.pw2} />
        </div>
    );
}

export default Table