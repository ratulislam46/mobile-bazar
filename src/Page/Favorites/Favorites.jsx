import React, { useEffect, useState } from 'react';
import { getFavorites, removeFavorites } from '../Utility/Utility';
import FavoriteCard from './FavoriteCard';
import Emty from '../Utility/Emty';

const Favorites = () => {

    const [displayPhones, setDisplayPhones] = useState([]);

    useEffect(() => {
        const savedPhones = getFavorites();
        setDisplayPhones(savedPhones)

    }, []);


    // remove phone in bookmarked 
    const handleDelete = id => {
        removeFavorites(id)
        setDisplayPhones(getFavorites())
    }

    // when favorite list is emty run this
    if (displayPhones.length < 1) return <Emty/>

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-4 mx-36 md:mx-2 lg:mx-0'>
                {
                    displayPhones.map(phone => <FavoriteCard key={phone.id} phone={phone} handleDelete={handleDelete}></FavoriteCard>)
                }
            </div>
        </div>
    );
};

export default Favorites;