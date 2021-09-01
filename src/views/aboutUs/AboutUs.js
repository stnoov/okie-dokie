import React from "react";
import { Grid, Typography, makeStyles, withWidth } from "@material-ui/core";
import { useIntl } from "react-intl";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  chooseGroupGrid: {
    margin: theme.spacing(1, 0),
  },
  paymentText: {
    fontSize: 20,
    paddingLeft: 3,
  },
  styledList: {
    textDecoration: "none",
    paddingLeft: theme.spacing(2),
    marginTop: theme.spacing(0),
    listStyleType: "none",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(0),
    },
  },
}));

function AboutUs({ width }) {
  const classes = useStyles();
  const intl = useIntl();
  return (
    <>
      <Grid container className={classes.rootContainer}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h4" color="primary">
                    {intl.formatMessage({
                      id: "fields.about_club",
                      defaultMessage: "About club",
                    })}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    color="primary"
                    className={classes.paymentText}
                  >
                    <ul className={classes.styledList}>
                      <li>
                        OkieDokie! – это английский разговорный клуб для
                        подростков
                      </li>
                      <li>
                        OkieDokie! – это уникальная методика, которая позволяет
                        без стресса освоить английский язык!
                      </li>
                      <li>
                        OkieDokie! – это непринужденная дружеская атмосфера, где
                        в игровой форме мы поможем тебе максимально быстро
                        адаптироваться.
                      </li>
                      <li>
                        OkieDokie! – это возможность использования английского
                        языка без барьеров.
                      </li>
                    </ul>
                    Живая практика поможет тебе чувствовать себя более уверенно
                    и комфортно на уроках, экзаменах и в реальной жизни.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    color="primary"
                    className={classes.paymentText}
                  >
                    Что мы делаем на мероприятиях OkieDokie клуба?
                    <ul className={classes.styledList}>
                      <li>
                        Все наши занятия проходят в формате дружеских встреч.
                        <br /> ❌ У нас нет изнуряющих и заунывных лекций!
                      </li>
                      <li>
                        ✅Повторы исключены, каждое занятие пропитано
                        индивидуальностью, как и наши ученики.
                      </li>
                      <li>
                        Если я вижу, что определённая активность не зацепила, мы
                        быстро меняем тему, чтобы всем было интересно.
                        адаптироваться.
                      </li>
                      <li>
                        Проводим игры, наподобие:
                        <ul>
                          <li>Алиби</li>
                          <li>Хамелеон</li>
                          <li>Крокодил</li>
                          <li>Мафия</li>
                        </ul>
                      </li>
                    </ul>
                    Для полного погружения в английский мы приглашаем
                    иностранных участников и проводим международные встречи.
                    Коллаборация с иностранными школами значительно увеличивает
                    эффективность изучения английского языка, помогает быстро
                    снять языковой барьер и, как бонус, обрести новые знакомства
                    в странах по всему миру. Кроме того, в нашей старшей группе
                    уже есть постоянный иностранный участник из Польши. Он не
                    говорит по русски, поэтому использовать русский на встречах
                    становится просто неприлично.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h4" color="secondary">
                    {intl.formatMessage({
                      id: "fields.about_me",
                      defaultMessage: "About me",
                    })}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    color="primary"
                    className={classes.paymentText}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default withWidth()(AboutUs);
