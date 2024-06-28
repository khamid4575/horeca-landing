import { useTranslation } from "react-i18next";
import arrowDown from "../assets/imgs/down-arrow.svg";
import hero from "../assets/imgs/hero.png";
import Button from "./ui/Button";

const HeroSection = () => {
  const { t, i18n } = useTranslation("global");
  const currentLanguage = i18n.language;
  return (
    <section className="w-full h-[88.5vh] -z-50">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${hero})` }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 -z-10"></div>
      <div className="flex lg:top-14 absolute inset-0 lg:px-0 px-5 items-center 2xl:w-[1700px] lg:w-[1200px] mx-auto">
        <div className="lg:text-start text-center">
          <h1 className="text-white lg:text-4xl text-3xl font-bold uppercase">
            {currentLanguage === "uz" ? (
              <>
                Horeca uchun O'zbekistondagi <br />
                B2B marketpleys
              </>
            ) : (
              <>
                {t("hero.title")} <br /> {t("hero.inUzb")}
              </>
            )}
          </h1>
          <p className="lg:text-2xl lg:w-1/2 text-white font-medium my-3">
            {t("hero.description")}
          </p>
          <a href="#Контакты">
            <Button variant="primary">
              <p className="lg:text-xl text-lg">{t("hero.button")}</p>
            </Button>
          </a>
        </div>
      </div>
      {/* <div > */}
      <a
        href="#Отели"
        className="absolute inset-x-0 hover:translate-y-3 rounded-full transition-all duration-300 w-20 h-20 bottom-8 text-white flex justify-center items-center mx-auto "
      >
        <img src={arrowDown} alt="" className="w-14 h-14" />
      </a>
      {/* </div> */}
    </section>
  );
};

export default HeroSection;
