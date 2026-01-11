import React from "react";
import { categoryItems } from "@/data/data";
import Image from "next/image";

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
        Minimal interiror desing
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl">
        We minimize your waste <br/> 
        in every step of the process.
      </h1>
    </div>
  </section>

  {/*Category section*/}
  <section className="">
    <div className="container">
      {categoryItems.map(item =>(
        //Card
        <div className="bg-white border border-amber-100 block hover:bg-amber-50
        rounded-xl px-10 py-8" key={item.id}>
          {/* Titel and quantity */}
          <div>
            <h2 className="">{item.title}</h2>
            <p className="">{item.quantity}</p>
          </div>
          {/* Product image */}
          <div className="">
            <Image 
            src={item.img} 
            alt={item.title}
            width={item.width}
            height={item.height}
            />
          </div>
        </div>
      ))}
    </div>
  </section>
  </>
}