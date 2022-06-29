import React from 'react';
import './gallery.css';

function Service({ imgSrc, serviceName, desc }) {
   return (
      <>
         <div className='card'>
            <div className='text-center d-flex justify-content-center'>
               <img src={imgSrc} className=' album-img ' alt='..' />
            </div>
            <div className='card-body'>
               <h5 className='card-title'>{serviceName}</h5>
               <p className='card-text'>{desc}</p>
            </div>
         </div>
      </>
   );
}

export default Service;
