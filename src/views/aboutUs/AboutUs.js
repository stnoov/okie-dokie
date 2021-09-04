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
    fontSize: 16,
    paddingLeft: 3,
  },
  styledList: {
    textDecoration: "none",
    padding: theme.spacing(1, 0),
    marginTop: theme.spacing(0),
    listStyleType: "none",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(0),
    },
    "& li": {
      padding: theme.spacing(0.2, 0),
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
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    color="primary"
                    className={classes.paymentText}
                  >
                    Скучно не будет точно!
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
                    <ul className={classes.styledList}>
                      <li>
                        Привет, друзья! Давайте познакомимся поближе Я —
                        Антонина, организатор Английского разговорного клуба для
                        детей и подростков OkieDokie!
                      </li>
                      <li>
                        Умение свободно разговаривать на английском языке было
                        мечтой моего детства, но моя школа предлагала только
                        изучение немецкого языка, долгое время мечта так и
                        оставалась мечтой. Позднее, уже в более зрелом возрасте,
                        я позволила себе погрузиться в этот завораживающий
                        процесс изучения английского языка.
                      </li>
                      <li>
                        Сначала пыхтела над учебниками дома, затем добавила
                        курсы. В глубине души я быстро стала англоговорящим
                        виртуозом без страха и упрека. На деле же, когда нужно
                        было заговорить, впадала в ступор.
                      </li>
                      <li>
                        Решено было разрубить этот гордиев узел страха! Я
                        поехала в Англию учить английский язык в лингвистической
                        школе!
                      </li>
                    </ul>
                    И тут-то и случилась магия.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    color="primary"
                    className={classes.paymentText}
                  >
                    Знаете, что особенного было в этой школе?
                    <ul className={classes.styledList}>
                      <li>Нет! Никаких новейших методик!</li>
                      <li>Мы просто разговаривали</li>
                      <li>
                        Я поняла, что единственное условие для успешного
                        изучения иностранного языка — живое общение и практика
                      </li>
                    </ul>
                    Согласитесь, не всегда у нас есть физическая и финансовая
                    возможность ехать за тридевять земель, чтобы поговорить на
                    английском языке.
                    <br />В этот момент и родилась моя идея
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    color="primary"
                    className={classes.paymentText}
                  >
                    <Grid container spacing={1}>
                      <Grid item>
                        В клубе мы встречаемся в онлайн формате и в дружеской
                        компании единомышленников играем, общаемся, учимся
                        использовать язык в реальных жизненных ситуациях,
                        устраиваем международные встречи. Делаем всё то, что
                        называется, так нам необходимой, ПРАКТИКОЙ АНГЛИЙСКОГО
                        ЯЗЫКА!
                      </Grid>
                      <Grid item>
                        Я стараюсь давать своим ученикам лучшее и достичь
                        совершенства в новой профессии. В данный момент
                        заканчиваю курс на получение TESOL сертификата в
                        Университе Аризоны и изучаю коучинг.
                      </Grid>
                      <Grid item>
                        Если вы не можете преодолеть барьеры и устали тратить
                        своё время безрезультатно, то жду вас в нашем клубе
                      </Grid>
                    </Grid>
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
