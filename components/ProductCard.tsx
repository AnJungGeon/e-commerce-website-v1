import React from 'react'
import { ProductCardProps } from '@/types/types'
import Image from 'next/image';
import Link from 'next/link';
import { RiEyeLine, RiShoppingCart2Line, RiStarFill } from '@remixicon/react';

export default function ProductCard({
    id, 
    img, 
    price, 
    name, 
    star
    }: ProductCardProps
) {
  return (
  <div className='bg-white p-8 rounded-md flex flex-col
    relative group gap-2.5'>
    {/* image */}
    <div className='py-10 relative flex items-center 
    justify-center bg-amber-50 h-full rounded-xl'>
        <Image src={img} alt={name} width=
        {200} height={200} className='' />
        {/* btn */}
        <Link href={'/shop'} className='absolute top-0 right-0
        bg-white gap-0 border
        border-amber-200 p-2 rounded-xs opacity-0
        group-hover:opacity-100 
        hover:text-amber-600 focus:text-amber-600 transition-all' 
        title='View product details'>
            <RiEyeLine />
        </Link>
    </div>
    {/* Content */}
    <div className='space-y-5 mt-auto'>
        {/* Add to cart btn */}
        <button className='btn-primary flex items-center
        justify-center w-full'>
            <span>
                <RiShoppingCart2Line size={22}/>
            </span>
            Add to Cart
        </button>

        <div className='space-y-1'>
            <h3 className='text-xl'>{name}</h3>
            <p className='text-amber-700 font-semibold'>${price}</p>
            {/* Stars */}
            <div className='flex items-center gap-0.5
            text-amber-500'>
                {[1,2,3,4,5].map(i =>
                    <RiStarFill key={i}/>
                )}
            </div>
        </div>
    </div>
  </div>
  );
  
}
