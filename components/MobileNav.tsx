"use client";

import { Dispatch, SetStateAction } from "react";
import { useMediaQuery } from "react-responsive";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home", target: "home", offset: -100 },
  { name: "about", target: "about", offset: -80 },
  { name: "class", target: "class", offset: -80 },
  { name: "team", target: "team", offset: 0 },
  { name: "prices", target: "prices", offset: -40 },
  { name: "testimonial", target: "testimonial", offset: 0 },
  { name: "blog", target: "blog", offset: 0 },
  { name: "contact", target: "contact", offset: 0 },
];

type Props = {
  setOpenNav: Dispatch<SetStateAction<boolean>>;
  containerStyles: string;
};

const MobileNav = ({ containerStyles, setOpenNav }: Props) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  return (
    <div className={`${containerStyles}`}>
      {links?.map((link, index) => {
        return (
          <ScrollLink
            className="cursor-pointer hover:text-accent transition-all capitalize"
            offset={link.offset}
            to={link.target}
            smooth
            spy
            activeClass={`${!isMobile && "active"}`}
            key={index}
            onClick={() => setOpenNav(false)}
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </div>
  );
};

export default MobileNav;
