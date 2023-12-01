import vegtables from "../../../../public/mock-imges/vegetables.png"
import { Button } from "../../common/Button";
export const FreshVegetables = () => {
    return (
      <div className="flex items-center justify-center gap-[4rem] mb-[7rem]">
        <img src={vegtables} alt="" className="w-[35rem] h-[30rem]"/>
        <div>
          <h2 className="font-sharp-sans text-[3.5rem] mb-[3rem] text-[#151414]">
            Fresh Vegetables
            Every Day
            </h2>
            <p className="text-[#515251] text-[1.6rem] font-sharp-sans mb-[3rem]">
            Healthy life as informed declared we enjoy the margaret.
             Joy horrible moreover man feelings own shy. Request norland
              neither mistake for yet. Between the for morning assured 
              country believe.
            </p>
            <Button className="text-[white]">Learn more</Button>
        </div>
      </div>
    );
  };