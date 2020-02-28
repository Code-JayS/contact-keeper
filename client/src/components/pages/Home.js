import React from 'react';
import Pins from '../pins/Pins';
import PinForm from '../pins/PinForm';
import PinFilter from '../pins/PinFilter';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <PinForm />
      </div>
      <div>
        <PinFilter />
        <Pins />
      </div>
    </div>
  );
};

export default Home;
