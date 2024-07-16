type CalendarBoxProps = {
  title: string;
  color: string;
  orientation: string;
  // data: [];
};

function CalendarBox({ title, color, orientation }: CalendarBoxProps) {
  const data = [
    {
      fecha: "junio",
      dia: 17,
      carrera: "Corre x Quilla",
      lugar: "Barranquilla",
      distancia: "6K,12K,18K",
      link: "https://www.example.com/registro-corre-x-quilla",
    },
    {
      fecha: "junio",
      dia: 17,
      carrera: "Corre x Quilla",
      lugar: "Barranquilla",
      distancia: "6K,12K,18K",
      link: "https://www.example.com/registro-corre-x-quilla",
    },
    {
      fecha: "junio",
      dia: 17,
      carrera: "Corre x Quilla",
      lugar: "Barranquilla",
      distancia: "6K,12K,18K",
      link: "https://www.example.com/registro-corre-x-quilla",
    },
    {
      fecha: "junio",
      dia: 17,
      carrera: "Corre x Quilla",
      lugar: "Barranquilla",
      distancia: "6K,12K,18K",
      link: "https://www.example.com/registro-corre-x-quilla",
    },
    {
      fecha: "junio",
      dia: 17,
      carrera: "Corre x Quilla",
      lugar: "Barranquilla",
      distancia: "6K,12K,18K",
      link: "https://www.example.com/registro-corre-x-quilla",
    },
  ];
  const justifyContent =
    orientation === "left" ? "justify-start" : "justify-end";

  return (
    <div className={`flex ${justifyContent} pb-10`}>
      <div className={`bg-${color} w-5/6 p-10 `}>
        <h1
          className={`flex ${justifyContent} text-6xl text-white font-bold italic mb-5 underline`}
        >
          {title}
        </h1>
        <div className="bg-white px-10 py-2">
          <div className={`grid grid-cols-6 underline font-bold text-xl`}>
            <div>MES</div>
            <div>DIA</div>
            <div>CARRERA</div>
            <div>LUGAR</div>
            <div>DISTANCIA</div>
            <div>LINK</div>
          </div>
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-6 uppercase underline bg-white py-2 px-10"
          >
            <p>{item.fecha}</p>
            <p>{item.dia}</p>
            <p>{item.carrera}</p>
            <p>{item.lugar}</p>
            <p>{item.distancia}</p>
            <p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarBox;
