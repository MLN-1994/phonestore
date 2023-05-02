import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/Logo.png";

const TitleLogo = () => {
  return (
    <>
      <Link to={"/"} className="flex items-center">
        <div className="bg-gray-400 rounded-full h-12 w-12 flex items-center justify-center mr-0">
          <p className="text-white text-2xl font-bold font-sans">M</p>
        </div>
        <p className="text-3xl  font-bold font-sans tracking-wide">ono</p>
        <div className="bg-gray-500 rounded-full h-12 w-12 flex items-center justify-center mr-0 ml-2">
          <p className="text-white text-2xl font-bold font-sans ">P</p>
        </div>
        <p className="text-3xl  font-bold font-sans tracking-wide">hones</p>
      </Link>
    </>
  );
};
export default TitleLogo;
