//             imgs              //

import greenS from "../../../../public/mock-imges/green-salad.png"
import beefS from "../../../../public/mock-imges/beef-salad.png"
import nutS from "../../../../public/mock-imges/nut-salad.png"
import { PublicP } from "../../common/PublicP";
import { Heading2 } from "../../common/Heading2"
import { Button } from "../../common/Button"
export const Special = () => {
  return (
    <div className="text-center">
      <div>
        <Heading2 >Special Dishes for you </Heading2>
        <PublicP >Made with premium & 100% Organic ingredients</PublicP>
      </div>
      <div className=" flex gap-[45px]">
        <div className=" w-[356px] h-[520px] rounded-[20px] my-[60px] bg-[#EBEBEB]">

          <div className="inline-block mt-[50px] ">
            <img src={greenS} alt="green salad" />
          </div>
          <p className="text-[#181D19] text-[30px] font-[770] mt-[27px] mb-[20px]"> Green Salad </p>
          <p className="leading-[28px] text-[18px] font-[750] leading-[28px]"> A salad combined witha delicious <br />
            cut of bacon and mixed with tasty <br />
            and fresh sesome oil.
          </p>

        </div>

        <div className=" w-[356px] h-[520px] rounded-[20px] my-[60px] bg-[#EBEBEB]">

          <div className="inline-block mt-[50px] ">
            <img src={beefS} alt="green salad" />
          </div>
          <p className="text-[#181D19] text-[30px] font-[770] mt-[27px] mb-[20px]"> Beef Salad </p>
          <p className="leading-[28px] text-[18px] font-[750] leading-[28px]"> A salad combined witha delicious <br />
            cut of bacon and mixed with tasty <br />
            and fresh sesome oil.
          </p>

        </div >

        <div className=" w-[356px] h-[520px] rounded-[20px] my-[60px] bg-[#EBEBEB]">

        <div className="inline-block mt-[50px] ">
            <img src={nutS} alt="green salad" />
          </div>
          <p className="text-[#181D19] text-[30px] font-[770] mt-[27px] mb-[20px]"> Nut Salad </p>
          <p className="leading-[28px] text-[18px] font-[750] leading-[28px]"> A salad combined witha delicious <br />
            cut of bacon and mixed with tasty <br />
            and fresh sesome oil.
          </p>
            
        </div>

      </div>
      <Button style='bg-[green] text-[white]'>View All</Button>
    </div>
  )
};
