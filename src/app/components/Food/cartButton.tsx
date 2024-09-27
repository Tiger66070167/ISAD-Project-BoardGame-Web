"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export default class cartButton extends React.Component {
  render() {
    return (
        
      <Button
        type="button"
        className=" absolute  right-20  mt-1.5 mr-0 text-white bg-[--primary-color] hover:scale-105 bg-gradient-to-r hover:from-[--primary-color] hover:to-[--accent-color] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 delay-0"
      >
        {/* create Cart */}
        <svg
          className="w-6 h-7x me-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 21"
        >
          <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
        </svg>
        {/* create circle and number of items */}
        <span className="inline-flex items-center justify-center w-8 h-8 ms-2 text-xl font-semibold text-blue-800 bg-blue-200 rounded-full">
          50
        </span>
      </Button>
    );
  }
}
