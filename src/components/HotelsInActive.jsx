import { useTranslation } from "react-i18next";

const HotelsInActive = () => {
  const { t } = useTranslation("global");

  return (
    <section className="pt-24">
      <div className="lg:w-1/2 font-medium text-xl">
        <h1 className="text-4xl font-extrabold">
          {t('navbar.hotels')}. <span className="text-gray-500">{t('hotelInOperation.inOperation')}</span>
        </h1>
        <p className="font-medium text-xl my-5">
          {t('hotelInOperation.offer')}
        </p>
        <ul className="mb-5 list-disc list-inside">
          <li>{t('hotelInOperation.receptionService')}</li>
          <li>{t('hotelInOperation.housekeeping')}</li>
          <li>{t('fireProtectionSystems')}</li>
          <li>{t('hotelInOperation.engineeringService')}</li>
          <li>{t('hotelInOperation.foodService')}</li>
          <li>{t('hotelInOperation.securityService')}</li>
        </ul>
        <p>
          {t('motto')}
        </p>
      </div>
      <div></div>
    </section>
  );
};

export default HotelsInActive;
