import React from 'react';
import img1 from '../../../image/img-1.jpg';
import img2 from '../../../image/img-2.jpg';
import img3 from '../../../image/img-3.jpg';
import img4 from '../../../image/img-4.jpg';
import img5 from '../../../image/img-5.jpg';
import img6 from '../../../image/img-6.jpg';
import img7 from '../../../image/img-7.jpg';
import img8 from '../../../image/img-8.jpg';
import img9 from '../../../image/img-9.jpg';
import img10 from '../../../image/img-10.jpg';
import img11 from '../../../image/img-11.jpg';
import img12 from '../../../image/img-12.jpg';
import img13 from '../../../image/img-13.jpg';
const Album = () => {
    return (
        <div className='container' id='album'>
            <h2 className='text-center pt-5 fs-2 fw-bold text-warning'>Album</h2>
            <br />
            <h3 className='text-center pt-5 fs-2 fw-bold text-warning'>Photos of my guided tour!!</h3>
            <div className='row'>
                <div className='col-4'>
                    <div className="row mb-3 mt-5">
                        <img className='img-fluid' src={img1} alt="" />
                    </div>
                    <div className="row mb-3">
                        <img className='img-fluid' src={img2} alt="" />
                    </div>
                    <div className="row mb-3">
                        <img className='img-fluid' src={img9} alt="" />
                    </div>
                    <div className="row mb-3">
                        <img className='img-fluid' src={img10} alt="" />
                    </div>
                    <div className="row mb-3">
                        <img className='img-fluid' src={img11} alt="" />
                    </div>
                </div>
                <div className='col-4'>
                    <div className="row mb-3 mt-5">
                        <img className='img-fluid' src={img3} alt="" />
                    </div>
                    <div className="row mb-3">
                        <img className='img-fluid' src={img4} alt="" />
                    </div>
                    <div className="row mb-3">
                        <img className='img-fluid' src={img5} alt="" />
                    </div>
                    <div className="row mb-3">
                        <img className='img-fluid' src={img12} alt="" />
                    </div>
                </div>
                <div className='col-4'>
                    <div className="row mb-3 mt-5">
                        <img className='img-fluid' src={img6} alt="" />
                    </div>
                    <div className="row mb-3">
                        <img className='img-fluid' src={img7} alt="" />
                    </div>
                    <div className="row mb-3">
                        <img className='img-fluid' src={img8} alt="" />
                    </div>
                    <div className="row mb-3">
                        <img className='img-fluid' src={img13} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Album;