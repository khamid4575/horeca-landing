import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("global");
  return (
    <footer className="bg-black text-white pt-8 pb-4">
      <div className="flex 2xl:w-[1700px] lg:w-[1200px] mx-auto ">
        <div className=" w-2/5">
          <h1 className="text-4xl font-bold">+998 (71) 888-88-88</h1>
          <div className="my-5 flex justify-center items-center w-[62%]">
            <a href="#">
              <i class="bx bxl-linkedin text-2xl"></i>
            </a>
            <a href="#">
              <i class="bx bxl-facebook text-2xl"></i>
            </a>
            <a href="#">
              <i class="bx bxl-instagram text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col ">
          <p className="text-xl">
            SUPPLY PARTNERS ̶ это ...добавить описание компании, миссию и цель.
          </p>
        </div>
      </div>
      <div className="flex 2xl:w-[1700px] lg:w-[1200px] mx-auto  justify-start items-start">
        <p className="w-2/5">
          © Supply Partners 2024. {t("footer.allRightsReserved")}
        </p>
        <p className="">{t("footer.personalDataPolicy")}</p>
      </div>
    </footer>
  );
};

export default Footer;
