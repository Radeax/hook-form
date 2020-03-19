import React, { useState } from 'react';
import { render } from '@testing-library/react';
import './App.css';

const Display = (props) => {
    return (
        <div>
            <p>{props.name}: {props.state}</p>
        </div>
    );
}

export default Display;