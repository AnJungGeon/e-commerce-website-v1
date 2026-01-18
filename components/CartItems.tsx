'use client';
import Image from 'next/image'
import { RiAddLine, RiDeleteBin6Line, RiSubtractLine } from '@remixicon/react'
import Link from 'next/link'
import {useCartStore} from "@/store/cartStore";
import {useMemo} from "react";
import {allProducts} from "@/data/data";

export default function CartItems() {
    const items = useCartStore((state)=>state.items);
    const removeItem = useCartStore((state)=>state.removeItem);
    const updateQuantity = useCartStore((state)=>state.updateQuantity);
    const clearCart = useCartStore((state)=>state.clearCart);

    const cartItems = useMemo(() => {
        return items.map((item)=> {
            const product = allProducts.find((p) => p.id === item.id);
            if(!product) throw new Error(`product with id ${item.id} not found`);
            return {
                id: product.id,
                name: product.name,
                price: product.price,
                img: product.img,
                quantity: item.quantity,
                category: product.category,

            };
        })
    }, [items]);

    //Total items
        const totalItems = useMemo(() => {
            return items.reduce((total, item) => total + item.quantity, 0);
        }, [items]);


    //subtotal
    const subtotal = useMemo(()=>{
        return cartItems.reduce((total, item) =>total+ item.price * item.quantity, 0);
    },[totalItems]
    );

    //tax
    const tax = subtotal * 0.1;

    //shipping
    const shipping = subtotal === 0 ? 0:subtotal >= 100 ? 0 : 100;

    const total = subtotal + tax + shipping;

    return (
  <section className='py-24 md:py-28'>
    <div className='container'>
        {/* Title */}
        <div className='mb-8 space-y-1.5'>
            <h3 className='text-3xl'>Shopping Cart</h3>
            <p className='text-neutral-300'>{totalItems} 
                {totalItems === 1? "item" : "items"} in you cart</p>
        </div>
        <div className='grid gap-8 lg:grid-cols-3 lg:items-start'>
            {/* Cart Items */}
            <div className='lg:col-span-2'>
                {cartItems.length === 0 ? (
                    <div className="bg-white border border-gray-200
                    rounded-lg p-12 text-center space-y-3">
                        <p className="text-gray-600 text-lg font-cunia">Your Cart is Empty</p>
                        <Link href={'/shop'} className="inline-block btn-primary">
                            Continue shopping
                        </Link>
                    </div>
                    ) : (
                    <div className='bg-white border border-gray-200
                         roundeed-lg overflow-hidden'>
                        {/* Mobile view */}
                        <div className='md:hidden divide-y divide-gray-200'>
                            {cartItems.map((item)=> (
                                // item
                                <div key={item.id} className='p-4'>
                                    {/* product */}
                                    <div className='flex gap-4'>
                                        {/* img */}
                                        <div>
                                            <Image src={item.img} alt={item.name} width={80} height={80}
                                                   className='rounded-md w-auto h-auto object-contain'/>
                                        </div>
                                        {/* Contant */}
                                        <div className='flex-1'>
                                            <h3 className='font-medium mb-2'>{item.name}</h3>
                                            <p className='text-gray-600'>{item.price}</p>
                                            {/* Counter */}
                                            <div className='flex items-center gap-2
                        border border-gray-300 w-fit rounded-lg
                        overflow-hidden'>
                                                <button className='p-2 hover:bg-gray-100
                            focus:bg-gray-100 transition' onClick={() =>
                                                updateQuantity(item.id, item.quantity -1)
                                                }>
                                                    <RiSubtractLine size={18}/>
                                                </button>
                                                <p className='px-3 font-medium'>{item.quantity}</p>
                                                <button className='p-2 hover:bg-gray-100
                            focus:bg-gray-100 transition' onClick={() =>
                                                    updateQuantity(item.id, item.quantity +1)
                                                } >
                                                    <RiAddLine size={18}/>
                                                </button>
                                            </div>
                                        </div>
                                        {/* Trash Icon */}
                                        <button className='text-red-500
                     hover:text-red-600 focus:text-red-600
                    transition-colors'
                                                title='Delete item' onClick={()=>removeItem(item.id)}>
                                            <RiDeleteBin6Line size={20} />
                                        </button>
                                    </div>
                                    {/* Total price */}
                                    <div className="mt-3 pt-3 border-t border-gray-100
                    flex justify-between">
                                        <p className=''>Subtotal:</p>
                                        <p className='text-amber-600 font-cunia'>
                                            ${(item.price * item.quantity).toFixed
                                            (2)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Desktop menu */}
                        <div className='hidden md:block overflow-x-hidden'>
                            <table className='min-w-full text-left border-collapse'>
                                <thead className='bg-gray-50 border-gray-200'>
                                <tr >
                                    {['Product', 'Price', "Quantitiy", "Total"]
                                        .map((label) =>
                                            <th key={label} className='p-4
                                font-semibold'>{label}
                                            </th>
                                        )}
                                    <th className='p-4'></th>
                                </tr>
                                </thead>
                                <tbody className='divide-y divide-gray-200'>
                                {cartItems.map((item)=> (
                                    // item
                                    <tr key={item.id}>
                                        <td className='p-4'>
                                            <div className='flex items-center gap-4'>
                                                {/* img */}
                                                <div className=''>
                                                    <Image
                                                        src={item.img}
                                                        alt={item.name}
                                                        width={80}
                                                        height={80}
                                                        className='rounded-md w-auto h-auto
                                                object-contain'
                                                    />
                                                </div>
                                                <p className='font-medium'>{item.name}</p>
                                            </div>
                                        </td>
                                        <td className='text-gray-700 p-4'>${item.price}</td>
                                        <td className='p-4'>
                                            {/* Counter */}
                                            <div className='flex items-center gap-2
                                border border-gray-300 w-fit rounded-lg
                                overflow-hidden'>
                                                <button className='p-2 hover:bg-gray-100
                                    focus:bg-gray-100 transition' onClick={() =>
                                                    updateQuantity(item.id, item.quantity -1)
                                                }>
                                                    <RiSubtractLine size={18}/>
                                                </button >
                                                <p className='px-3 font-medium'>{item.quantity}</p>
                                                <button className='p-2 hover:bg-gray-100
                                    focus:bg-gray-100 transition'
                                                        onClick={() =>
                                                            updateQuantity(item.id, item.quantity +1)
                                                        }>
                                                    <RiAddLine size={18}/>
                                                </button>
                                            </div>
                                        </td>
                                        {/* Total price */}
                                        <td className='p-4 font font-semibold text-amber-600'>
                                            ${1200}
                                        </td>
                                        {/* trash Icon */}
                                        <td className='p-4'>
                                            <button className='text-red-500
                                hover:text-red-600 focus:text-red-600
                                transition-colors'
                                                    title='Delete item' onClick={()=>removeItem(item.id)}>
                                                <RiDeleteBin6Line size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
        {cartItems.length > 0 && (
              // Clear CartBtn
            <button className='mt-4 text-red-500 flex items-center
            gap-2 hover:text-red-700 focus:text-red-700 transition-colors'
            onClick={clearCart}>
                <RiDeleteBin6Line size={18}/>
                Clear Cart
            </button>
        )}
        </div>

            {/* Order Summary */}
            {cartItems.length > 0 && (
                <div className='lg:col-span border border-gray-200
            bg-white p-6 rounded-lg sticky top-24'>
                {/* Title */}
                <h3 className='text-xl mb-6'>Order Summary</h3>
                <div className='space-y-3 mb-6'>
                    {/* Total */}
                    <div className='flex justify-between text-gray-600'>
                        <h4>Subtotal:</h4>
                        <p >${subtotal}</p>
                    </div>
                    {/* Shipping`` */}
                    <div className='flex justify-between text-gray-600'>
                        <h4>Shipping:</h4>
                        <p className='text-amber-600'>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</p>
                    </div>
                    {/* Tax */}
                    <div className='flex justify-between text-gray-600'>
                        <h4>Tax:</h4>
                        <p>${tax}</p>
                    </div>
                </div>

                {/* Total price */}
                <div className='border-t border-r-gray-200 pt-4 mb-6'>
                    <h4>Total</h4>
                    <p>${total}</p>
                </div>

                {/* Check out btn */}
                <button className='btn-primary'>Check out</button>
                {/* link */}
                <Link href='/shop' className='block mt-4 text-amber-600 hover:underline
                focus:underline max-w-max'>Continue Shopping</Link>
            </div>
                )}
        </div>
    </div>
  </section>
  )
}
