import { BiRightArrow } from "react-icons/bi";
import logo from "../../assets/KarGate.png";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between w-full ">
      <div className=" w-full lg:w-2/5 flex flex-col items-start gap-10  ">
        <div className="lg:text-[60px] text-[30px] font-bold main-color ">
          NAVIGATING THE DIGITAL LANDINGSCAPE FOR SUCCESS.
        </div>
        <div className="text-base ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          eaque doloribus quibusdam ullam fugit ipsa suscipit fuga eos commodi.
          Adipisci modi hic vel perferendis blanditiis facere dolores natus,
          minima mollitia?
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
