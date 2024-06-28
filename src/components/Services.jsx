import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation("global");

  return (
    <section id="Услуги" className="pt-24">
      <div className="lg:w-2/3 font-medium text-xl">
        <h1 className="text-4xl font-extrabold">
          {t('navbar.services')}. {" "}
          <span className="text-gray-500">
            {t('services.forHotelAndRestaurantBusiness')}
          </span>
        </h1>
        <p className="mt-5">{t('services.offer')}</p>
        <ul className="mb-5 list-disc list-inside">
          <li>{t('services.hotelConsultantForMarketResearch')}</li>
          <li>{t('services.architectForTheProject')}</li>
          <li>{t('services.accreditedInteriorDesigners')}</li>
          <li>{t('services.technicalConsultantForProjectManager')}</li>
          <li>{t('services.specializedConsultants')}</li>
          <li>{t('services.managementCompanies')}</li>
          <li>{t('services.generalManagerSelection')}</li>
          <li>{t('services.selectionAndNegotiations')}</li>
          <li>{t('services.trainings')}</li>
        </ul>
        <p>
          {t('motto')}
        </p>
      </div>
      <div></div>
    </section>
  );
};

export default Services;
