import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, makeStyles, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  styledPaper: {
    padding: theme.spacing(1, 2),
    backgroundColor: theme.palette.primary.main,
    minWidth: "inherit",
    [theme.breakpoints.down("sm")]: {
      width: "inherit",
      minHeight: 280,
    },
  },
  styledTitle: {
    fontWeight: 800,
  },
}));

export default function NewsCarousel(props) {
  var items = [
    {
      name: "Бесплатные занятия",
      description:
        "Принимай участие в викторинах во время уроках, занимай призовые места и зарабатывай OkieDokie points, которые можно обменять на бесплатные занятия!",
    },
    {
      name: "Бесплатные занятия",
      description:
        "Принимай участие в викторинах во время уроках, занимай призовые места и зарабатывай OkieDokie points, которые можно обменять на бесплатные занятия!",
    },
    {
      name: "День Рождения клуба",
      description:
        "Дарим подарки в честь нашего дня рождения! Принимай участие в занятиях и получай, проявляй активность и получай ценные призы",
    },
  ];

  return (
    <Carousel interval={6000} animation="fade" timeout={700} swipe>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Paper className={classes.styledPaper} elevation={0}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" сlassName={classes.styledTitle}>
              {props.item.name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{props.item.description}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button color="secondary" variant="outlined">
              Check it out!
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
