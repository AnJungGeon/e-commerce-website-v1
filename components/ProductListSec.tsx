"use client";
import {RiSearchLine, RiFilterLine} from "@remixicon/react";
import {allProducts} from "@/data/data";
import ProductCard from "@/components/ProductCard";
import { useMemo, useState } from "react";

export default  function ProductListSec() {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("");
    //filter and sort produts base on search query and sort option
    const fillteredAndSortedProducts = useMemo(()=>{
    let products = [...allProducts];
    //fillter by search query
    if(searchQuery){
        const query = searchQuery.toLowerCase();
        products = products.filter(
            (product) =>
                product.name.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query) ||
                product.desc.toLowerCase().includes(query)

        );
    }

//sort product
    switch(sortOption){
        case "Price:Low to High":
            products.sort((a, b)=> a.price - b.price);
            break;
        case "Price:High to Low":
        products.sort((a, b)=> b.price - a.price);
        break;
        case "Name:A to Z":
        products.sort((a, b)=> a.name.localeCompare(b.name));
        break;
        default:
            break;
    }

    return products
    },[searchQuery, sortOption]);

    return <section>
        <div className="container space-y-10">
            {/*Filter bar*/}
            <div className="bg-white border border-gray-200 gird
            sm:flex gap-1.5 items-center justify-between mt-7 p-4 rounded-lg">
                {/*Search bar*/}
                <div className="border border-gray-200 flex
                 focus-within:border-amber-600 rounded-md">
                    <input type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-full py-2 outline-none px-3.5
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
                    <select 
                    value={sortOption}
                    onChange={(e)=>setSortOption(e.target.value)}
                    className="appearance-none outline-none px-2.5
                    py-1.5 flex-1">
                        {[
                            "sort By", 
                            "Price:Low to High", 
                            "Price:High to Low",
                            "Name:A to Z"
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
            {fillteredAndSortedProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-14 sm:mb-28">
                {fillteredAndSortedProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
            ) : (
                <p className="text-gray-600 text-xl">
                    No product found {searchQuery && `for "${searchQuery}"`}
                </p>
            )}

        </div>
    </section>;
}
