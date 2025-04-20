import React from 'react';
import Mobiles from '../Mobiles/Mobiles';
import { useLoaderData } from 'react-router';
import Banner from '../../Components/Banner/Banner';
import Hello from '../Hello/Hello';

const Home = () => {

    const data = useLoaderData();
    // console.log(data);

    return (
        <div>
            <Banner></Banner>
            <Mobiles data={data}></Mobiles>
        </div>
    );
};

export default Home;