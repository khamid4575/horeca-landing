import { useState, useEffect, useMemo, useRef } from "react";
import Flag from "react-flagkit";
import { useTranslation } from "react-i18next";
import Button from "./ui/Button";

const Navbar = () => {
  const { t, i18n } = useTranslation("global");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastFirstSection, setIsPastFirstSection] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languageDropdownRef = useRef(null);

  const links = [
    { name: t("navbar.hotels"), path: "Отели" },
    { name: t("navbar.restaurants"), path: "Рестораны" },
    { name: t("navbar.services"), path: "Услуги" },
    { name: t("navbar.shipping"), path: "shipping" },
    { name: t("navbar.contacts"), path: "Контакты" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > window.innerHeight - 50); // Adjust the condition as needed
      setIsPastFirstSection(scrollTop > window.innerHeight - 50); // Adjust this condition based on your section height
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const languages = useMemo(() => [
    { country: "RU", code: "ru", text: "Русский" },
    { country: "UZ", code: "uz", text: "O'zbek" },
  ]);

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (
      languageDropdownRef.current &&
      !languageDropdownRef.current.contains(event.target)
    ) {
      setIsLanguageDropdownOpen(false);
    }
  };

  const handleLanguageChange = (newLang) => {
    i18n.changeLanguage(newLang);
    setIsLanguageDropdownOpen(false);
  };

  const LanguageSelector = () => (
    <div className="relative" ref={languageDropdownRef}>
      <button
        onClick={toggleLanguageDropdown}
        className="mr-5 flex items-center text-white px-4 rounded"
      >
        {i18n.language === "ru" && <Flag country="RU" className="mr-2 w-10" />}
        {i18n.language === "uz" && <Flag country="UZ" className="mr-2 w-10" />}
      </button>
      {isLanguageDropdownOpen && (
        <div className="absolute right-2 2xl:mt-8 z-50 mt-3 w-28 bg-white rounded shadow-lg">
          {languages.map((language) => (
            <li
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className="flex font-medium items-center px-3 py-2 cursor-pointer text-gray-500 hover:bg-gray-200"
            >
              <Flag country={language.country} className="mr-2" />
              {language.text}
            </li>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <nav
      className={`py-5 z-50 ${
        isScrolled ? "bg-gray-50 sticky top-0" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center 2xl:w-[1700px] lg:w-[1200px] w-full mx-auto lg:px-0 px-5">
        <h1
          className={`uppercase text-2xl font-extrabold  ${
            !isScrolled && "text-white"
          }`}
        >
          <a href="#" className="z-50">
            Supply partners
          </a>
        </h1>
        <div className="flex">
          <div
            className={`hidden z-50 lg:flex gap-8 ${
              isScrolled ? "mr-0" : "mr-20"
            }`}
          >
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
          {!isPastFirstSection && (
            <div
              className={`hidden z-50 lg:flex text-white ${
                isScrolled && "hidden"
              }`}
            >
              <LanguageSelector />
            </div>
          )}
          <div className="lg:hidden flex items-center justify-end z-50">
            <Button
              variant={`${isScrolled ? "scroll" : "phone"}`}
              // onClick={toggleDropdown}
              // aria-expanded={isDropdownOpen}
              aria-controls="mobile-menu"
            >
              <i className="bx bx-menu text-3xl w-full"></i>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
