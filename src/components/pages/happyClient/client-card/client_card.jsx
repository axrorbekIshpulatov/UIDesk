import { PublicP } from "../../../common/PublicP";

export const ClientCard = ({ avatar, name, job, description }) => {
  return (
    <div className="flex flex-col bg-white-1 shadow-lg w-[514px] h-[347px] rounded-lg gap-[32px]">
      <div className="flex items-center gap-[37px] mt-[40px] ml-[25px]">
        <img src={avatar} alt="" />
        <p className="flex flex-col">
          <span>{name}</span>
          <span>{job}</span>
        </p>
      </div>
      <PublicP style={"font-sharp-sans px-[25px] text-[17px]"}>
        {description}
      </PublicP>
    </div>
  );
};
