import React, { useState, useEffect } from "react";

const links = [
  { name: "Отели", path: "Отели" },
  { name: "Рестораны", path: "Рестораны" },
  { name: "Услуги", path: "Услуги" },
  { name: "Доставка и оплата", path: "shipping" },
  { name: "Контакты", path: "Контакты" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > window.innerHeight - 50); // Adjust the condition as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`py-5 z-50 ${
        isScrolled ? "bg-gray-50 sticky top-0" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center 2xl:w-[1700px] lg:w-[1200px] mx-auto">
        <h1
          className={`uppercase text-2xl font-extrabold  ${
            !isScrolled && "text-white"
          }`}
        >
          Supply partners
        </h1>
        <div className="flex">
          <div className={`flex gap-8 ${isScrolled ? "mr-0" : "mr-20"}`}>
            {links.map((link, index) => (
              <a
                key={index}
                className={`text-xl font-medium ${!isScrolled && "text-white"}`}
                href={`#${link.path}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className={`text-white ${isScrolled && "hidden"}`}>language</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
