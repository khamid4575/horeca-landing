import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("global");
  return (
    <footer className="bg-black text-white pt-8 pb-4 px-5 md:px-10 lg:px-0">
      <div className="flex 2xl:w-[1700px] lg:w-[1200px] lg:flex-row flex-col mx-auto lg:text-start text-center w-full">
        <div className="lg:w-2/5">
          <h1 className="lg:text-4xl text-3xl font-bold">+998 (71) 888-88-88</h1>
          <div className="my-3 flex justify-center items-center 2xl:w-[44%] lg:w-[62%]">
            <a href="#">
              <i class="bx bxl-linkedin 2xl:text-3xl text-2xl"></i>
            </a>
            <a href="#">
              <i class="bx bxl-facebook 2xl:text-3xl text-2xl"></i>
            </a>
            <a href="#">
              <i class="bx bxl-instagram 2xl:text-3xl text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="lg:flex">
          <p className="lg:text-xl">
            SUPPLY PARTNERS ̶  это ...добавить описание компании, миссию и цель.
          </p>
        </div>
      </div>
      <div className="flex lg:mt-0 mt-3 lg:flex-row flex-col 2xl:w-[1700px] lg:w-[1200px] mx-auto lg:text-start text-center">
        <p className="lg:w-2/5">
          © Supply Partners 2024. {t("footer.allRightsReserved")}
        </p>
        <p className="">{t("footer.personalDataPolicy")}</p>
      </div>
    </footer>
  );
};

export default Footer;
