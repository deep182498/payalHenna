import React from 'react';
import './gallery.css';

function About() {
   return (
      <div className='container album-cont mt-2' id='about'>
         <h1>About Us</h1>
         <div className='row mt-3'>
            <div className='col-6'>
               <h1>
                  <b>Payal Patel</b>
               </h1>
               <p>
                  Payal Patel is a professional henna artist in Canada, offering
                  a vast range of services to people of all religions, castes,
                  communities, and ages. She has been creating designs for over
                  5 years. What started as swirls and patterns on the palms,
                  slowly turned into a passion. Now, she carves out wonderful
                  designs that bring you back to her for more.
               </p>
               <p>
                  Payal patel is a top henna artist in Greater Toronto Area
                  (GTA) and providing services to all over the GTA such as
                  Mississauga, Brampton, Toronto, Scarborough, Hamilton,
                  Oakville, and one of the most sought after names when people
                  start looking for innovative and unique henna patterns.
                  Whether it is traditional or contemporary, Modern, Indian, or
                  Arabic, her designs smoothly conform to the needs of the
                  clients. Specializing in bridal henna, henna for events or
                  parties (corporate events, birthday parties, baby shower,
                  bridal henna, ladies get together, and more), and special
                  appointment henna services, she also offers destination
                  wedding services and portrait henna design services.
               </p>
            </div>

            <div className='col-6'>
               <img
                  src='../../img/payal.jpg'
                  alt='...'
                  height={'400px'}
                  width={'400px'}
               />
            </div>
         </div>
      </div>
   );
}

export default About;
