import React from "react";
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
import { IntlProvider } from "react-intl";
import { messagesInRussian } from "./lang/ru";
import { messagesInEnglish } from "./lang/en";

function App() {
  const [user, setUser] = React.useState(localStorage.getItem("user"));
  const [locale, setLocale] = React.useState(
    localStorage.getItem("locale") === undefined ? "en" : "ru"
  );
  console.log("locale: ", locale);
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
                <Route exact path="/login" component={Login} />
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
      </ThemeProvider>
    </IntlProvider>
  );
}

const AuthenticatedApp = ({ user, setUser, locale, setLocale }) => {
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
      <SideBar setUser={setUser} locale={locale} setLocale={setLocale} />
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
