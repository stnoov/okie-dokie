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
import About from "./views/about/About";
import Admin from "./views/admin/Admin";
import { useSelector } from "react-redux";
import AuthVerify from "./services/AuthVerify";
import ForgotPassword from "./views/authentication/ForgotPassword";
import ResetPassword from "./views/authentication/ResetPassword";

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  if (!localStorage.getItem("locale")) {
    localStorage.setItem("locale", window.navigator.language.substring(0, 2));
  }
  const [locale, setLocale] = React.useState(localStorage.getItem("locale"));
  return (
    <IntlProvider
      messages={locale === "ru" ? messagesInRussian : messagesInEnglish}
      locale={locale}
    >
      <ThemeProvider theme={theme}>
        <Router>
          {!isLoggedIn ? (
            <>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route
                  exact
                  path="/forgot_password"
                  component={ForgotPassword}
                />
                <Route
                  exact
                  path="/reset_password/:id/:token"
                  component={ResetPassword}
                />
                <Redirect from="/*" to="/login" />
              </Switch>
            </>
          ) : (
            <AuthenticatedApp locale={locale} setLocale={setLocale} />
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

const AuthenticatedApp = ({ locale, setLocale }) => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const { visible } = useSelector((state) => state.sidebar);

  const Container = styled("div")(({ theme, visible }) => ({
    padding: theme.spacing(8, 0),
    minHeight: "100vh",
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.up("lg")]: {
      width: visible ? "calc(100% - 240px)" : "100%",
      marginLeft: visible ? "240px" : "0px",
    },
  }));
  return (
    <>
      <TopBar locale={locale} setLocale={setLocale} />
      <SideBar />
      <Container visible={visible}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/lessons" component={Lessons} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/payments" component={Payments} />
          <Route exact path="/about_us" component={About} />
          {currentUser?.isAdmin && (
            <Route exact path="/admin" component={Admin} />
          )}
          <Redirect from="/*" to="/dashboard" />
        </Switch>
      </Container>
      <AuthVerify />
    </>
  );
};

export default App;
