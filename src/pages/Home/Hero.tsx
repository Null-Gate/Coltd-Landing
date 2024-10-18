import { BiRightArrow } from "react-icons/bi";
import logo from "../../assets/KarGate.png";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between w-full ">
      <div className=" w-full lg:w-2/5 flex flex-col items-start gap-10  ">
        <div className="lg:text-[60px] text-[30px] font-bold main-color uppercase ">
          revolutionalizing the transportation filed.
        </div>
        <div className="text-base ">
          <span className="text-primary">Kargate</span> is a groundbreaking app designed to transform the
          transportation landscape by seamlessly integrating GPS technology, OBD
          (On-Board Diagnostics) data, and a real-time insurance system.
        </div>
        <div className="classic-btn">
          EXPLORE MORE <BiRightArrow />
        </div>
      </div>
      <div className=" w-full lg:w-2/5 ">
        <img className="w-16 h-16" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Hero;
