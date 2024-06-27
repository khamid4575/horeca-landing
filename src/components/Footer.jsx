const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8 pb-4">
      <div className="flex 2xl:w-[1700px] lg:w-[1200px] mx-auto">
        <div className="mr-32">
          <h1 className="text-4xl font-bold">+998 (71) 888-88-88</h1>
          <div className="my-5 flex justify-center items-center">
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
          <p>© Supply Partners 2024. Все права защищены.</p>
        </div>
        <div className="relative">
          <p className="text-xl">
            SUPPLY PARTNERS ̶ это ...добавить описание компании, миссию и цель.
          </p>
          <p className="bottom-0 absolute">Политика о персональных данных</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
