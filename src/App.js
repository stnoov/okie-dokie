import { styled } from "@material-ui/core";
import "./App.css";
import Login from "./components/authentication/Login";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Dashboard from "./views/dashboard/Dashboard";
import SideBar from "./components/sideBar/SideBar";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./utils/themeConfig";
import Lessons from "./views/lessons/Lessons";
function App() {
  const user = localStorage.getItem("user");
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {user === "" ? (
          <>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Redirect from="/*" to="/login" />
            </Switch>
          </>
        ) : (
          <AuthenticatedApp user={user} />
        )}
      </Router>
    </ThemeProvider>
  );
}

const AuthenticatedApp = (user) => {
  const Container = styled("div")(({ theme }) => ({
    padding: theme.spacing(7, 0),
    minHeight: "calc(100vh - 80px)",
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3, 0),
    },
  }));
  return (
    <>
      <SideBar />
      <Container>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/lessons" component={Lessons} />
          <Redirect from="/*" to="/dashboard" />
        </Switch>
      </Container>
    </>
  );
};

export default App;
