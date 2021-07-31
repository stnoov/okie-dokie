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

function App() {
  const user = localStorage.getItem("user");
  return (
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
  );
}

const AuthenticatedApp = (user) => {
  const Container = styled("div")(({ theme }) => ({
    padding: theme.spacing(8, 0),
    minHeight: "calc(100vh - 64px)",
    background: `linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%)`,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  }));
  return (
    <>
      <SideBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Redirect from="/*" to="/" />
        </Switch>
      </Container>
    </>
  );
};

export default App;
