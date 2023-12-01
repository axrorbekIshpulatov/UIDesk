import { Button } from "../../common/Button";
import {Heading2} from "../../common/Heading2"
import { PublicP } from "../../common/PublicP";
import AboutImg1 from "/public/mock-imges/aboutImg1.png"
import AboutImg2 from "/public/mock-imges/aboutImg2.png"
import AboutImg3 from "/public/mock-imges/aboutImg3.png"

export const AboutUs = () => {
    return (
    <div className="flex items-center justify-between gap-[90px] my-[120px]">
     <div className="w-[50%]">
      <Heading2>About Us</Heading2>
      <PublicP>Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and does not contain genetically modified organisms (GMOs). Organic foods include fresh produce, meats, and dairy products as well as processed foods such as crackers, drinks, and frozen meals.</PublicP>
      <Button>Learn More</Button>
     </div>
     <div className="flex gap-[30px]">
       <div className="flex flex-col gap-[40px]">
        <img src={AboutImg1} alt="" className="inline-block" />
        <img src={AboutImg2} alt="" className="inline-block" />
       </div>
       <div className="pt-[62px]">
        <img src={AboutImg3} alt="" className="inline-block"/>
       </div>
     </div>
    </div>);
  };