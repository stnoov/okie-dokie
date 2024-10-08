import { Home } from "@material-ui/icons";
import Dashboard from "../views/dashboard/Dashboard";
import Lessons from "../views/lessons/Lessons";
import ListIcon from "@material-ui/icons/List";
// import GradeIcon from "@material-ui/icons/Grade";
import Payments from "../views/payments/Payments";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import About from "../views/about/About";
import InfoIcon from "@material-ui/icons/Info";

const getRoutes = (intl) => [
  {
    path: "/dashboard",
    sidebarName: intl.formatMessage({
      id: "routes.dashboard",
      defaultMessage: "Dashboard",
    }),
    icon: Home,
    component: Dashboard,
  },
  {
    path: "/about_us",
    sidebarName: intl.formatMessage({
      id: "routes.about",
      defaultMessage: "About",
    }),
    icon: InfoIcon,
    component: About,
  },
  {
    path: "/lessons",
    sidebarName: intl.formatMessage({
      id: "routes.meetings",
      defaultMessage: "Meetings",
    }),
    icon: ListIcon,
    component: Lessons,
  },
  {
    path: "/payments",
    sidebarName: intl.formatMessage({
      id: "routes.payments",
      defaultMessage: "Payments",
    }),
    icon: AccountBalanceWalletIcon,
    component: Payments,
  },
  // {
  //   path: "/reviews",
  //   sidebarName: intl.formatMessage({
  //     id: "routes.reviews",
  //     defaultMessage: "Reviews",
  //   }),
  //   icon: GradeIcon,
  //   component: Lessons,
  // },
  // {
  //   path: "/about_us",
  //   sidebarName: intl.formatMessage({
  //     id: "routes.about_us",
  //     defaultMessage: "About us",
  //   }),
  //   icon: InfoIcon,
  //   component: Promotions,
  // },
];

export default getRoutes;
