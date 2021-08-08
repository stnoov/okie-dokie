import { Home } from "@material-ui/icons";
import Dashboard from "../views/dashboard/Dashboard";
import Lessons from "../views/lessons/Lessons";
import ListIcon from "@material-ui/icons/List";
import GradeIcon from "@material-ui/icons/Grade";
import Payments from "../views/payments/Payments";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
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
    path: "/lessons",
    sidebarName: intl.formatMessage({
      id: "routes.lessons",
      defaultMessage: "Lessons",
    }),
    icon: ListIcon,
    component: Lessons,
  },
  {
    path: "/reviews",
    sidebarName: intl.formatMessage({
      id: "routes.reviews",
      defaultMessage: "Reviews",
    }),
    icon: GradeIcon,
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
];

export default getRoutes;
