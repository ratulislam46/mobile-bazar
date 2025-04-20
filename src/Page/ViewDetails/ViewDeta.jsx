import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { MdBookmarkAdd } from "react-icons/md";
import Button from '../Ui/Button';
import { BsCartPlusFill } from "react-icons/bs";
import { addFavorites } from '../Utility/Utility';

const ViewDeta = () => {

    const data = useLoaderData();
    const { id } = useParams();

    const singlePhone = data.find(phone => phone.id === parseInt(id));

    const { brand, name, model, image, storage, camera_info, description } = singlePhone;


    const handleFavorites = () =>{
        addFavorites(singlePhone);
    }

    return (
        <div className='my-4 mx-2 md:mx-0'>
            {/* image  */}
            <div className='flex justify-center'>
                <img src={image} alt="" className='w-2/3' />
            </div>

            {/* title and button  */}
            <div className='flex justify-between mx-4 md:mx-0 md:mr-8 items-center'>
                <h1 className='font-semibold text-5xl'>{name}</h1>
                <div className='space-x-4 mt-4'>
                    <Button label={<BsCartPlusFill />}></Button>
                    <Button onClick={handleFavorites} label={<MdBookmarkAdd />}></Button>
                </div>
            </div>
            {/* details  */}
            <div>
                <h1>Details :</h1>
                <h3>Brand: {brand}</h3>
                <h3>Model: {model}</h3>
                Storage: {
                    storage.map((store,index) => <h3 key={index}>{store}</h3>)
                }
                <h3>Camera Info:{camera_info}</h3>
                <h3>description: {description}</h3>
            </div>
        </div>
    );
};

export default ViewDeta;