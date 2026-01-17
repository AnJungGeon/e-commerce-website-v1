"use client";
import Link from "next/link";
import {RiArrowLeftLine, RiShoppingCart2Line, RiStarFill} from "@remixicon/react";
import Image from "next/image";
import {productFeatures, allProducts} from "@/data/data";
import {useParams} from "next/navigation";

export default function ProductDetails(){
    const params = useParams();
    const productId = parseInt(params.id as string);
    const product = allProducts.find(p => p.id === productId);

    if(!product){
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-2xl">product not found</p>
            </div>
        )
    }
    return( <>
        {/*Page title*/}
        <div className="bg-amber-50 text-center flex flex-col gap-1.5
        items-center justify-center min-h-56 px-5">
            <h2 className="text-3xl text-neutral-800">
                Product details
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
                Lorem ipsum dolor sit ament
                Lorem ipsum dolor sit ament
                Lorem ipsum dolor sit ament
            </p>
        </div>

        {/*section*/}
        <section className="py-20">
            <div className="container">
                {/*Bread crumb*/}
                <div className="flex items-center gap-2 text-sm
                text-gray-600 mb-6">
                    <Link href={'/'}
                     className="hover:text-amber-600
                     focus:text-amber-600 transition"
                    >Home</Link>
                    <span></span>
                    <Link href={'shop'}
                      className="hover:text-amber-600
                     focus:text-amber-600 transition"
                    >Shop</Link>
                    <span></span>
                    <p className="text-gray-800">Product</p>
                </div>
                {/*Back btn*/}
                <Link href={""} className="inline-flex items-center gap-2 text-amber-600
                hover:text-amber-700 mb-8 font-medium
                focus:text-amber-700 transition-colors">
                    <RiArrowLeftLine />
                    Back to shop
                </Link>

                {/*wrapper*/}
                <div className="grid gap-12 lg:grid-cols-2 ">
                    {/*product Img*/}
                    <div className="aspect-auto bg-amber-100 rounded-2xl
                    overflow-hidden p-5">
                        <Image src={product?.img} alt={product?.name}
                        width={600} height={600} className="w-full h-full object-contain" />
                    </div>
                    {/*product Details*/}
                    <div className="space-y-4">
                        {/*Category*/}
                        <p className="text-sm text-amber-600 font-medium">{product?.category}</p>
                        {/*Title*/}
                        <h3 className="text-2xl text-gray-800 ">{product?.name}</h3>
                        {/*rating*/}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center text-amber-50">
                                {[1,2,3,4,5].map((i) => (
                                    <RiStarFill key={i} size={20}  />
                                ))}
                            </div>
                            <p className="">{product?.star}. 127 Reviews</p>
                        </div>

                        {/*price*/}
                        <p className="text-2xl font-bold font-cunia text-amber-600">${product?.price}</p>
                        {/*Description*/}
                        <p>{product?.desc}</p>
                        {/*add to cart*/}
                        <button className="btn-primary flex items-center
                        gap-1 ">
                            <span className="shrink-0">
                                <RiShoppingCart2Line/>
                            </span>
                            Add to cart
                        </button>
                        {/*Features*/}
                        <div className="grid grid-cols-2 gap-4 pt-6
                        border-t border-gray-200">
                            {productFeatures.map(feature => (
                                <div className="flex items-center gap-3" key={feature.id}>
                                    <span className="shrink-0 text-amber-600">
                                        <feature.icon/>
                                    </span>
                                    <div>
                                        <p className="font-cunia">{feature.title}</p>
                                        <p className="text-sm text-gray-600">
                                            {feature.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}