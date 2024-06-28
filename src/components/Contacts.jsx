import { useState } from "react";
import Button from "./ui/Button";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation("global");
  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section
      id="Контакты"
      className="flex md:flex-row flex-col md:gap-0 gap-10 justify-between items-center lg:w-11/12 pt-24 mb-12"
    >
      <div>
        <h1 className="lg:text-4xl text-3xl font-extrabold">
          {t("navbar.contacts")}.{" "}
          <span className="text-gray-500">{t("contacts.contactUsToday")}</span>
        </h1>
        <form className="md:w-3/4 w-full">
          <div className="my-5 group">
            <input
              type="email"
              name="email"
              className="block p-1.5 w-full lg:text-lg text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 rounded-lg"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contacts.FIO")}
            />
          </div>
          <div className="mb-5 group">
            <input
              type="text"
              name="fullname"
              className="block p-1.5 w-full lg:text-lg text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 rounded-lg"
              value={formData.fullname}
              onChange={handleChange}
              placeholder={t("contacts.phone")}
            />
          </div>
          <div className="mb-5 group">
            <input
              type="text"
              name="phoneNumber"
              className="block p-1.5 w-full lg:text-lg text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 rounded-lg"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="mb-5 group">
            <textarea
              name="message"
              className="block p-1.5 rounded-lg w-full lg:text-lg text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contacts.yourRequest")}
            />
          </div>
          <Button variant="secondary">
            <p className="text-lg">{t("contacts.send")}</p>
          </Button>
        </form>
      </div>
      <div className="font-medium lg:text-xl">
        <h1 className="lg:text-3xl text-2xl font-bold">{t("contacts.address")}</h1>
        <p className="my-5">{t("contacts.locattion")}</p>
        <p>+998 (71) 888-88-88</p>
        <p className="my-5">order@supplypartners.uz</p>
        <h1 className="lg:text-3xl text-2xl font-bold">{t("contacts.workOur")}</h1>
        <p className="mt-5">{t("contacts.mondayToFriday")}</p>
      </div>
    </section>
  );
};

export default Contacts;
