import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  MenuList,
  MenuItem,
  Grid,
  Typography,
  ListItemText,
  CssBaseline,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import { useIntl } from "react-intl";
import getRoutes from "../../config/routes";
import { logout } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { hideSidebar } from "../../actions/sidebar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    border: "none",
  },
  drawerPaper: {
    width: drawerWidth,
    border: "none",
    backgroundColor: theme.palette.primary.dark,
    borderTop: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    height: 74,
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    flexShrink: 0,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  sideMenuLink: {
    color: theme.palette.common.white,
    textDecoration: "none",
  },
  sideMenuItem: {
    padding: theme.spacing(2),
  },
  coloredLogo: {
    color: "orange",
  },
  selectedMenuItem: {
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "orange",
    },
  },
  menuContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  socialLinksContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: theme.spacing(2, 1),
    marginTop: 'auto',
  },
  emailContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1),
    opacity: 0.6,
    fontWeight: 600,
    fontSize: '0.85rem',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
  },
  innContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    opacity: 0.6,
    fontWeight: 300,
    fontSize: '0.8rem',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    flexShrink: 0,
    cursor: 'pointer',
    transition: 'opacity 0.2s ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
  innText: {
    lineHeight: 1.2,
    textAlign: 'center',
  },
  // Dialog styles (same as registration component)
  dialogContent: {
    maxHeight: '60vh',
    overflowY: 'auto',
    padding: theme.spacing(2),
    fontFamily: '"PT Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    lineHeight: 1.6,
  },
  dialogTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: theme.spacing(1),
    fontFamily: '"PT Sans", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    fontFamily: '"PT Sans", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  subsection: {
    marginBottom: theme.spacing(1),
    fontFamily: '"PT Sans", "Roboto", "Helvetica", "Arial", sans-serif',
  },
}));

