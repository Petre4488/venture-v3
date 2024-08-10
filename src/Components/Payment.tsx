"use client";

import CheckoutPage from "./CheckoutPage";
import convertToSubcurrency from "../../lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined){
    throw new Error("Stripe publishable key is not set");
}   
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

interface PaymentProps {
    price: number;
    title: string;
}

export default function Payment( { title, price }: PaymentProps){
    
    const amount = price;


    return(
        <main className="max-w-6xl my-2 w-fit h-full p-10 text-white text-center border rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
           <div className="PaymentCards flex flex-row gap-4">
            <div className="CheckoutWebStandard">
                <div className="mb-10">
                        <h1 className="text-4xl font-extrabold mb2">
                            {title}
                        </h1>
                        <h2 className="text-2xl">VentureGroup</h2>
                        <span className="font-bold">€{amount}</span>
                    </div>
                    <Elements 
                    stripe={stripePromise}
                    options={{
                        mode: "payment",
                        currency: "eur",
                        amount: convertToSubcurrency(amount),
                    
                    }}
                    >
                        <CheckoutPage amount={(amount)} /> 
                    </Elements>
            </div>
           </div>
           
        </main>
    )
}