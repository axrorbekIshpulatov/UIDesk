import { Heading2 } from "../../common/Heading2";
import check from "/public/mock-imges/check-img.png";
import locetion from "/public/mock-imges/live-order.png";
import organic from "/public/mock-imges/leaf-img.png";

export const WhyChoose = () => {
  return (
    <div className="text-center mb-[80px]">
      <Heading2>Why Choose US?</Heading2>
      <div className="mt-[15px]">
        <h5 className="text-[#3B433E] text-[24px]">Organic food is grown without the use of synthetic chemicals</h5>
      </div>
      <div className="flex justify-center gap-[120px] mt-[64px] mb-[60px]">
        <div className="text-center ">
          <img className="inline-block" src={check} alt="check" />
          <h3 className="text-[28px] mt-[36px] mb-[18px]">Easy to order</h3>
          <h4>foods include fresh produce, <br />
            meats as well as processed</h4>
        </div>
        <div className="ext-center ">
          <img className="inline-block" src={locetion} alt="check" />
          <h3 className="text-[28px] mt-[36px] mb-[18px]">Live Order</h3>
          <h4>Place your online Order easily <br />
            and get the food instantly</h4>
        </div>
        <div className="text-center">
          <img className="inline-block" src={organic} alt="check" />
          <h3 className="text-[28px] mt-[36px] mb-[18px]">100% Organic</h3>
          <h4>Organic food is grown without <br />
            the use of synthetic chemicals</h4>
        </div>
      </div>
      <div className="flex justify-center gap-[150px]">
        <div>
          <h2 className="text-[44px] font-bold">40+</h2>
          <h3 className="text-[20px]">Food Partners</h3>
        </div>
        <div>
          <h2 className="text-[44px] font-bold">459+</h2>
          <h3 className="text-[20px]">Trusted Clients</h3>
        </div>
        <div>
          <h2 className="text-[44px] font-bold">12k+</h2>
          <h3 className="text-[20px]">Order Online</h3>
        </div>
      </div>
    </div>
  );
};
