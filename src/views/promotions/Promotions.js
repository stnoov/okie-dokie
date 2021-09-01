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

function Promotions({ width }) {
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
                      id: "fields.promotions_bonuses",
                      defaultMessage: "Бонусная программа Okie Dokie! клуба",
                    })}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    color="primary"
                    className={classes.paymentText}
                  >
                    Новая система лояльности клуба - OkieDokie points! Получайте
                    OkieDokie points и меняйте их на индивидуальные или
                    групповые занятия!
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography
                        variant="body2"
                        color="primary"
                        className={classes.paymentText}
                      >
                        5 OkieDokie points = 1 занятие в группе
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="body2"
                        color="primary"
                        className={classes.paymentText}
                      >
                        10 OkieDokie points = 1 индивидуальное занятие с
                        преподавателем (30 минут)
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h4" color="secondary">
                    {intl.formatMessage({
                      id: "fields.how_to_get_points",
                      defaultMessage: "Как получить OkieDokie points?",
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
                        Сделать репост актуальных новостей и анонсов
                        мероприятий, опубликованных в социальных сетях клуба,
                        помеченных значком в левом верхнем углу – 1 point
                      </li>
                      <li>Победить в викторине – 1 point</li>
                      <li>
                        Привести на мероприятие друга – 5 points (после оплаты
                        другом занятия, следующего за первым, бесплатным)
                      </li>
                    </ul>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h4" color="secondary">
                    {intl.formatMessage({
                      id: "fields.how_to_obtain_classes",
                      defaultMessage:
                        "Как обменять накопленные OkieDokie points на занятия?",
                    })}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    color="primary"
                    className={classes.paymentText}
                  >
                    Просто дайте об этом знать организатору клуба любым удобным
                    для вас способом – либо на мероприятии, либо в личном
                    сообщении Организатор обычно сам спрашивает участников, не
                    пора ли обменять заработанные бонусы на занятия.
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
export default withWidth()(Promotions);
