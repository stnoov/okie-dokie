import { Home } from "@material-ui/icons";
import Dashboard from "../views/dashboard/Dashboard";
import Lessons from "../views/lessons/Lessons";
import ListIcon from "@material-ui/icons/List";
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
];

export default getRoutes;
