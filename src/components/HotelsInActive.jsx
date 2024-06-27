const HotelsInActive = () => {
  return (
    <section className=" pt-24">
      <div className="w-1/2 font-medium text-xl">
        <h1 className="text-4xl font-extrabold">
          Отели. <span className="text-gray-500">Действующие.</span>
        </h1>
        <p className="font-medium text-xl my-5">
          Если вы бутик-отель до 100 номеров или же отель полного цикла от 100
          номеров и выше, на нашей площадке вы сможете приобрести товары,
          которые аккредитованы международными гостиничными брендами для
          следующих служб вашего отеля:
        </p>
        {/* <p className="font-medium text-xl">
          Мы представляем ведущих поставщиков для:
        </p> */}
        <ul className="mb-5 list-disc list-inside">
          <li>Служба приема и размещения</li>
          <li>Хозяйственная служба или служба эксплуатации номерного фонда</li>
          <li>Противопожарных систем, оборудования и мебели</li>
          <li>Инженерная служба</li>
          <li>Служба питания</li>
          <li>Служба безопасности</li>
        </ul>
        <p>
          Развивайте свой бизнес в HORECA с надежным партнером. Сделайте запрос
          уже сейчас и получите каталог с расценками на товары для заказа.
        </p>
      </div>
      <div></div>
    </section>
  );
};

export default HotelsInActive;
