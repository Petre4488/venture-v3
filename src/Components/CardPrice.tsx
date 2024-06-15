
"use client";

import { Card } from "flowbite-react";

export default function PricingCard(props: any , isAvailable: boolean) {
    type packageName = {
        packageName: string;
        packagePrice: number;
      };
    return (
    <Card className='max-w-sm border border-2 border-themeBlue bg-bgBlue'>
      {/* Package Name */}
      <h5 className="mb-4 text-xl font-medium text-neonPink">{props.packageName}</h5>
      {/* Package Price */}
      <div className="flex items-baseline text-neonPink">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">{props.packagePrice}</span>
      </div>
      {/* Package servieces */}
      <ul className="my-7 space-y-5">
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-neonPink"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-neonPink"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
            20GB Cloud storage
          </span>
        </li> 
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-neonPink"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">API Access</span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
        </li>
      </ul>
      <button
        type="button"
        className="inline-flex border border-2 border-themeBlue w-full justify-center rounded-lg bg-bgBlue px-5 py-2.5 text-center text-sm font-medium text-neonPink hover:border-neonPink focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
      >
        Choose plan
      </button>
    </Card>
  );
}

