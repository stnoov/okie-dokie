import { Home, AccountCircle } from "@material-ui/icons";
import Login from "../components/authentication/Login";
import Dashboard from "../views/dashboard/Dashboard";
import Lessons from "../views/lessons/Lessons";
const Routes = [
  {
    path: "/dashboard",
    sidebarName: "Главная",
    navbarName: "Главная",
    icon: Home,
    component: Dashboard,
  },
  {
    path: "/lessons",
    sidebarName: "Уроки",
    navbarName: "Уроки",
    icon: AccountCircle,
    component: Lessons,
  },
];

export default Routes;
