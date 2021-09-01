import React from "react";
import { Paper, Button, makeStyles, Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  styledPaper: {
    padding: theme.spacing(1, 2),
    backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.down("sm")]: {
      width: "inherit",
    },
  },
  styledTitle: {
    fontWeight: 800,
  },
}));

export default function NewsCarousel(props) {
  var items = [
    {
      name: "Бонусная программа",
      description:
        "Зарабатывай OkieDokie points и меняй их на бесплатные занятия! OkieDokie points начисляются за репост актуальных новостей нашего клуба, победу в викторинах и приглашение друзей на наши встречи!",
    },
    // {
    //   name: "Бонусная программа Okie Dokie! клуба",
    //   description:
    //     "Новая система лояльности клуба - OkieDokie points! Получайте OkieDokie points и меняйте их на индивидуальные или групповые занятия!",
    // },
  ];

  return items.map((item, i) => <Item key={i} item={item} />);
}

function Item(props) {
  const classes = useStyles();
  const history = useHistory();
  const transferToPromotions = () => {
    history.push("/promotions");
  };
  return (
    <Grid item xs={12}>
      <Paper className={classes.styledPaper} elevation={1}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              сlassName={classes.styledTitle}
              color="primary"
            >
              {props.item.name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{props.item.description}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              color="secondary"
              variant="contained"
              onClick={transferToPromotions}
            >
              Check it out!
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
