import React, { useEffect, useState } from 'react';
import PhoneCard from '../PhoneCard/PhoneCard';

const Mobiles = ({ data }) => {
  // console.log(data);

  const [displayPhones, setDisplayPhones] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(()=>{
    if(showAll){
      setDisplayPhones(data)
    }
    else{
      setDisplayPhones(data.slice(0, 6))
    }
  },[data, showAll])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6'>
      {
        displayPhones.map(phoneDetails => <PhoneCard key={phoneDetails.id} phoneDetails={phoneDetails}></PhoneCard>)
      }

      <button onClick={()=>{
        setShowAll(!showAll)
        if(showAll) window.scrollTo(0,0)
      }} className="relative inline-block px-4 py-2 font-medium group">
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        <span className="relative text-black group-hover:text-white">{showAll? 'Show less' : 'Show All'}</span>
      </button>

    </div>
  );
};

export default Mobiles;