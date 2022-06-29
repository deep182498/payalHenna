import React from 'react';

function Gallery() {
   return (
      <div>
         <h1>Album</h1>
         <img
            src='../../img/heena4.jpg'
            className='rounded float-start'
            alt='Loading...'
         />
         <img
            src='../../img/heena5.jpg'
            className='rounded float-end'
            alt='Loading...'
         />
         <img
            src='../../img/heena6.jpg'
            className='rounded float-start'
            alt='Loading...'
         />
         <img
            src='../../img/heena7.jpg'
            className='rounded float-start'
            alt='Loading...'
         />
         <img
            src='../../img/heena13.jpg'
            className='rounded float-start'
            alt='Loading...'
         />
         <br />
         {/* <img
            src='../../img/heena9.jpg'
            className='rounded float-start'
            alt='Loading...'
         /> */}
         {/* <img
            src='../../img/heena10.jpg'
            className='rounded float-start'
            alt='Loading...'
         />
         <img
            src='../../img/heena11.jpg'
            className='rounded float-start'
            alt='Loading...'
         />
         <img
            src='../../img/heena12.jpg'
            className='rounded float-start'
            alt='Loading...'
         /> */}
         <br />
      </div>
   );
}

export default Gallery;
