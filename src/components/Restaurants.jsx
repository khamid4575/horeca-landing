import { useTranslation } from "react-i18next";

const Restaurants = () => {
  const { t } = useTranslation("global");

  return (
    <section id="Рестораны" className="pt-24">
      <div className="lg:w-1/2 font-medium text-xl">
        <h1 className="text-4xl font-extrabold">
          {t('restaurantsAndBars.title')} {" "}
          <span className="text-gray-500">{t('restaurantsAndBars.inOperationAndConstruction')}</span>
        </h1>
        <p className="font-medium text-xl my-5">
          {t('restaurantsAndBars.offer')}
        </p>
        <p className="font-medium text-xl">
          {t('hotelInConstruction.offer')}
        </p>
        <ul className="mb-5 list-disc list-inside">
          <li>{t('hotelInConstruction.engineeringSystems')}</li>
          <li>{t('fireProtectionSystems')}</li>
          <li>{t('hotelInConstruction.equipmentForRestaurants')}</li>
          <li>{t('hotelInConstruction.ITEquipment')}</li>
          <li>{t('restaurantsAndBars.hygieneAndConsumables')}</li>
          <li>{t('restaurantsAndBars.cleaningEquipment')}</li>
          <li>{t('restaurantsAndBars.packaging')}</li>
        </ul>
        <p>
          {t('restaurantsAndBars.makeARequestNow')}
        </p>
      </div>
      <div></div>
    </section>
  );
};

export default Restaurants;
