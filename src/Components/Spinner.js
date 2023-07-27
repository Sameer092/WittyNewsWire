import React from 'react';
import loading from './loading.gif';

const Spinner = () => {
    return (
        <div className="text-center ">
            <img className=' bg-light' src={loading} alt="loading" style={{ width: '100px', height: '100px' }} />
        </div>
    );

}

export default Spinner;
