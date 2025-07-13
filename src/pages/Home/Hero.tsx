import AnimateButton from "../../lib/AnimateButton";
import HeroDesign from "./HeroDesign";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between w-full ">
      <div className="w-full lg:w-3/5">
        <HeroDesign />
      </div>

      <div className=" w-full lg:w-2/5 flex flex-col items-center gap-10  ">
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
        <div className="">
          <AnimateButton text={"Explore more"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
