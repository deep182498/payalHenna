import React from 'react';

function Service({ imgSrc, serviceName, desc }) {
   return (
      <>
         <div className='card'>
            <img src='{imgSrc}' className='card-img-top' alt='...' />
            <div className='card-body'>
               <h5 className='card-title'>{serviceName}</h5>
               <p className='card-text'>{desc}</p>
            </div>
         </div>
      </>
   );
}

export default Service;
