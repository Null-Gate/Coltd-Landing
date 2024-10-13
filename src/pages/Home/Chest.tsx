import Marquee from "react-fast-marquee";
import location from "../../assets/location.svg";
import realtime from "../../assets/file.svg";
import datareport from "../../assets/datareport.svg";
import option from "../../assets/option.svg";
import { Support } from "./Support";

const Chest = () => {
  
  const services = [
    {
      title: "Realtime Tracking",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione ab facilis, fuga repellat magni nihil! Labore aut minima, officiis nemo, magnam voluptatibus, dolorem ab molestiae nostrum in suscipit quidem. Provident!",
      img: location,
    },
    {
      title: "Realtime Tracking",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione ab facilis, fuga repellat magni nihil! Labore aut minima, officiis nemo, magnam voluptatibus, dolorem ab molestiae nostrum in suscipit quidem. Provident!",
      img: realtime,
    },
    {
      title: "Realtime Tracking",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione ab facilis, fuga repellat magni nihil! Labore aut minima, officiis nemo, magnam voluptatibus, dolorem ab molestiae nostrum in suscipit quidem. Provident!",
      img: datareport,
    },
    {
      title: "Realtime Tracking",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione ab facilis, fuga repellat magni nihil! Labore aut minima, officiis nemo, magnam voluptatibus, dolorem ab molestiae nostrum in suscipit quidem. Provident!",
      img: option,
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      <div className="py-16">
        <Marquee gradient gradientWidth={100} autoFill pauseOnHover speed={50}>
          <div className="font-bold text-base lg:text-3xl mx-5 main-color">
            WELCOME TO KARGATE
          </div>
        </Marquee>
      </div>
      <div className="flex flex-col items-start gap-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full gap-5">
          <div className=" text-[30px] lg:text-[50px] text-center font-bold bg-gradient-to-r from-[#800000] via-[#982B1C] to-[#A04747] text-white px-5">
            Our Services
          </div>
          <div className="lg:w-2/4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eaque
            obcaecati odit. Iusto magni sapiente explicabo commodi consequatur
            rerum in tenetur cum eum a enim amet, voluptates fugiat. Magni,
            labore.
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1  gap-10">
          {services.map((el) => {
            return (
              <div
                key={el.img}
                className="rounded-xl flex lg:flex-row flex-col justify-around items-center border-2 h-[300px] border-dashed border-primary bg-[rgb(248,247,244)] px-6 py-3 font-semibold transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[10px_10px_0px_rgb(167,0,0)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
              >
                <div className=" lg:w-2/4 flex flex-col gap-5">
                  <h1 className="lg:text-2xl text-xl main-color font-bold">
                    Realtime Tracking
                  </h1>
                  <p className="line-clamp-3">{el.description}</p>
                </div>
                <div className="lg:w-1/4 w-full h-[100px]">
                  <img className="w-full h-full" src={el.img} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Support/>
    </div>
  );
};

export default Chest;
