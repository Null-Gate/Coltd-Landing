import { FC, ReactNode } from "react";
import NavBar from "./NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" main-font ">
      <NavBar />
      <div className="mt-5 pt-5 lg:pt-16">{children}</div>
    </div>
  );
};

export default Layout;
