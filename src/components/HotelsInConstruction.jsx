import { useTranslation } from "react-i18next";

const HotelsInConstruction = () => {
  const { t } = useTranslation("global");

  return (
    <section id="Отели" className="pt-24">
      <div className="lg:w-1/2 font-medium text-xl">
        <h1 className="text-4xl font-extrabold">
          {t('navbar.hotels')}. <span className="text-gray-500">{t('hotelInConstruction.newConstruction')}</span>
        </h1>
        <p className="font-medium text-xl my-5">
          {t('hotelInConstruction.ourB2Bplatform')}
        </p>
        <p className="font-medium text-xl">
          {t('hotelInConstruction.offer')}
        </p>
        <ul className="mb-5 list-disc list-inside">
          <li>{t('hotelInConstruction.FF&OS')}</li>
          <li>{t('hotelInConstruction.engineeringSystems')}</li>
          <li>{t("fireProtectionSystems")}</li>
          <li>{t('hotelInConstruction.equipmentForRestaurants')}</li>
          <li>{t('hotelInConstruction.laundryEquipment')}</li>
          <li>{t('hotelInConstruction.optimizingUtilityCosts')}</li>
          <li>{t('hotelInConstruction.ITEquipment')}</li>
        </ul>
        <p>
          {t('motto')}
        </p>
      </div>
      <div></div>
    </section>
  );
};

export default HotelsInConstruction;
