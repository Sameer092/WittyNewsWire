import React, { Component } from 'react';
import loading from './loading.gif';

export class Spinner extends Component {
    render() {
        return (
             <div className="text-center ">
                <img  className=' bg-light' src={loading} alt="loading" style={{ width: '100px', height: '100px' }} />
             </div> 
        );
    }
}

export default Spinner;
