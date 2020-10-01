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
      icon: <FontAwesomeIcon icon={faThLarge} />,
      path: "/summary",
      component: Summary,
    },
    {
      name: "invoices",
      icon: <FontAwesomeIcon icon={faWallet} />,
      path: "/",
      controls: "",
      component: Invoices,
    },
    {
      name: "rating",
      icon: <FontAwesomeIcon icon={faStar} />,
      path: "/rating",
      component: Rating,
    },
    {
      name: "warning",
      icon: <FontAwesomeIcon icon={faExclamationTriangle} />,
      path: "/warning",
      component: Warning,
    },
    {
      name: "addClient",
      icon: <FontAwesomeIcon icon={faUserPlus} />,
      path: "/addclient",
      component: AddClient,
    },
    {
      name: "help",
      icon: <FontAwesomeIcon icon={faQuestionCircle} />,
      path: "/help",
      component: Help,
    },
  ];

  const invoices = [
    { no: "#46786", customer: "Bell Han", sold: "5", total: "1200 AED" },
    { no: "#47786", customer: "victoria Han", sold: "6", total: "1200 AED" },
    { no: "#48786", customer: "Bella Han", sold: "4", total: "1200 AED" },
  ];
  return (
    <DexefContext.Provider
      value={{
        pages,
        invoices,
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
