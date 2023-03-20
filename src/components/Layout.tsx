import bgLeft from "../images/bg-left.png";
import bgRight from "../images/bg-right.png";

export const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => (
  <div
    className="w-full h-screen flex flex-nowrap flex-col items-center"
    style={
      {
        // backgroundImage: `url(${bgLeft}), url(${bgRight})`,
        // backgroundImage: `url(${bgLeft})`,
        // backgroundSize: "231px 366px",
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "left center",
      }
    }
  >
    {children}
  </div>
);
