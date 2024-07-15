"use client";

import { Datepicker } from "flowbite-react";
import { Label, TextInput, Checkbox } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import ToS from "@/Components/ToS";
import React, { useState } from 'react';
import { db }from '../firebaseConfig'
import { collection, addDoc } from "firebase/firestore";

async function addContact(name, email, date) {
    try {
        const docRef = await addDoc(collection(db, "contacts"), {
            name: name,
            email: email,
            date: date
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
    const [date, setDate] = useState('');
    const [showComponent, setShowComponent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const added = await addDataToFirestore(name, email, date);
        if (added){
            setName('');
            setEmail('');
            setDate('');
            alert('Data added successfully');
        }
    }
    return(
        <div className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">

                    <div className="text-center pb-6">
                        <h1 className="text-3xl">Contact Us!</h1>

                        <p className="text-gray-300">
                            Fill up the form below to send us a message.
                        </p>
                    </div>

                    <form>

                        <input
                                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Name" name="name"/>

                        <input
                                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email" placeholder="Email" name="email"/>

                        <input
                                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Subject" name="_subject"/>

                        <div className="flex justify-between">
                            <input
                                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit" value="Send ➤"/>
                            <input
                                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="reset"/>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}