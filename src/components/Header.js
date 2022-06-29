import React from 'react';
import './Header.css';
import HeaderLinks from './HeaderLinks';

function Header() {
   return (
      <>
         <div className='header'>
            <h1>Heena</h1>
            <HeaderLinks to='#home' linkName='Home' />
            <HeaderLinks to='#gallery' linkName='Gallery' />
            <HeaderLinks to='/#services' linkName='Services' />
            <HeaderLinks to='/' linkName='Pricing' />
            <HeaderLinks to='/#about' linkName='About Us' />
         </div>

         <div className='display-header'>
            <h1>Heena</h1>
         </div>
      </>
   );
}

export default Header;
