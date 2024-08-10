"use client";

import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "../../lib/useWindowSize";
import { useState } from "react";
import Payment from '../Components/Payment'
import { title } from "process";
import SimpleAccordation from "../Components/SimpleAccordation";  

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="p-4 bg-indigo-600 rounded-md h-full">
      <div style={{height: '100%'}} className="rounded-md flex flex-col lg:flex-row lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden ">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              price={item.price}
              panel={item.panel}
            />
          );
        })}
      </div>
    </section>
  );
};

const Panel = ({ open, setOpen, id, Icon, title, price, panel }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="text-black bg-white hover:bg-slate-100 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl">{title}</span>
        <div className="w-6 lg:w-full aspect-square bg-indigo-600 text-black grid place-items-center rounded-lg">
          <Icon />
        </div>
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              style={{width: '100%'}}
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white flex flex-col sm:flex-row items-center justify-center sm:gap-8" 
            >
              <Payment title={title} price={price} />
              <SimpleAccordation data={panel} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    Icon: FiDollarSign,
    title: "Website",
    price: 200,
    panel: [
      {
        title1: "What will you get?",
        content1: "A fully responsive and high-performance website.",
        title2: "Do I get a warranty?",
        content2: "Yes, 1 month of free support is included.",
        title3: "Who is this ideal for?",
        content3: "Those who already have their branding and only need a functional website.",
        title4: "Can I request additional features later?",
        content4: "Yes, additional features can be added upon request.",
      }]},
  {
    id: 2,
    Icon: FiPlay,
    title: "Website Full",
    price: 200,
    panel: [
      {
        title1: "What will you get?",
        content1: "A complete website along with custom-designed graphics (logos, banners, social media visuals).",
        title2: "Do I get a warranty?",
        content2: "Yes, 6 month of free support and adjustments.",
        title3: "Who is this ideal for?",
        content3: "Clients starting from scratch or looking to rebrand.",
        title4: "Is the design process collaborative?",
        content4: "Yes, your input is crucial to ensure the design matches your vision.",
      }]},
  {
    id: 3,

    Icon: FiBell,
    title: "Hosting",
    price: 200,
    panel: [
      {
        title1: "What will you get?",
        content1: "Secure and reliable hosting with free SSL and regular backups.",
        title2: "Do I get a warranty?",
        content2: "Yes, you’ll receive 24/7 support and monitoring.",
        title3: "Who is this ideal for?",
        content3: "Clients who want hassle-free, professionally managed hosting.",
        title4: "What happens if I need to upgrade?",
        content4: "Easy upgrade options are available as your needs grow.",
      }]},
  {
    id: 4,
    Icon: FiBarChart,
    title: "Full Package",
    price: 200,
    panel: [
      {
        title1: "What will you get?",
        content1: "A comprehensive package including both website creation and hosting.",
        title2: "Do I get a warranty?",
        content2: "Yes, with priority support for both website and hosting issues.",
        title3: "Who is this ideal for?",
        content3: "Clients looking for an all-in-one solution.",
        title4: "Is there a cost benefit?",
        content4: "Yes, it's more economical than purchasing hosting and website services separately.",
      }]},
{
  id: 5,
  Icon: FiBarChart,
  title: "Custom",
  panel: [
    {
      title1: "What will you get?",
      content1: "A package fully customized to your specific requirements.",
      title2: "Do I get a warranty?",
      content2: "Yes, ongoing support and adjustments based on your needs.",
      title3: "Who is this ideal for?",
      content3: "Clients with unique, complex needs requiring a bespoke solution.",
      title4: "Is a consultation included?",
      content4: "Yes, a detailed consultation to discuss your exact requirements.",
    }]}
];