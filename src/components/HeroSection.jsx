import hero from "../assets/imgs/hero.png";
import Navbar from "./Navbar";
import Button from "./ui/Button";
import arrowDown from "../assets/imgs/down-arrow.svg";

const HeroSection = () => {
  return (
    <section className="w-full h-[88.5vh] -z-50">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${hero})` }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 -z-10"></div>
      <div className="flex top-14 absolute inset-0 justify-start items-center 2xl:w-[1700px] lg:w-[1200px] mx-auto">
        <div>
          <h1 className="text-white text-4xl font-bold uppercase">
            B2B-ПЛОЩАДКА для HORECA <br /> в Узбекистане
          </h1>
          <p className="text-2xl w-3/5 text-white font-medium my-3">
            Здесь вы приобретаете качественные товары по <br /> разумным ценам
            напрямую от ведущих производителей с четкими сроками доставки и в
            нужное вам время
          </p>
          <a href="#Контакты">
            <Button variant="primary">
              <p className="text-xl">Сделать заказ</p>
            </Button>
          </a>
        </div>
      </div>
      {/* <div > */}
        <a href="#Отели" className="absolute inset-x-0 hover:translate-y-3 rounded-full transition-all duration-300 w-20 h-20 bottom-8 text-white flex justify-center items-center mx-auto ">
          <img src={arrowDown} alt="" className="w-14 h-14" />
        </a>
      {/* </div> */}
    </section>
  );
};

export default HeroSection;
