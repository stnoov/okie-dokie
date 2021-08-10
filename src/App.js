import React from "react";
import { styled } from "@material-ui/core";
import "./App.css";
import Login from "./views/authentication/Login";
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
import { IntlProvider } from "react-intl";
import { messagesInRussian } from "./lang/ru";
import { messagesInEnglish } from "./lang/en";
import TopBar from "./components/topBar/TopBar";
import Register from "./views/authentication/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Reviews from "./views/reviews/Reviews";
import Payments from "./views/payments/Payments";
import Promotions from "./views/promotions/Promotions";
import Admin from "./views/admin/Admin";
function App() {
  const [user, setUser] = React.useState(localStorage.getItem("user"));
  const [locale, setLocale] = React.useState(
    localStorage.getItem("locale") === undefined ? "en" : "ru"
  );
  return (
    <IntlProvider
      messages={locale === "ru" ? messagesInRussian : messagesInEnglish}
      locale={locale}
    >
      <ThemeProvider theme={theme}>
        <Router>
          {user === "" ? (
            <>
              <Switch>
                <Route
                  exact
                  path="/login"
                  render={() => <Login setUser={setUser} />}
                  setUser={setUser}
                />
                <Route exact path="/register" component={Register} />
                <Redirect from="/*" to="/login" />
              </Switch>
            </>
          ) : (
            <AuthenticatedApp
              user={user}
              setUser={setUser}
              locale={locale}
              setLocale={setLocale}
            />
          )}
        </Router>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
      </ThemeProvider>
    </IntlProvider>
  );
}

const AuthenticatedApp = ({ user, setUser, locale, setLocale }) => {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const Container = styled("div")(({ theme, open }) => ({
    padding: theme.spacing(8, 0),
    minHeight: "100vh",
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.up("lg")]: {
      width: open ? "calc(100% - 240px)" : "100%",
      marginLeft: open ? "240px" : "0px",
    },
  }));
  return (
    <>
      <TopBar
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        locale={locale}
        setLocale={setLocale}
      />
      <SideBar
        setUser={setUser}
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
      <Container open={open}>
        <Switch>
          <Route
            exact
            path="/dashboard"
            render={() => <Dashboard setUser={setUser} />}
          />
          <Route exact path="/lessons" component={Lessons} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/payments" component={Payments} />
          <Route exact path="/promotions" component={Promotions} />
          <Route exact path="/admin" component={Admin} />
          <Redirect from="/*" to="/dashboard" />
        </Switch>
      </Container>
    </>
  );
};

export default App;
