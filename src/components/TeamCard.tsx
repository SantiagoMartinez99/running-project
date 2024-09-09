import InstagramIcon from "../assets/icons/icons8-instagram.svg";
import DialogIcon from "../assets/icons/icons8-burbuja-de-diálogo.svg";
type Team = {
  id?: string;
  NAME: string;
  HEYLOURL: string;
  INSTAGRAMURL: string;
  IMAGE: string;
};

type TeamCardProps = {
  teams: Team[];
};

function TeamCard({ teams }: TeamCardProps) {
  const colors = ["bg-primary", "bg-neutral", "bg-accent"];
  return (
    <div>
      {teams.map((team, index) => (
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
                className="h-20  w-20 md:w-20 rounded-sm"
                src={team.IMAGE}
                alt="logo"
              />
              <div
                className={`ml-4 flex flex-col ${
                  index % 2 !== 0 ? "text-right" : ""
                }`}
              >
                <p className="text-4xl font-bold">{team.NAME}</p>
                <a
                  className="text-2xl underline inline-flex"
                  href={`${team.INSTAGRAMURL}`}
                >
                  <img
                    className="h-10 mr-2"
                    src={InstagramIcon}
                    alt="Instagram Icon"
                  />
                  Instagram
                </a>

                <a
                  className="text-2xl underline inline-flex"
                  href={`${team.HEYLOURL}`}
                >
                  <img
                    className="h-10 mr-2"
                    src={DialogIcon}
                    alt="Instagram Icon"
                  />
                  Heylo
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamCard;
