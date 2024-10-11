import { FC, ReactNode } from "react";
import NavBar from "./NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" main-font px-2 lg:px-10">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
