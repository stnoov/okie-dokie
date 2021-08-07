import { Home, AccountCircle } from "@material-ui/icons";
import Dashboard from "../views/dashboard/Dashboard";
import Lessons from "../views/lessons/Lessons";

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
    icon: AccountCircle,
    component: Lessons,
  },
];

export default getRoutes;
