type StreetRaceBoxProps = {
  color: string;
};

function StreetRaceBox({ color }: StreetRaceBoxProps) {
  return (
    <article className={`flex bg-${color} flex-col rounded-md lg:w-3/12 pb-24 mx-12`}>
      <div>
        <div className="flex w-full border-white border-b-2 my-8 justify-center">
          <h1 className="text-5xl text-white font-bold">CALLE</h1>
        </div>
        <div className="flex flex-col w-full my-4 gap-3 items-center p-5">
          <p className="text-2xl text-white font-bold">MAYO 05</p>
          <p className="text-2xl text-white font-bold text-center ">
            CORRE X QUILLA BARRANQUILLA 
          </p>
          <p className="text-2xl text-white font-bold text-center"> 6K,12K,18K
          </p>
        </div>
        <p className="text-2xl text-white font-bold underline text-center pt-5 px-5">
          ¡INSCRIBETE YA!
        </p>
      </div>
    </article>
  );
}

export default StreetRaceBox;
