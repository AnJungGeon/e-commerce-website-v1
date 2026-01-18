"use client"
import Link from "next/link"
import { navItems } from "@/data/data"
import { RiShoppingCart2Line, RiMenuLine, RiCloseLine } from "@remixicon/react";
import {useMemo, useState} from "react";
import { usePathname } from "next/navigation";
import { useCartStore} from "@/store/cartStore";


export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const handleClick = () => setOpenMenu(!openMenu)
  const pathname = usePathname();
  const items = useCartStore((state) => state.items);


  //total items
  const totalItems = useMemo(()=>{
    return items.reduce((total, item) => total + item.quantity, 0);
      },[items]
  );

  return (
    <header className="sticky top-0 border-b border-gray-200 
    w-full py-3 bg-white z-50 font-cunia">
      <div className="container flex items-center justify-between">
        {/*logo*/}
        <Link href={"/"} className="text-3xl font-semibold text-amber-600">FurniHub</Link>
        {/*Desktop Menu*/}
        <nav className="hidden lg:flex items-center
        justify-between w-full">
          {/*list*/}
          <ul className="mx-auto flex items-center gap-9 justify-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className={`hover:text-amber-600 
                focus:text-amber-600 transition-colors 
                ${pathname === item.href ? "text-amber-600" :
                ""}`}>
                  {item.label}</Link>
              </li>
            ))}
          </ul>
          {/*btns */}
          <div className="flex items-center gap-3.5">
            {/* Shopping cart link */}
            <Link href={'/shopping-cart'} className={`size-10 relative inline-flex 
            items-center justify-center rounded-sm 
            ${pathname === '/shopping-cart' ? "text-amber-600" :
                ""}`}>              
                <RiShoppingCart2Line size={26}
                className="hover:text-amber-600 focus:text-amber-600 transition-all" />
              {totalItems > 0 && (
                  <span className="absolute top-0 right-0
              bg-amber-600 flex items-center size-5 rounded-full
              text-white justify-center text-xs">{totalItems}</span>)}
            </Link>
            {/*Log in btn*/}
            <Link href={'/login'} className="btn-primary">Log In</Link>
          </div>
        </nav>
        {/*mobile menu*/}
        <nav className="relative lg:hidden">
          {/*btns */}
          <div className="flex items-center gap-2">
            {/* Cart icon */}
            <Link href={'/shopping-cart'} className="size-10 inline-flex items-center justify-center rounded-sm relative">
              <RiShoppingCart2Line size={26} 
              className={`hover:text-amber-600 
              focus:text-amber-600 transition-colors
                  ${pathname === '/shopping-cart' ? "text-amber-600" :
                ""}
                `}
                  />
              {totalItems > 0 && (
                  <span className=" size-5 bg-amber-600 text-white
              flex items-center justify-center rounded-full
              text-xs absolute top-0 right-0">
                {totalItems}
              </span>
              )}
            </Link>
            {/*Menu btn*/}
            <button onClick={handleClick}>
              {openMenu ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
            </button>
          </div>
          <div
            className={`absolute top-full right-0 bg-white p-3
          min-w-50 w-full shadow mt-2.5 rounded-lg space-y-2.5
          transition ${openMenu ? "visible grid" : "hidden invisible"}`}>
            {/*list*/}
            <ul className="">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} 
                  className={`
                    block p-1.5 hover:text-amber-600
                     focus:text-amber-600 transition-colors
                    ${pathname === '/shopping-cart' ? "text-amber-600" : ""}
                    `}
                    onClick={handleClick}
                    >
                      {item.label}</Link>
                </li>
              ))}
            </ul>
            {/*Login btn */}
            <Link href={"/login"} className="btn-primary w-full text-center"
             onClick={handleClick}
            >Log In</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}