'use client';

import React, { useState, useEffect } from 'react';
import {
    useStripe,
    useElements,
    PaymentElement,
} from "@stripe/react-stripe-js"
import convertToSubcurrency from '../../lib/convertToSubcurrency';
import Loader from "../Components/BarLoader";    

const CheckoutPage = ( { amount }: {amount:number}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
        })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret))
    }, [amount]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            return;
        }

        const { error: submitError } = await elements.submit();

        if (submitError) {
            setErrorMessage(submitError.message ?? null);
            setLoading(false);
            return;
        }
        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
              return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
            },
          });
          
          if (error){
            //payment error to show the customer
            setErrorMessage(error.message ?? null);
          }else{
                        
          }
          setLoading(false);

          if (!clientSecret || !stripe || !elements) {
            return (
                <div className="flex items-center justify-center">
                  <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                    role="status"
                  >
                    <Loader />
                  </div>
                </div>
              );
          }
            
    }


    return(
        <form onSubmit={handleSubmit} className='bg-white rounded-md p-2'>
            {clientSecret && <PaymentElement/>}

            {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
            <button 
                disabled={!stripe || loading}
                className='text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse ' >
                {!loading ? `Pay : €${amount}` : "Processing"}
            </button>
        </form>
    )
}

export default CheckoutPage;