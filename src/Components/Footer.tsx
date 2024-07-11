
"use client";

import { Footer } from "flowbite-react";

export default function FooterComp() {
  return (
    <Footer container className="mt-3 border-2 border-themeBlue bg-bgBlue" >
      <Footer.Copyright href="#" by="Venture™" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
