"use client";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);

  const [openNav, setOpenNav] = useState<boolean>(false
  );

  useEffect(() => {
    const handleScroll = () => {
      //detect scroll
      setHeaderActive(window.scrollY > 50);
    };

    //add scroll event
    window.addEventListener("scroll", handleScroll);
    //remove scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(headerActive);

  return (
    <header className={`${headerActive ? 'h-[100px]':'h-[124px]'} fixed max-w-[1920px] z-50 top-0 w-full bg-primary-200 h-[100px] transition-all`}>
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <Link href="/">
          <Image src={"/assets/img/logo.png"} width={117} height={55} alt="" />
        </Link>
        {/* mobile na - hidden on large devices */}
        <MobileNav containerStyles={`${headerActive ? 'top-[90px]':'top-[100px]'}
        ${openNav ? 'max-h-mx pt-8 pb-10 border-t border-white/10' : 'max-h-0 pt-0 pb-0 overflow-hidden border-white/0'} flex flex-col  text-center gap-8 fixed bg-primary-200 w-full left-0 font-mediun text-base capitalize text-white transition-all xl:hidden`} setOpenNav={setOpenNav}/>
        {/* descktop nav - hidden an small devices */}
        <Nav containerStyles="hidden xl:flex text-white justify-center items-center py-12 gap-4 text-base font-medium transition-all capitalize" />
        {/* hide/open menu button */}
        <div className="flex items-center gap-4">
          {/* login & register buttons */}
          <div className='text-white flex items-center gap-4'>
            <button className="capitalize hover:text-accent transition-all font-medium text-base">login</button>
            <button className="capitalize hover:text-accent transition-all font-medium text-base">register</button>
          </div>
          <button onClick={() => setOpenNav(!openNav)} className="text-white xl:hidden">
            <MdMenu className="text-4xl"/>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
