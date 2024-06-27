import { useState } from "react";
import Button from "./ui/Button";

const Contacts = () => {
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
      className="flex justify-between  items-center w-11/12 pt-24 mb-12"
    >
      <div>
        <h1 className="text-4xl font-extrabold">
          Контакты.{" "}
          <span className="text-gray-500">Свяжитесь с нами уже сегодня.</span>
        </h1>
        <form className="w-3/4">
          <div className="my-5 group">
            <input
              type="email"
              name="email"
              className="block p-1.5 w-full text-lg text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 rounded-lg"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="ФИО"
            />
          </div>
          <div className="mb-5 group">
            <input
              type="text"
              name="fullname"
              className="block p-1.5 w-full text-lg text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 rounded-lg"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Телефон"
            />
          </div>
          <div className="mb-5 group">
            <input
              type="text"
              name="phoneNumber"
              className="block p-1.5 w-full text-lg text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 rounded-lg"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="mb-5 group">
            <textarea
              name="message"
              className="block p-1.5 rounded-lg w-full text-lg text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600"
              value={formData.message}
              onChange={handleChange}
              placeholder="Ваш запрос"
            />
          </div>
          <Button variant="secondary"><p className="text-lg">Отправить</p></Button>
        </form>
      </div>
      <div className="font-medium text-xl">
        <h1 className="text-3xl font-bold">Адрес</h1>
        <p className="my-5">
          Узбекистан, 100100, Ташкент, Яккасарайский район, улица Бобура 34
        </p>
        <p>+998 (71) 888-88-88</p>
        <p className="my-5">order@supplypartners.uz</p>
        <h1 className="text-3xl font-bold">Часы работы</h1>
        <p className="mt-5">
          Мы работаем для вас с понедельника по пятницу с 09:00 до 18:00
        </p>
      </div>
    </section>
  );
};

export default Contacts;
