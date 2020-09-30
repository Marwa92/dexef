import React, { createContext } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faStar,
  faUserPlus,
  faQuestionCircle,
  faExclamationTriangle,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import Summary from "../containers/Dashboard/Summary";
import Invoices from "../containers/Dashboard/Invoices";
import Rating from "../containers/Dashboard/Rating";
import Warning from "../containers/Dashboard/Warning";
import AddClient from "../containers/Dashboard/AddClient";
import Help from "../containers/Dashboard/Help";

export const DexefContext = createContext();

export function DexefProvider(props) {
  //   const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  //   window.addEventListener("resize", () =>
  //     window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false)
  //   );
  const pages = [
    {
      name: "summary",
      icon: <FontAwesomeIcon color="#D5D3D2" icon={faThLarge} />,
      path: "/summary",
      controls: "v-pills-profile",
      component: Summary,
    },
    {
      name: "invoices",
      icon: <FontAwesomeIcon color="#D5D3D2" icon={faWallet} />,
      path: "/",
      controls: "",
      component: Invoices,
    },
    {
      name: "rating",
      icon: <FontAwesomeIcon color="#D5D3D2" icon={faStar} />,
      path: "/rating",
      controls: "",
      component: Rating,
    },
    {
      name: "warning",
      icon: <FontAwesomeIcon color="#D5D3D2" icon={faExclamationTriangle} />,
      path: "/warning",
      controls: "",
      component: Warning,
    },
    {
      name: "addClient",
      icon: <FontAwesomeIcon color="#D5D3D2" icon={faUserPlus} />,
      path: "/addclient",
      controls: "",
      component: AddClient,
    },
    {
      name: "help",
      icon: <FontAwesomeIcon color="#D5D3D2" icon={faQuestionCircle} />,
      path: "/help",
      controls: "v-pills-home",
      component: Help,
    },
  ];

  return (
    <DexefContext.Provider
      value={{
        pages,
        // isMobile,
      }}
    >
      {props.children}
    </DexefContext.Provider>
  );
}

DexefProvider.propTypes = {
  children: PropTypes.object,
};
