import React from 'react';
import '../App.css';
import './helppeople.css';

export default function HelpPeople() {
  return (
    <div>
      <div className="mainpage-container">
        <div className="image-container">
          <img src="/m5.png" alt="Home" />
          <img src="/m6.png" alt="Home" />
        </div>
        <div className="text-container">
          <h1>We help people to find homes</h1>
          <h6>Mauris orci donec blandit macenas. Orci lorem purus porttitor massa consectetur. Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue justo. Nibh laoreet volutpat quis velit. Blandit aliquam donec sed morbi congue eget lorem viverra porta id lobortis.</h6>
          <img src="/getintouch.png" alt="Get In Touch" />
        </div>

      </div>
    </div>
  );
}