import React, { useState } from 'react';
import Buying from '../../Pages/Dashboard/components/Buying';
import Selling from '../../Pages/Dashboard/components/Selling';
import HeaderBar from '../HeadBar';


const Form = () => {
  const [activeTab, setActiveTab] = useState('buying');

  return (
    <>
    <HeaderBar title={"Buying Purpose"}/>
    <div className="max-w-xl mx-auto px-4 py-10">
<div className="flex rounded-full overflow-hidden border border-gray-300 w-fit mb-6">
  <button
    onClick={() => setActiveTab('buying')}
    className={`px-6 py-2 font-semibold transition-colors duration-200 ${
      activeTab === 'buying'
        ? 'bg-primary text-white'
        : 'bg-white text-black'
    } rounded-l-full`}
  >
    Buying
  </button>
  <button
    onClick={() => setActiveTab('selling')}
    className={`px-6 py-2 font-semibold transition-colors duration-200 ${
      activeTab === 'selling'
        ? 'bg-primary text-white'
        : 'bg-white text-black'
    } rounded-r-full`}
  >
    Selling
  </button>
</div>

      <div>{activeTab === 'buying' ? <Buying/> : <Selling/>}</div>
    </div>
    </>
  );
};

export default Form;
