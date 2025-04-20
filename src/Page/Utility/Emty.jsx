import React from 'react';
import { Link } from "react-router";
import Button from '../Ui/Button';

const Emty = () => {
    return (
        <div className='text-center'>
            <div>
                <h1 className='text-6xl'>NO Data Found!</h1>
                <h3 className='my-4'>Browse, Search Phones. Add to Cart, Favorites.</h3>
            </div>
            <Link to='/'>
            <Button label='Browse Phones'></Button>
            </Link>
        </div>
    );
};

export default Emty;