
"use client";

import { Card } from "flowbite-react";
import Image from "next/image";

export default function CardServices(props) {
  return (
    <Card
      className="max-w-sm bg-bgBlue border border-2 border-themeBlue"
      renderImage={() => <Image width={500} height={500} src={props.image} alt={props.alt} />}
    >
      <h5 className="text-2xl font-bold tracking-tight text-neonPink">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-themeBlue">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
  );
}
