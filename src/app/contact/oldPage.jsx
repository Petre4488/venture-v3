"use client";

import { Datepicker } from "flowbite-react";
import { Label, TextInput, Checkbox } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import ToS from "@/Components/ToS";
import React, { useState } from 'react';
import { db }from '../firebaseConfig'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

async function addContact(name, email, service) {
    try {
        const docRef = await addDoc(collection(db, "contacts"), {
            name: name,
            email: email,
            service: service,
            createdAt: serverTimestamp()
        });
        console.log("Document written with ID: ", docRef.id);
        return true;
    }
    catch(error){
        console.error("Error adding document: ", error);
        return false;
    }
}

export default function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState('');
    const [showComponent, setShowComponent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const added = await addContact(name, email, service);
        if (added){
            setName('');
            setEmail('');
            setService('');
            alert('Data added successfully');
        }
    }
    return(
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 border-purple-200 border-2 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="text-white relative px-4 py-10 bg-gradient-to-r from-purple-500 to-indigo-700 border-purple-200 border-2 shadow-lg sm:rounded-3xl sm:p-20">

                    <div className="text-center pb-6">
                        <h1 className="text-3xl">Lets get in touch!</h1>

                        <p className="text-gray-300">
                            Fill up the form below and we will contact you!
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} >

                        <input
                                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Name" name="name" htmlFor='name'
                                value={name} onChange={(e) => setName(e.target.value)}/>

                        <input
                                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email" placeholder="Email" name="email" htmlFor='email' 
                                value={email} onChange={(e) => setEmail(e.target.value)} />

                        <input
                                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Services you want" name="_subject" htmlFor='service' 
                                value={service} onChange={(e) => setService(e.target.value) } />

                        <div className="flex justify-between">
                            <input
                                className="cursor-pointer shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit" value="Send ➤"/>
                            {/* <input
                                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="reset"/> */}
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}