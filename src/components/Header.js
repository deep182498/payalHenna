import React from 'react';
import './Header.css';
import HeaderLinks from './HeaderLinks';

function Header() {
   return (
      <>
         <div className='header'>
            <h1>Heena</h1>
            <HeaderLinks to='/' linkName='Home' />
            <HeaderLinks to='/' linkName='Gallery' />
            <HeaderLinks to='/' linkName='Services' />
            <HeaderLinks to='/' linkName='Pricing' />
            <HeaderLinks to='/' linkName='About Us' />
         </div>
      </>
   );
}

export default Header;
