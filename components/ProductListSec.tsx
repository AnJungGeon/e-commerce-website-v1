import React from "react";
import {RiSearchLine, RiFilterLine} from "@remixicon/react";
import {allProducts} from "@/data/data";
import ProductCard from "@/components/ProductCard";

export default  function ProductListSec() {
    return <section>
        <div className="container space-y-10">
            {/*Filter bar*/}
            <div className="bg-white border border-gray-200 gird
            sm:flex gap-1.5 items-center justify-between mt-7 p-4 rounded-lg">
                {/*Search bar*/}
                <div className="border border-gray-200 flex
                 focus-within:border-amber-600 rounded-md">
                    <input type="text" className="w-full h-full py-2 outline-none px-3.5
                    text-gray-700" placeholder="입력해주세요"/>
                    <button className="text-gray-700 h-auto w-10 flex
                    items-center justify-center hover:text-amber-700
                    transition-colors">
                        <RiSearchLine/>
                    </button>
                </div>
                {/*Filter Btn*/}
                <div className="flex border border-gray-300 rounded-md
                focus-within:border-amber-500">
                    <select className="appearance-none outline-none px-2.5
                    py-1.5 flex-1">
                        {[
                            "sort By", "Price: Low to High", "Price: High to Low",
                            "Name :A to Z"
                        ].map((label, index) => (
                            <option key={index}>{label}</option>
                        ))}
                    </select>
                    <button className="flex items-center justify-center
                    w-7 text-neutral-800 focus-within:text-amber-500 transition">
                        <RiFilterLine/>
                    </button>
                </div>
            </div>

            {/*Product list*/}
            <div className="gird gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-14 sm:mb-28">
                {allProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    </section>;
}
