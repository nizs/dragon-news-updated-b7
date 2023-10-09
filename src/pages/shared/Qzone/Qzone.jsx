import React from 'react';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';

const Qzone = () => {
    return (
        <div className='mt-5 bg-danger py-4'>
            <h6 className='fw-bold text-black-60 text-center text-white'>QZone</h6>
            <img className='w-75 mx-auto d-block mb-4' src={qzone1} alt="qzone_image-1" />
            <img className='w-75 mx-auto d-block mb-4' src={qzone2} alt="qzone_image-2" />
            <img className='w-75 mx-auto d-block' src={qzone3} alt="qzone_image-3" />
        </div>
    );
};

export default Qzone;