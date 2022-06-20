import React from 'react';
const Album = () => {
    return (
        <div className='container' id='album'>
            <h2 className='text-center pt-5 fs-2 fw-bold text-warning'>Album</h2>
            <br />
            <h3 className='text-center pt-5 fs-2 fw-bold text-warning'>Photos of my guided tour!!</h3>
            <div className='row'>
                <div className='col-4'>
                    <div className="row mb-3 mt-5">
                        <img className='img-fluid' src="https://i.ibb.co/zrtrK4j/bd-1.jpg" alt="" />
                    </div>
                    <div className="row mb-3">
                        <img className='img-fluid' src="https://i.ibb.co/gMMc16w/n-2-1.jpg" alt="" />
                    </div>
                    <div className="row mb-3">
                        <img className='img-fluid' src="https://i.ibb.co/CJ67hbm/k-2.jpg" alt="" />
                    </div>
                    <div className="row mb-3">
                        <img className='img-fluid' src="https://i.ibb.co/SNNVRLz/img-10-1.jpg" alt="" />
                    </div>
                    <div className="row mb-3">
                        <img className='img-fluid' src="https://i.ibb.co/P6gjVdB/in2.jpg" alt="" />
                    </div>
                </div>
                <div className='col-4'>
                    <div className="row mb-3 mt-5">
                        <img className='img-fluid' src="https://i.ibb.co/g9FFZv3/img-3-1-1-1.jpg" alt="" />
                    </div>
                    <div className="row mb-3">
                        <img className='img-fluid' src="https://i.ibb.co/R2wHpth/img-4.jpg" alt="" />
                    </div>
                    <div className="row mb-3">
                        <img className='img-fluid' src="https://i.ibb.co/5cW0syw/img-5.jpg" alt="" />
                    </div>
                    <div className="row mb-3">
                        <img className='img-fluid' src="https://i.ibb.co/jVVPyfw/img-12.jpg" alt="" />
                    </div>
                </div>
                <div className='col-4'>
                    <div className="row mb-3 mt-5">
                        <img className='img-fluid' src="https://i.ibb.co/WVdVj36/img-6-1.jpg" alt="" />
                    </div>
                    <div className="row mb-3">
                        <img className='img-fluid' src="https://i.ibb.co/RNYJtwf/img-7.jpg" alt="" />
                    </div>
                    <div className="row mb-3">
                        <img className='img-fluid' src="https://i.ibb.co/C29GTKs/img-8.jpg" alt="" />
                    </div>
                    <div className="row mb-3">
                        <img className='img-fluid' src="https://i.ibb.co/QYvLkPL/img-13.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Album;