import hero from "../assets/imgs/hero.png";
import Navbar from "./Navbar";
import Button from "./ui/Button";

const HeroSection = () => {
  return (
    <div className="w-full border h-[88.5vh] -z-50">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${hero})` }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 -z-10"></div>
      {/* <div>
        <Navbar/>
      </div> */}
      <div className="flex top-14 absolute border inset-0 justify-start items-center 2xl:w-[1700px] lg:w-[1200px] mx-auto">
        <div>
          <h1 className="text-white text-4xl font-bold uppercase">
            B2B-ПЛОЩАДКА для HORECA <br /> в Узбекистане
          </h1>
          <p className="text-2xl w-3/5 text-white font-medium my-3">
            Здесь вы приобретаете качественные товары по <br /> разумным ценам
            напрямую от ведущих производителей с четкими сроками доставки и в
            нужное вам время
          </p>
          <Button variant="primary"><p className="font-medium text-xl">Сделать заказ</p></Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
