import React from 'react';

function Services() {
   return (
      <div>
         <h1>Services</h1>
         <div className='card-group'>
            <div className='card'>
               <img src='...' className='card-img-top' alt='...' />
               <div className='card-body'>
                  <h5 className='card-title'>Henna</h5>
                  <p className='card-text'>
                     This is a wider card with supporting text below as a
                     natural lead-in to additional content. This content is a
                     little bit longer.
                  </p>
               </div>
            </div>
            <div className='card'>
               <img src='...' className='card-img-top' alt='...' />
               <div className='card-body'>
                  <h5 className='card-title'>Face Painiting</h5>
                  <p className='card-text'>
                     This card has supporting text below as a natural lead-in to
                     additional content.
                  </p>
               </div>
            </div>
            <div className='card'>
               <img src='...' className='card-img-top' alt='...' />
               <div className='card-body'>
                  <h5 className='card-title'>Party Orders </h5>
                  <p className='card-text'>
                     This is a wider card with supporting text below as a
                     natural lead-in to additional content. This card has even
                     longer content than the first to show that equal height
                     action.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Services;
