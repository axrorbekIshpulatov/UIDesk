import { Heading2 } from "../../common/Heading2";
import { PublicP } from "../../common/PublicP";
import shef from "/public/mock-imges/chef.png";

export const Cooker = () => {
  return (
    <div className="flex justify-items-center items-center">
      <div>
        <Heading2 style="mb-8">
          Cooked by the <br /> Best Chefs
        </Heading2>
        <PublicP style="mb-7">
          Believing neglected so so allowance existence <br /> departure in. In
          design active temper be <br /> uneasy. Thirty for remove plenty regard
          you <br /> summer though. He preference connection <br /> astonished
          on of ye.
        </PublicP>
        <PublicP>A guaranteed delicious meal</PublicP>
        <PublicP>Food is guaranteed hygienic</PublicP>
        <PublicP>Cooked quickly</PublicP>
      </div>
      <div>
        <img src={shef} alt="shef" className="w-[669.5px] h-[584px]" />
      </div>
    </div>
  );
};