function SideBar({ width }) {
  const classes = useStyles();
  const theme = useTheme();
  const intl = useIntl();
  const routes = getRoutes(intl);
  const location = useLocation();
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  const { sidebar } = useSelector((state) => state);

  // Public offer modal state
  const [offerModalOpen, setOfferModalOpen] = useState(false);

  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? true : false;
  };

  const handleDrawerClose = () => {
    dispatch(hideSidebar());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleOfferClick = () => {
    setOfferModalOpen(true);
  };

  const handleOfferClose = () => {
    setOfferModalOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />

        <Drawer
          className={classes.drawer}
          variant={isWidthDown("sm", width) ? "temporary" : "persistent"}
          anchor="left"
          open={sidebar.visible}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <Grid container justify="center" alignItems="center" spacing={2}>
              <Grid item>
                <Typography variant="h6">
                  Okie<span className={classes.coloredLogo}>Dokie</span>
                </Typography>
              </Grid>
              <Grid item>
                <IconButton onClick={handleDrawerClose} color="inherit">
                  {theme.direction === "ltr" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </Grid>
            </Grid>
          </div>

          <div className={classes.menuContainer}>
            <MenuList>
              {routes.map((prop, key) => {
                return (
                  <Link to={prop.path} className={classes.sideMenuLink} key={key} onClick={() => isWidthDown("sm", width) && handleDrawerClose()}>
                    <MenuItem
                      selected={activeRoute(prop.path)}
                      className={classes.sideMenuItem}
                    >
                      <IconButton style={{ color: "inherit" }}>
                        <prop.icon />
                      </IconButton>
                      <ListItemText primary={prop.sidebarName} />
                    </MenuItem>
                  </Link>
                );
              })}
              {currentUser.isAdmin && (
                <Link to="/admin" className={classes.sideMenuLink}>
                  <MenuItem
                    selected={activeRoute("/admin")}
                    className={classes.sideMenuItem}
                  >
                    <IconButton style={{ color: "inherit" }}>
                      <SupervisorAccountIcon />
                    </IconButton>
                    <ListItemText primary="Admin panel" />
                  </MenuItem>
                </Link>
              )}
              <MenuItem
                onClick={() => handleLogout()}
                className={classes.sideMenuItem}
              >
                <IconButton style={{ color: "inherit" }}>
                  <ExitToAppIcon />
                </IconButton>
                <Typography>
                  {intl.formatMessage({
                    id: "actions.logout",
                    defaultMessage: "Logout",
                  })}
                </Typography>
              </MenuItem>
            </MenuList>

            <div className={classes.socialLinksContainer}>
              <a
                href="https://vk.com/okiddokie_club"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={window.location.origin + "/vk.png"}
                  alt="VK"
                  height={35}
                />
              </a>
              <a
                href="https://t.me/okiedokieclub"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={window.location.origin + "/telegram.png"}
                  alt="Telegram"
                  height={35}
                />
              </a>
              <a
                href="https://t.me/OkieDokieSpeakingClub"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={window.location.origin + "/contactMe.png"}
                  alt="Contact"
                  height={33}
                  style={{ borderRadius: '50%' }}
                />
              </a>
            </div>

            <div className={classes.emailContainer}>
              okiedokie.club@gmail.com
            </div>
          </div>

          <div className={classes.innContainer} onClick={handleOfferClick}>
            <div className={classes.innText}>ИНН 520501298232</div>
            <div className={classes.innText}>Ситнова А.Е.</div>
          </div>
        </Drawer>
      </div>

      {/* Public Offer Modal */}
      <Dialog
        open={offerModalOpen}
        onClose={handleOfferClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle className={classes.dialogTitle}>
          <Typography variant="h6">Публичная оферта</Typography>
        </DialogTitle>

        <DialogContent className={classes.dialogContent}>
          <Typography variant="h6" align="center" gutterBottom>
            <strong>Публичная оферта</strong>
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom style={{ fontStyle: 'italic' }}>
            на участие в занятиях Английского разговорного клуба OkieDokie! и индивидуальных занятиях по английскому языку
          </Typography>

          <Typography variant="body2" paragraph>
            Настоящая публичная оферта (далее — Оферта, Договор) является официальным предложением физического лица, работающего в статусе самозанятого (далее — Исполнитель), Ситновой Антонины Евгеньевны, зарегистрированной в ФНС РФ в качестве самозанятого, ИНН 520501298232, и адресована любому дееспособному физическому лицу — законному представителю несовершеннолетнего ребёнка (далее — Заказчик, Родитель). Оферта содержит все существенные условия предоставления платных образовательных услуг.
          </Typography>

          <Typography variant="h6" className={classes.sectionTitle}>
            1. Предмет договора
          </Typography>
          <Typography variant="body2" className={classes.subsection}>
            1.1. Исполнитель обязуется предоставить услуги по организации и проведению онлайн-занятий по английскому языку для детей и подростков в разговорном клубе OkieDokie! или индивидуальных занятий, в соответствии с выбранной Заказчиком формой, графиком и оплатой, а Заказчик обязуется оплатить и принять такие услуги.
          </Typography>

          <Typography variant="h6" className={classes.sectionTitle}>
            2. Условия участия
          </Typography>
          <Typography variant="body2" className={classes.subsection}>
            2.1. Занятия в разговорном клубе OkieDokie! проводятся онлайн через Zoom или аналогичные платформы, на условиях предоплаты.
          </Typography>
          <Typography variant="body2" className={classes.subsection}>
            2.2. Регистрация участников и оплата занятий в разговорном клубе осуществляется через сайт www.okiedokie.club. После бронирования Заказчику направляется ссылка на занятие и материалы на указанную им электронную почту.
          </Typography>
          <Typography variant="body2" className={classes.subsection}>
            2.3. При 1–2 участниках продолжительность группового занятия в разговорном клубе может быть сокращена с 60 до 40 минут.
          </Typography>
          <Typography variant="body2" className={classes.subsection}>
            2.4. Индивидуальные занятия организуются по отдельной договорённости, оплата — переводом на карту.
          </Typography>

          <Typography variant="h6" className={classes.sectionTitle}>
            3. Порядок заключения договора
          </Typography>
          <Typography variant="body2" className={classes.subsection}>
            3.1. Настоящий документ является публичной офертой в соответствии со статьями 437 и 438 Гражданского кодекса РФ. Регистрация на сайте или оплата занятия считается полным акцептом условий оферты.
          </Typography>
          <Typography variant="body2" className={classes.subsection}>
            3.2. Участие ребёнка в занятии возможно только с согласия законного представителя.
          </Typography>
          <Typography variant="body2" className={classes.subsection}>
            3.3. Договор считается заключённым с момента регистрации или оплаты.
          </Typography>

          <Typography variant="h6" className={classes.sectionTitle}>
            4. Оплата и возвраты
          </Typography>
          <Typography variant="body2" className={classes.subsection}>
            4.1. Оплата групповых занятий осуществляется через сайт с использованием ЮKassa (ЮMoney), по предоплате.
          </Typography>
          <Typography variant="body2" className={classes.subsection}>
            4.2. Оплата индивидуальных занятий — переводом на карту по согласованию с Исполнителем.
          </Typography>
          <Typography variant="body2" className={classes.subsection}>
            4.3. Возврат возможен при отказе не менее чем за 24 часа до занятия или при уважительной причине, по согласованию.
          </Typography>
          <Typography variant="body2" className={classes.subsection}>
            4.4. Частые отмены без уважительных причин могут повлечь отказ в бронировании в будущем.
          </Typography>

          <Typography variant="h6" className={classes.sectionTitle}>
            5. Ответственность сторон
          </Typography>
          <Typography variant="body2" className={classes.subsection}>
            5.1. Заказчик несёт ответственность за достоверность предоставленных данных и поведение ребёнка на занятиях.
          </Typography>
          <Typography variant="body2" className={classes.subsection}>
            5.2. Исполнитель не несёт ответственности за технические сбои на стороне Заказчика или платформ.
          </Typography>

          <Typography variant="h6" className={classes.sectionTitle}>
            6. Персональные данные
          </Typography>
          <Typography variant="body2" className={classes.subsection}>
            6.1. При регистрации и оплате Заказчик предоставляет данные: имя ребёнка, возраст, e-mail родителя.
          </Typography>
          <Typography variant="body2" className={classes.subsection}>
            6.2. Данные обрабатываются в целях организации участия на занятиях, предоставления материалов и информационных рассылок.
          </Typography>
          <Typography variant="body2" className={classes.subsection}>
            6.3. Заказчик подтверждает согласие на обработку данных в соответствии с ФЗ №152-ФЗ. Срок хранения — до отзыва согласия. Отзыв возможен по письменному запросу.
          </Typography>
          <Typography variant="body2" className={classes.subsection}>
            6.4. Данные не передаются третьим лицам, за исключением предусмотренных законом случаев.
          </Typography>

          <Typography variant="h6" className={classes.sectionTitle}>
            7. Фото- и видеосъёмка
          </Typography>
          <Typography variant="body2" className={classes.subsection}>
            7.1. Во время занятий может вестись фото- и видеосъёмка (включая скриншоты) для сайта и соцсетей клуба.
          </Typography>
          <Typography variant="body2" className={classes.subsection}>
            7.2. Если Заказчик не согласен, он обязан сообщить Исполнителю в письменной или устной форме — съёмка участника производиться не будет.
          </Typography>

          <Typography variant="h6" className={classes.sectionTitle}>
            8. Заключительные положения
          </Typography>
          <Typography variant="body2" className={classes.subsection}>
            8.1. Условия оферты могут быть изменены. Изменения вступают в силу с момента публикации на сайте.
          </Typography>
          <Typography variant="body2" className={classes.subsection}>
            8.2. Оферта регулируется законодательством РФ. Местом оказания услуг считается г. Нижний Новгород, РФ.
          </Typography>

          <Typography variant="body2" paragraph style={{ marginTop: 16 }}>
            <strong>Настоящая редакция оферты действует с 31 мая 2025 года.</strong>
          </Typography>

          <Typography variant="h6" className={classes.sectionTitle}>
            Контакты Исполнителя:
          </Typography>
          <Typography variant="body2">
            <strong>Ситнова Антонина Евгеньевна</strong>
          </Typography>
          <Typography variant="body2">
            Телефон (WhatsApp/Telegram): +7 915 945 95 50
          </Typography>
          <Typography variant="body2">
            Электронная почта: antoninasitnova@gmail.com
          </Typography>
          <Typography variant="body2">
            VK: https://vk.com/id150493389
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleOfferClose} color="primary" variant="contained">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default withWidth()(SideBar);
