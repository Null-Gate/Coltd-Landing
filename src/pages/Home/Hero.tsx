import { BiRightArrow } from "react-icons/bi";
import logo from "../../assets/KarGate.png";
import { HeroWord } from "../../components/HeroWord";

const Hero = () => {
  const words = ["JOURNEYS", "ROADS", "HEARTS", "BUSINESS", "PEOPLES"];
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between w-full ">
      <div className=" w-full lg:w-3/5 flex flex-col items-start gap-10  ">
        <div className="lg:text-[60px] text-[25px] font-bold main-color uppercase ">
          Empowering Efficiency <br className="lg:hidden block" /> linking
          <HeroWord words={words} /> <br className="hidden lg:block" /> Driving
          innovation
        </div>
        <div className="text-sm lg:text-base lg:w-8/12 ">
          At <span className="text-primary">Kargate</span> , we are transforming
          the transportation industry by providing a digital platform that
          connects drivers, car owners, and goods traders. Our mission is to
          make transportation easier, faster, and safer for everyone. With
          features like GPS tracking, real-time vehicle diagnostics, automatic
          insurance notifications, and a rewards system, we offer a modern
          solution to outdated phone-based systems. Whether you're managing
          deliveries or ensuring your vehicle's health, Kargate is here to
          streamline your journey and help you grow.
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
