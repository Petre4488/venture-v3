"use client";

import { Datepicker } from "flowbite-react";
import { Label, TextInput, Checkbox } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import ToS from "@/Components/ToS";
import React, { useState } from 'react';

export default function Contact(){
    const [showComponent, setShowComponent] = useState(false);

    const handleClick = () => {
      setShowComponent(!showComponent);
    };
    return(
        <div className="container bg-bgBlue w-2/5 flex flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="name" color="white" value="Name" />
                </div>
                <TextInput id="name" placeholder="Your Name" required color="white" />
            </div>
            <div className="mb-2 block">
                <Label htmlFor="email4" value="Your email" className="text-white" />
            </div>
            <TextInput id="email4" type="email" icon={HiMail} placeholder="name@flowbite.com" required />
            <Datepicker title="Venture"/>
            <div className="flex items-center gap-2">
                <Checkbox id="accept" defaultChecked />
                <Label htmlFor="accept" className="flex text-neonPink">
                I agree with the&nbsp;
                <a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500" onClick={handleClick}>
                    terms and conditions  {showComponent && <ToS />}
                </a>
                </Label>
            </div>
        </div>
    )
}