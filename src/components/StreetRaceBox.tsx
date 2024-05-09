type StreetRaceBoxProps = {
  color: string;
};

function StreetRaceBox({ color }: StreetRaceBoxProps) {
  return (
    <article className={`flex bg-${color} flex-col rounded-md w-3/12`}>
      <div className="flex w-full border-white border-b-2 my-8 justify-center">
        <h1 className="text-5xl text-white font-bold">CALLE</h1>
      </div>
      <div className="flex flex-col w-full my-4 gap-3 items-center ">
        <p className="text-2xl text-white font-bold">MAYO 05</p>
        <p className="text-2xl text-white font-bold text-center">
          CORRE X QUILLA BARRANQUILLA 6K,12K,18K
        </p>
      </div>
      <p className="text-2xl text-white font-bold underline text-center align-self-bottom">
        ¡INSCRIBETE YA!
      </p>
    </article>
  );
}

export default StreetRaceBox;
