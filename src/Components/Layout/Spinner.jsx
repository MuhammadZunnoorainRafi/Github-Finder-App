import React from 'react';
import spinner from './Assets/spinnerfinder.gif';

function Spinner() {
  return (
    <div className=" w-auto mt-20">
      <img
        width={180}
        className="text-center mx-auto"
        src={spinner}
        alt="Loading..."
      />
    </div>
  );
}

export default Spinner;
