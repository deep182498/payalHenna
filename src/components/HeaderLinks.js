import React from 'react';
import './HeaderLink.css';

function HeaderLinks({ linkName, to }) {
   return (
      <a className='link' href={to}>
         {linkName}
      </a>
   );
}

export default HeaderLinks;
