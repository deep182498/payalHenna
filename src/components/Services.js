import React from 'react';
import Service from './service';

function Services() {
   return (
      <>
         <div className='fluid-container' id='services'>
            <h1>Services</h1>
            <div className='card-group'>
               <Service
                  imgSrc={'...'}
                  serviceName='Party Orders'
                  desc='This is a wider card with supporting text below as a
                     natural lead-in to additional content. This card has even
                     longer content than the first to show that equal height
                     action.'
               />

               <Service
                  imgSrc={'...'}
                  serviceName='Face painting'
                  desc='This is a wider card with supporting text below as a
                     natural lead-in to additional content. This card has even
                     longer content than the first to show that equal height
                     action.'
               />

               <Service
                  imgSrc={'...'}
                  serviceName='Makeup'
                  desc='This is a wider card with supporting text below as a
                     natural lead-in to additional content. This card has even
                     longer content than the first to show that equal height
                     action.'
               />
            </div>
         </div>
      </>
   );
}

export default Services;
