
"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "flowbite-react";
import Logo from "../../public/logo.webp"

export default function NavBar() {
  {/* TODO: Make unactivated navbar wider on phone */}
  return (
    <Navbar fluid rounded className="border border-2 border-themeBlue bg-bgBlue mb-5 ">
      <Navbar.Brand as={Link} href="/">
        <Image
          src={Logo}
          alt="Flowbite React"
          width={40}
          height={40}
          className="rounded-full"/>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Venture</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="pl-4">
        <Navbar.Link href="/" active className="text-neonPink">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/about" className="text-neonPink">
          About
        </Navbar.Link>
        <Navbar.Link href="/prices" className="text-neonPink">Pricing</Navbar.Link>
        <Navbar.Link href="/contact" className="text-neonPink">Contract</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
