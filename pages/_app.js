import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import TamamHead from "@/src/TamamHead";
import "@/styles/globals.css";
import { Fragment } from "react";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <TamamHead />
      <Switcher />
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
