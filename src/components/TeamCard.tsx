import LogoCoRunning from "../assets/images/logo.png";

function TeamCard() {
  const data = [
    { name: "RUNNING TEAM1", instagram: "Runninteam", ubicacion: "Bogotá D.C" },
    { name: "RUNNING TEAM2", instagram: "Runninteam", ubicacion: "Bogotá D.C" },
    { name: "RUNNING TEAM3", instagram: "Runninteam", ubicacion: "Bogotá D.C" },
  ];
  const colors = ["bg-primary", "bg-neutral", "bg-accent"];
  return (
    <div>
      {data.map((team, index) => (
        <div
          className={`flex ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          } pb-10`}
          key={index}
        >
          <div
            className={`${
              colors[index % colors.length]
            } w-11/12 md:w-5/6  p-5 md:p-10 text-white italic ${
              index % 2 !== 0
                ? "rounded-l-xl md:rounded-bl-full"
                : " rounded-r-xl md:rounded-br-full"
            }`}
          >
            <div
              className={`flex items-center gap-8 md:gap-10 ${
                index % 2 !== 0 ? "flex-row-reverse " : ""
              }`}
            >
              <img
                className="h-20  w-28 md:w-36 rounded-sm"
                src={LogoCoRunning}
                alt="logo"
              />
              <div className={`ml-4 ${index % 2 !== 0 ? "text-right" : ""}`}>
                <div className="text-4xl font-bold">{team.name}</div>
                <div className="text-2xl">@{team.instagram}</div>
                <div className="text-2xl">{team.ubicacion}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamCard;
