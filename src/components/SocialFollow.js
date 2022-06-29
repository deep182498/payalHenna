import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faYoutube,
   faFacebook,
   faTwitter,
   faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import ReactWhatsapp from 'react-whatsapp';

function SocialFollow() {
   return (
      <div>
         <div className='social-container'>
            <h3>Social Follow</h3>
            <div className=' d-flex align-items-center justify-content-center'>
               <a
                  href='https://www.youtube.com/c/jamesqquick'
                  className='youtube social'>
                  <FontAwesomeIcon icon={faYoutube} size='2x' />
               </a>
               <a
                  href='https://www.facebook.com/learnbuildteach/'
                  className='facebook social'>
                  <FontAwesomeIcon icon={faFacebook} size='2x' />
               </a>
               <a
                  href='https://www.twitter.com/jamesqquick'
                  className='twitter social'>
                  <FontAwesomeIcon icon={faTwitter} size='2x' />
               </a>
               <a
                  href='https://www.instagram.com/payalhennahub/'
                  className='instagram social'>
                  <FontAwesomeIcon icon={faInstagram} size='2x' />
               </a>
               <ReactWhatsapp
                  number='1-226-881-2195'
                  message='Hello'
                  element='img'
                  src='data:image/jpeg;base64,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'
                  height={'45px'}
                  width={'45px'}
               />
            </div>
         </div>
      </div>
   );
}

export default SocialFollow;
