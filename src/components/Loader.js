import React from 'react';

const Loader = (props) => (
  <div className="text-center w-100 my-4">
    <img className="App-logo" src={`${process.env.PUBLIC_URL}/logo192.png`} alt="Loading..." />
  </div>
);

export default Loader;
