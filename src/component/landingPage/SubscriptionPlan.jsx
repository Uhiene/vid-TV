import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';

const SubscriptionPlanCard = ({ plan }) => {
    return (
        <div className="relative border border-slate-500 rounded-lg p-6 bg-slate-800 bg-opacity-25 shadow-lg hover:scale-105 transition ease-out duration-300 flex flex-col justify-between">
            <div>
                <div className='text-center'>
                    <h2 className="text-2xl font-bold text-white">{plan.name}</h2>
                    <p className="text-sm text-slate-200 mb-4 w-3/4 mx-auto">{plan.description}</p>
                    <p className="text-4xl font-bold text-green-500 my-8">{plan.price} <span className='text-sm text-slate-200'>{plan.duration}</span></p>
                </div>
                <div className="mb-4 h-52 text-slate-200">
                    {plan.details.map((detail, index) => (
                        <div key={index} className="mb-2 flex items-center gap-2">
                            <p className='text-green-500'><FaRegCheckCircle /> </p>
                            <p> {detail}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button className="w-full bg-green-500 text-white py-4 rounded-lg hover:bg-transparent hover:border-green-800 hover:border hover:text-green-500">
                Choose Plan
            </button>
        </div>
    );
};

export default SubscriptionPlanCard;
