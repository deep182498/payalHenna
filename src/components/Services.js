import React from 'react';
import Service from './service';

function Services() {
   return (
      <>
         <div className='fluid-container mt-2 p-3' id='services'>
            <h1>Services</h1>
            <div className='card-group'>
               <Service
                  imgSrc={'../../img/bridalhenna.jpg'}
                  serviceName='Bridal Henna'
                  desc='This is a wider card with supporting text below as a
                     natural lead-in to additional content. This card has even
                     longer content than the first to show that equal height
                     action.'
               />
               <Service
                  imgSrc={'../../img/facepainting.jpg'}
                  serviceName='Face painting'
                  desc='This is a wider card with supporting text below as a
                     natural lead-in to additional content. This card has even
                     longer content than the first to show that equal height
                     action.'
               />

               <Service
                  imgSrc={'../../img/babyshower.jpg'}
                  serviceName='Baby Shower'
                  desc='This is a wider card with supporting text below as a
                     natural lead-in to additional content. This card has even
                     longer content than the first to show that equal height
                     action.'
               />
               <Service
                  imgSrc={'../../img/makeup.jpg'}
                  serviceName='Make Up'
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
