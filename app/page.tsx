import React from "react";
import {categoryItems, allProducts } from "@/data/data";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function Home(){
  return <>
  {/* Hero section */}
  <section className="lg:mt-4">
    <div className="container bg-[url(/images/hero-img.png)]
    bg-center bg-cover bg-no-repeat min-h-[75svh] flex
    items-center justify-center flex-col text-white 
    text-center lg:rounded-2xl">
      <p className="text-amber-400 font-light tracking-wide
      uppercase">
        Minimal interior design
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl">
        We minimize your waste <br/> 
        in every step of the process.
      </h1>
    </div>
  </section>

  {/*Category section*/}
  <section className="mt-16 relative z-10 lg:mt-36">
    <div className="container grid gap-7 sm:grid-cols-2
    lg:grid-cols-3">
      {categoryItems.map(item =>(
        //Card
        <div className="bg-white border border-amber-100 block hover:bg-amber-50
        rounded-xl px-10 py-8 transition
        cursor-pointer" key={item.id}>
          {/* Titel and quantity */}
          <div>
            <h2 className="text-2xl">{item.title}</h2>
            <p className="text-gray-500">{item.quantity}</p>
          </div>
          {/* Product image */}
          <div className="max-w-max mx-auto mt-12">
            <Image 
            src={item.img} 
            alt={item.title}
            width={item.width}
            height={item.height}
            className="w-auto h-auto object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* Products */}
  <section className="pt-28">
    <div className="container">
      {/* title */}
      <h2 className="section-title text-center">Explore All Products</h2>
      {/* card wrapper */}
      <div className="mt-14 grid gap-5 sm:grid-cols-2
      lg:grid-cols-3">
        {allProducts.slice(4, 12).map(product => (
          <ProductCard key={product.id} {...product}/>
        ))}
      </div>

      {/* Btn */}
      <Link href='/shop' className="btn-primary block mt-14
      mx-auto max-w-max">View all Products</Link>
    </div>
  </section>
  </>
}