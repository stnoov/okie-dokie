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
    paddingLeft: theme.spacing(2),
    margin: theme.spacing(0),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(0),
    },
    "& li": {
      paddingBottom: theme.spacing(1),
    },
  },
}));

function About({ width }) {
  const classes = useStyles();
  const intl = useIntl();
  return (
    <>
      <Grid container className={classes.rootContainer}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h4" color="secondary">
                    {intl.formatMessage({
                      id: "about.title",
                      defaultMessage: "Добро пожаловать в OkieDokie!",
                    })}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    color="primary"
                    className={classes.paymentText}
                  >
                    {intl.formatMessage({
                      id: "about.page_title",
                      defaultMessage: `Мы рады, что вы присоединились к нашему английскому разговорному клубу! Здесь вас ждут увлекательные встречи, интересные темы для обсуждения и множество игр, которые помогут вам улучшить навыки спонтанной речи и чувствовать себя увереннее.`,
                    })}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h4" color="secondary">
                    {intl.formatMessage({
                      id: "about.this_is",
                      defaultMessage: "OkieDokie! это:",
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
                        {intl.formatMessage({
                          id: "about.desc1",
                          defaultMessage: `Интерактивные занятия с опытными преподавателями`,
                        })}
                      </li>
                      <li>
                        {intl.formatMessage({
                          id: "about.desc2",
                          defaultMessage: `Интернациональные встречи с носителями языка`,
                        })}
                      </li>
                      <li>
                        {intl.formatMessage({
                          id: "about.desc3",
                          defaultMessage: `Комбинация традиционных и инновационных методик для комфортного и эффективного обучения разговорному языку`,
                        })}
                      </li>
                      <li>
                        {intl.formatMessage({
                          id: "about.desc4",
                          defaultMessage: `Возможности языкового обмена с ровесниками, изучающими английский по всему миру (не переживайте, мы поможем вам понимать разные акценты!)`,
                        })}
                      </li>
                    </ul>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    color="primary"
                    className={classes.paymentText}
                  >
                    {intl.formatMessage({
                      id: "about.desc5",
                      defaultMessage: `Принимая участие в OkieDokie!, вы не только улучшаете свой английский, но и становитесь более интересными собеседниками! Присоединяйтесь и вместе мы поговорим на разнообразные темы, поиграем в веселые настолки, и подружимся с людьми из разных уголков мира!`,
                    })}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    color="primary"
                    className={classes.paymentText}
                  >
                    {intl.formatMessage({
                      id: "about.desc6",
                      defaultMessage: 'Чтобы не упустить последние новости и расписание специальных гостей, следуйте за новостями в нашей группе ВКонтакте!'
                    })}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    color="primary"
                    className={classes.paymentText}
                  >
                    {intl.formatMessage({
                      id: "about.desc7",
                      defaultMessage: "Есть вопросы или идеи для занятий? Мы всегда рады вас выслушать и ответить! Пишите нам ВКонтакте или на email okiedokie.club@gmail.com."
                    })}
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
export default withWidth()(About);
