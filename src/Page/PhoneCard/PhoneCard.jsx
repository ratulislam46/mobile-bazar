import React from 'react';
import { Link } from 'react-router';

const PhoneCard = ({ phoneDetails }) => {
    // console.log(phoneDetails);

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={phoneDetails.image}
                    alt="Phone" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{phoneDetails.name}</h2>
                <p>{phoneDetails.description}</p>

                <div className="card-actions justify-end">

                    <Link to={`/view-detils/${phoneDetails.id}`}>
                        <button className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white">View Details</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PhoneCard;