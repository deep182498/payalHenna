import React from 'react';
import './gallery.css';
function Gallery() {
   return (
      <div className='container album-cont mt-2' id='gallery'>
         <h1>Album</h1>
         <img
            src='../../img/heena4.jpg'
            className='rounded album-img m-3 '
            alt='Loading...'
         />
         <img
            src='../../img/heena5.jpg'
            className='rounded album-img m-3'
            alt='Loading...'
         />
         <img
            src='../../img/heena6.jpg'
            className='rounded album-img m-3'
            alt='Loading...'
         />
         <img
            src='../../img/heena7.jpg'
            className='rounded album-img m-3 '
            alt='Loading...'
         />
         <img
            src='../../img/heena13.jpg'
            className='rounded album-img m-3'
            alt='Loading...'
         />
         <img
            src='../../img/heena9.jpg'
            className='rounded album-img m-3'
            alt='Loading...'
         />
         <img
            src='../../img/heena10.jpg'
            className='rounded album-img m-3'
            alt='Loading...'
         />
         <img
            src='../../img/heena11.jpg'
            className='rounded album-img m-3'
            alt='Loading...'
         />
         <img
            src='../../img/heena12.jpg'
            className='rounded album-img m-3'
            alt='Loading...'
         />
      </div>
   );
}

export default Gallery;
