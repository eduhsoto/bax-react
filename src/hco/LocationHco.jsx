import { useLocation } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";


const withRenderBoolean = (Component) => {
  const WrappedComponent = () => {
    const { pathname } = useLocation();
    return <>{pathname !== "/page-not-found" && <Component />}</>;
  };
  return WrappedComponent;
};

export const NavbarwithRenderB = withRenderBoolean(NavBar);
export const FooterwithRenderB = withRenderBoolean(Footer);
