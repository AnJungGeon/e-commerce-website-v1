"use client"
import React from 'react';
import {usePathname} from "next/navigation";

export default function PageTitle(){
    const pathname= usePathname();
    return (
        <div className="bg-amber-50 text-center flex flex-col gap-1.5
        items-center justify-center min-h-56 px-5">
            <h2 className="text-3xl text-neutral-800">
                {pathname === "/shop" && "Shop"}
                {pathname === "/shopping-cart" && "Shopping Cart"}
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
                Lorem ipsum dolor sit ament
                Lorem ipsum dolor sit ament
                Lorem ipsum dolor sit ament
            </p>
        </div>
    );
}