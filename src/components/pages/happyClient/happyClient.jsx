import { Heading2 } from "../../common/Heading2";
import { ClientCard } from "./client-card/client_card";

import avatar1 from "/mock-imges/halil-nazir.png";
import avatar2 from "/mock-imges/zeeshan-anwer.png";
import arrows from "/icons/Arrows.svg";

export const HappyClient = () => {
  return (
    <div className="bg-[#FCFCFC] flex flex-col items-center">
      <Heading2 style={"font-sharp-sans text-center mb-[47px] mt-[70px]"}>
        Happy Clients Says
      </Heading2>
      <div className="flex gap-[25px]">
        <ClientCard
          name={"KHALIL NAZIR"}
          job={"CEO of UI.Desk"}
          description={
            "Thirty for remove plenty regard you summer though. He preference Partiality on or continuing in particular principles as. Do believing oh disposing to supported allowance we."
          }
          avatar={avatar1}
        />
        <ClientCard
          name={"ZEESHAN ANWER"}
          job={"CEO of UI Box"}
          description={
            " Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly."
          }
          avatar={avatar2}
        />
      </div>
      <img src={arrows} alt="" className="mt-[50px] mb-[70px]" />
    </div>
  );
};
