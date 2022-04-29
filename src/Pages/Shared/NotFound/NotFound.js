import React from 'react';
import notfound from "./404.jpg";

const NotFound = () => {
    return (
        <div className='m-auto'>
            <img className='mt-0 w-100 h-50' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;