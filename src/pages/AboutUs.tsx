import Paragraph from "./About/Paragraph";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center py-10 ">
      <Paragraph num={"01"} />
      <Paragraph num={"02"} />
      <Paragraph num={"03"} />
      <Footer/>
    </div>
  );
};

export default AboutUs;
