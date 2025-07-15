import { Helmet } from "react-helmet-async";
import Paragraph from "./About/Paragraph";
import Footer from "./Footer";

const AboutUs = () => {
  const aboutData = [
    {
      num: "01",
      title: "OUR MISSION!",
      para: "At Kargate, our main goal is to revolutionize the transportation industry as society and modern technology evolve. We aim to build a seamless and interconnected transportation ecosystem where drivers, car owners, and goods traders can find and complete jobs easily, faster, and with greater safety.By transitioning from the old methods of phone-based communication to an efficient digital platform, we empower our users with real-time solutions. Through our advanced features like GPS tracking, real-time car diagnostics via OBD, and automatic insurance notifications, we ensure that everyone in the transportation chain can operate smoothly with peace of mind.Kargate is designed to make every step of the journey easier. Whether you are looking for a driver, tracking goods, or monitoring your vehicle’s health, our app is there to assist. We believe in leveraging technology to provide better opportunities and smoother operations for the transportation community, so you can focus on growing your business while we take care of the rest.",
    },
    {
      num: "02",
      title: "OUR FEATURES!",
      para: "Traditional phone-based communication systems in the transportation industry are often inefficient and limited. To arrange transportation or goods delivery, you typically need to know the contact information of the other party, which limits your reach and reduces the number of opportunities you can access. This method also comes with additional costs and time constraints, making it harder for you to grow your business and complete jobs efficiently.Kargate changes all of this by offering a reliable, no-cost, and widely accessible digital platform. With Kargate, you no longer need to rely on knowing someone’s contact details to find a driver or track goods. Our platform connects drivers, car owners, and goods traders in one place, extending your network and providing access to new opportunities.Our GPS tracking system allows goods traders and car owners to track the exact location of their vehicles and packages in real time. This feature helps users know exactly when their car or goods will arrive, giving them more time to plan and make informed decisions. No more guessing or waiting by the phone—Kargate keeps you connected to your goods and vehicles, reducing stress and delays.For car owners, our app offers real-time OBD (On-Board Diagnostics) integration, providing crucial information about your vehicle's health. This ensures that you can address potential issues before they become costly problems, adding an extra layer of security and safety.Additionally, automatic insurance notifications keep you updated on the status of your coverage. This real-time feature means that you’re always aware of your insurance situation, ensuring you’re never caught off guard without protection.Lastly, our points system brings an added layer of benefits to the experience. As you use Kargate, you earn points that can be redeemed for discounts on premium features, as well as at restaurants, retail shops, and more. We believe in rewarding our users for their loyalty and engagement, giving them extra value and making every job or trip more rewarding.",
    },
    {
      num: "03",
      title: "OUR TEAM / STORY!",
      para: "Kargate's story begins with my background. I’m Linus Walker, and my father has been a car owner for years, deeply involved in the transportation field. Naturally, he wanted me to follow in his footsteps, but I always had a passion for technology. I loved writing code and found the world of transportation a bit mundane at first.One day, I thought, why not merge the two? I began working on an idea for a transportation app, though, at the time, it was just a clone of other existing apps in the market. It wasn’t the groundbreaking solution that Kargate has become. But after talking with two of my friends, Ye Min Aung (aka Rizekishimaro) and Thant Zin Min (aka Vixx Grego), we spent hours brainstorming, and that’s when the real spark for Kargate was born. We didn’t want to just copy what was already out there—we wanted to create something new, something that truly solved the inefficiencies in the industry.Thant Zin Min believed in the idea so much that he left his job to join me as the Co-Founder of Kargate. Unfortunately, Ye Min Aung couldn’t join us due to personal circumstances, but his ideas still played a crucial role in shaping the app. Together, Thant Zin Min and I built a working demo of the web app.Our journey took an exciting turn when we got support from my brother Ethan, who helped us get accepted into Build Myanmar’s Builder in Residence program, where we secured our first round of funding. From there, we were joined by dedicated volunteers, Min Thiha, Wai Linn Aung, and Thar Kyaw, all of whom believed in our mission to revolutionize the transportation field.Kargate wouldn’t be where it is today without the shared vision and hard work of our growing team. Together, we aim to create a future where transportation is smarter, faster, and more efficient for everyone.",
    },
  ];
  return (
    <>
    <Helmet>
        <title>KarGate - Transport & Tracking Platform in Asia</title>
        <meta name="description" content="KarGate is a transport platform offering real-time vehicle tracking, smart logistics, and driver-car matching in Asia." />
        <link rel="canonical" href="https://kargate.site/" />
        <meta property="og:title" content="KarGate - Smarter Transport in Asia" />
        <meta property="og:description" content="Book and track transport smartly with KarGate." />
        <meta property="og:url" content="https://kargate.site/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

    <div className="flex flex-col items-center py-10 ">
      {aboutData.map((el) => {
        return <Paragraph para={el.para} title={el.title} num={el.num} />;
      })}
      <Footer />
    </div>

  </>
  );
};

export default AboutUs;
