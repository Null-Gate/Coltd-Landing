import location from "../../assets/location.svg";
import realtime from "../../assets/file.svg";
import datareport from "../../assets/datareport.svg";
import option from "../../assets/option.svg";
import { Support } from "./Support";
import ScrollVelocity from "./VelocityScroll";
import AnimateCard from "./AnimateCard";

const Chest = () => {
  const services = [
    {
      num: "00",
      title: "Realtime Tracking",
      description:
        "Kargate’s GPS real-time tracking ensures the safety of your vehicles and packages. Stay updated on their exact location, receive alerts for any route changes, and enjoy peace of mind with reliable tracking during transit.",
      img: location,
    },
    {
      num: "01",
      title: "Car Info Report",
      description:
        "Kargate’s real-time OBD tracking provides car owners with instant updates on their vehicle’s condition. This feature helps prevent theft by monitoring vital car data, such as unauthorized tire changes, ensuring owners are always aware of any suspicious activity.",
      img: realtime,
    },
    {
      num: "02",
      title: "Insurance Connection",
      description:
        "Kargate’s real-time insurance connection ensures the safety of owners, drivers, and packages. Instantly notify your insurer of any incidents during transit, providing fast protection and peace of mind for all involved.",
      img: datareport,
    },
    {
      num: "03",
      title: "Reward System",
      description:
        "Kargate’s rewards system lets users collect points for every trip. These points can be exchanged for premium app features, discounts at restaurants, clothing stores, and much more, offering added value with every use.",
      img: option,
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      <div className="py-16">
        <ScrollVelocity
          texts={["KarGate", "Scroll Down"]}
          velocity={50}
          className="custom-scroll-text text-zinc-800"
        />
      </div>
      <div className="flex flex-col items-start gap-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full gap-5">
          <div className=" text-[30px] lg:text-[50px] text-center font-bold bg-gradient-to-r from-[#800000] via-[#982B1C] to-[#A04747] text-white px-5">
            Our Services
          </div>
          <div className="lg:w-2/4  ">
            <span className="text-primary">Kargate</span> is a groundbreaking
            app designed to transform the transportation landscape by seamlessly
            integrating GPS technology, OBD (On-Board Diagnostics) data, and a
            real-time insurance system.
          </div>
        </div>
        <div className="grid lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1  gap-10 w-full">
          {services.map((el) => {
            return <AnimateCard data={el} key={el.description} />;
          })}
        </div>
      </div>
      <Support />
    </div>
  );
};

export default Chest;
