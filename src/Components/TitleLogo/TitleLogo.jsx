import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/LogoMono.png"

const TitleLogo = () => {
  return (
    <>
      <Link to={"/"} className="">
        <img src={Logo} alt=""  className="w-24 hover:shadow-xl rounded-full "/>
      </Link>
    </>
  );
};
export default TitleLogo;
