import React, { useState } from 'react';
import { render } from '@testing-library/react';
import './App.css';

const Display = (props) => {
    return (
        <div>
            <p>OUTPUT</p>
            <p>{props.state}</p>
        </div>
    );
}

export default Display;