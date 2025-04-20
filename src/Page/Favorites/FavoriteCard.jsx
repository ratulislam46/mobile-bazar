import React from 'react';
import { Link } from 'react-router';
import { MdDeleteForever } from "react-icons/md";

const FavoriteCard = ({ phone, handleDelete}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={phone.image}
                    alt="Phone" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{phone.name}</h2>
                <p>{phone.description}</p>

                <div className="card-actions justify-end">

                    <Link to={`/view-detils/${phone.id}`}>
                        <button className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white">View Details</span>
                        </button>
                    </Link>
                </div>
            </div>

            {/* delete button  */}
            <div onClick={()=>handleDelete(phone.id)} className='absolute -top-2 -right-2 bg-black rounded-full p-1 group hover:bg-gray-300'>
                <MdDeleteForever size={20} className=' text-gray-300 hover:text-black' />
            </div>
        </div>
    );
};

export default FavoriteCard;