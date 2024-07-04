import React from 'react'
import { subscriptionPlans } from '../../store/utils';
import SubscriptionPlan from './SubscriptionPlan';

const Subcription = () => {
    return (
        <div className='mt-14'>
            <div className='text-center sm:w-1/2 mx-auto my-14'>
                <h1 className='text-xl sm:text-2xl text-white'>Choose the Subcription pakage that you like & get other benefits</h1>
                <p className='text-slate-400'>Enjoy various films that we have recommended for you and your family to enjoy</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
                {subscriptionPlans.map((plan) => (
                    <SubscriptionPlan key={plan.id} plan={plan} />
                ))}
            </div>
        </div>
    )
}

export default Subcription