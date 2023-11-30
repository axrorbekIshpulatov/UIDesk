import { Button } from "../../common/Button";
import { PublicP } from "../../common/PublicP";
import hero from "../../../../public/mock-imges/header-Image.png";
import bg_elements from "../../../../public/icons/bg_elements.svg"

export const Hero = () => {
  return (<div className="flex relative ">
    <div className=" pr-[549px] pt-[90px]">
      <h1 className="text-[#181D19] text-[76px] pb-[30px]">Just <span className="text-[#5FB848]">Eat healthy</span> food to live a healthier life</h1>
      <PublicP style={" pr-[90px]  mb-[50px] "} >Enjoy a healthy life by eating healthy foods that
        have extraordinary flavors that make your life healthier
        for today and in the future
      </PublicP>
      <Button style={"bg-green-1 text-white-1 mb-[109px]"}>Order Now</Button>
    </div>
    <div className="absolute top-[-40px] right-[-30px] w-[774px]">
      <img src={bg_elements} alt="" />
    </div>
    <div className="absolute top-[-60px] right-[-50px] w-[790px]">
      <img src={hero} alt="hero img" />
    </div>
  </div>);
};
