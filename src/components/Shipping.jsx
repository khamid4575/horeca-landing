import { useTranslation } from "react-i18next";

const Shipping = () => {
  const { t } = useTranslation("global");

  return (
    <section id="shipping" className="pt-24">
      <div className="lg:w-10/12 font-medium text-xl">
        <h1 className="text-4xl font-extrabold">
          {t('navbar.shipping')}.{" "}
          <span className="text-gray-500">{t('shippingAndPayment.productAndService')}</span>
        </h1>
        <p className="my-5">
          {t('shippingAndPayment.logistics')}
        </p>
        <p>{t('shippingAndPayment.paymentMethods')}</p>
        <p className="my-5">
          {t('shippingAndPayment.cashPayment')}
          <br />
          {t('shippingAndPayment.cashPaymentProcess')}
        </p>
        <p>
          {t('shippingAndPayment.advantageOfPayingWitchCash')}
        </p>
        <p className="mt-5">
          {t('shippingAndPayment.cashlessPayments')}
          <br />
          {t('shippingAndPayment.visaAndMasterCard')}
        </p>
      </div>
      <div></div>
    </section>
  );
};

export default Shipping;
