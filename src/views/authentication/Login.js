import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import LoginForm from "../../components/authentication/LoginForm";

function Copyright({ onOfferClick }) {
  return (
    <div>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Используя наш сервис, вы соглашаетесь с условиями "}
        <Link
          color="inherit"
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={onOfferClick}
        >
          публичной оферты
        </Link>
        {"."}
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: 8, fontSize: 12 }}>
        {"Copyright © "}
        <Link color="inherit">OkieDokie</Link> {new Date().getFullYear()}
        {"."}
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: 0, fontSize: 12 }}>
        Ситнова Антонина Евгеньевна, ИНН 520501298232
      </Typography>

    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    background: `linear-gradient(33deg, ${theme.palette.primary.light} 10%,  ${theme.palette.primary.main} 80%)`,
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  coloredLogo: {
    color: "orange",
  },
  // Public offer modal styles
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

export default function SignInSide({ setUser }) {
  const classes = useStyles();
  const [offerModalOpen, setOfferModalOpen] = useState(false);

  const handleOfferClick = () => {
    setOfferModalOpen(true);
  };

  const handleOfferClose = () => {
    setOfferModalOpen(false);
  };

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <img
              src={window.location.origin + "/logo.png"}
              alt="logo"
              height={150}
            />
            <LoginForm setUser={setUser} />
            <Box mt={5}>
              <Copyright onOfferClick={handleOfferClick} />
            </Box>
          </div>
        </Grid>
      </Grid>

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
