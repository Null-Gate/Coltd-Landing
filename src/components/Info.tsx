import {
  FiCreditCard,
  FiMail,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import React from "react";
import { IconType } from "react-icons/lib";

// Define the props interface for the Card component
interface CardProps {
  title: string;
  subtitle: string;
  href: string;
  Icon: IconType;
}

const Info: React.FC = () => {
  return (
    <div className="p-4">
      <p className="text-xl font-semibold mb-2">Contact Us</p>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card
          title="Contribute"
          subtitle="Let's get some real"
          href="#"
          Icon={FiUser}
        />
        <Card title="Email" subtitle="sent email" href="#" Icon={FiMail} />
        <Card title="Team" subtitle="Our team" href="#" Icon={FiUsers} />
        <Card
          title="Billing"
          subtitle="Hit me up"
          href="#"
          Icon={FiCreditCard}
        />
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-red-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-red-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-primary group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default Info;
