import React from "react";
import { footerList } from "@/data/data";
import Link from "next/link";
import {  RiFacebookFill, RiInstagramLine, RiTwitterLine } from "@remixicon/react";



export default function Footer(){
  return <footer className=" bg-neutral-950 text-white pt-10 pb-6">
    <div className="contanier space-y-6 divide-y divide-neutral-800">
      {/* Footer top */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 
        pb-11 sm:pb-16">
          {/* desc */}
          <div >
            {/* logo */}
            <span className="text-2xl font-cunia inline-flex mb-4">FurniHub</span>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Dolorem, quos debitis. Fugit nesciunt obcaecati sint maxime similique molestiae corporis, 
              necessitatibus cupiditate nemo ipsum quas quisquam aut laboriosam explicabo est ab.
            </p>
          </div>
          {/* footer list */}
          {footerList.map(item => 
            <div key={item.id}>
              <p className="text-xl font-cunia">{item.title}</p>
              <ul className="space-y-2 mt-4">
                {item.links.map(link =>
                  <li key={link}>
                    <a href={""} className="text-gray-300 hover:underline">{link}</a>
                  </li>
                )}
              </ul>
            </div>
          )}
        
          {/* Get in touch */}
          <div> 
            <p className="text-xl font-cunia mb-3">Get in touch</p>
            <p>
              Email:
              <a href="" className="text-gray-300 hover:underline">support@furnihub.com</a>
            </p>
            <p>
              Phone:
              <a href="">010000000000</a>
            </p>
            {/* social links  */}
            <div className="flex items-center gap-2 mt-7">
              {[RiFacebookFill, RiInstagramLine, RiTwitterLine].map
              ((Icon, index) =>
                <a href="" key={index} className="text-gray-300 hover:underline
                hover:text-amber-500 focus:text-amber-500
                transition-colors">
                  <Icon/>
                </a>
              )}

            </div>
          </div>
          </div>
      {/* footer bottom */}
        <p>&copy; Furnihub.ALl</p>
      </div>
  </footer>;
}