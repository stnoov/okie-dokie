import React from "react";
import { Grid, makeStyles, withWidth } from "@material-ui/core";
import { useIntl } from "react-intl";

const useStyles = makeStyles(() => ({
  rootContainer: {
    padding: '32px',
    marginTop: '16px',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    '@media (max-width: 600px)': {
      padding: '16px',
    },
  },
  heroSection: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: '48px 32px',
    marginBottom: '48px',
    textAlign: 'center',
    border: '2px solid #f0f0f0',
    '@media (max-width: 600px)': {
      padding: '32px 24px',
    },
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '16px',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    letterSpacing: '0.01em',
    lineHeight: 1.2,
    color: '#2c3e50',
    '@media (max-width: 600px)': {
      fontSize: '2rem',
    },
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    lineHeight: 1.6,
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    letterSpacing: '0.01em',
    color: '#555',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 600,
    marginBottom: '32px',
    color: '#2c3e50',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    letterSpacing: '0.01em',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -8,
      left: 0,
      width: 60,
      height: 4,
      backgroundColor: '#3498db',
      borderRadius: 2,
    },
  },
  featuresContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    marginBottom: '48px',
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
      gap: '16px',
    },
  },
  featureCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: '32px 24px',
    textAlign: 'center',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '1px solid #e0e0e0',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
      borderColor: '#3498db',
    },
  },
  featureIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#f8f9fa',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    fontSize: '1.8rem',
    border: '2px solid #3498db',
  },
  featureTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    marginBottom: '12px',
    color: '#2c3e50',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    letterSpacing: '0.01em',
    lineHeight: 1.3,
  },
  featureDescription: {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: '#666',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    letterSpacing: '0.01em',
    textAlign: 'center',
  },
  ctaSection: {
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    padding: '40px 32px',
    textAlign: 'center',
    marginBottom: '32px',
    border: '1px solid #e9ecef',
    '@media (max-width: 600px)': {
      padding: '32px 24px',
    },
  },
  ctaText: {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    color: '#2c3e50',
    marginBottom: '16px',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    letterSpacing: '0.01em',
  },
  ctaTextLast: {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    color: '#2c3e50',
    marginBottom: '24px',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    letterSpacing: '0.01em',
  },
  socialChips: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap',
  },
  socialChip: {
    backgroundColor: '#fff',
    color: '#3498db',
    padding: '10px 20px',
    borderRadius: 20,
    fontWeight: 600,
    fontSize: '0.9rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '2px solid #3498db',
    cursor: 'pointer',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    '&:hover': {
      backgroundColor: '#3498db',
      color: '#fff',
      transform: 'translateY(-2px)',
    },
  },
  contactSection: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: '32px 24px',
    textAlign: 'center',
    border: '1px solid #e0e0e0',
  },
  contactTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '16px',
    color: '#2c3e50',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    letterSpacing: '0.01em',
  },
  contactText: {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: '#555',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    letterSpacing: '0.01em',
  },
  emailLink: {
    color: '#3498db',
    textDecoration: 'none',
    fontWeight: 600,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

function About({ width }) {
  const classes = useStyles();
  const intl = useIntl();

  const features = [
    {
      icon: "🎓",
      title: intl.formatMessage({
        id: "about.feature1.title",
        defaultMessage: "Интерактивные занятия",
      }),
      description: intl.formatMessage({
        id: "about.desc1",
        defaultMessage: "Интерактивные занятия с опытными преподавателями",
      }),
    },
    {
      icon: "🌍",
      title: intl.formatMessage({
        id: "about.feature2.title",
        defaultMessage: "Международные встречи",
      }),
      description: intl.formatMessage({
        id: "about.desc2",
        defaultMessage: "Интернациональные встречи с носителями языка",
      }),
    },
    {
      icon: "💡",
      title: intl.formatMessage({
        id: "about.feature3.title",
        defaultMessage: "Инновационные методики",
      }),
      description: intl.formatMessage({
        id: "about.desc3",
        defaultMessage: "Комбинация традиционных и инновационных методик для комфортного и эффективного обучения разговорному языку",
      }),
    },
    {
      icon: "👥",
      title: intl.formatMessage({
        id: "about.feature4.title",
        defaultMessage: "Языковой обмен",
      }),
      description: intl.formatMessage({
        id: "about.desc4",
        defaultMessage: "Возможности языкового обмена с ровесниками, изучающими английский по всему миру (не переживайте, мы поможем вам понимать разные акценты!)",
      }),
    },
  ];

  return (
    <div className={classes.rootContainer}>
      {/* Hero Section */}
      <div className={classes.heroSection}>
        <div className={classes.heroTitle}>
          {intl.formatMessage({
            id: "about.title",
            defaultMessage: "Добро пожаловать в OkieDokie!",
          })}
        </div>
        <div className={classes.heroSubtitle}>
          {intl.formatMessage({
            id: "about.page_title",
            defaultMessage: "Мы рады, что вы присоединились к нашему английскому разговорному клубу! Здесь вас ждут увлекательные встречи, интересные темы для обсуждения и множество игр, которые помогут вам улучшить навыки спонтанной речи и чувствовать себя увереннее.",
          })}
        </div>
      </div>

      {/* Features Section */}
      <div className={classes.sectionTitle}>
        {intl.formatMessage({
          id: "about.this_is",
          defaultMessage: "OkieDokie! это:",
        })}
      </div>

      <div className={classes.featuresContainer}>
        {features.map((feature, index) => (
          <div key={index} className={classes.featureCard}>
            <div className={classes.featureIcon}>
              {feature.icon}
            </div>
            <div className={classes.featureTitle}>
              {feature.title}
            </div>
            <div className={classes.featureDescription}>
              {feature.description}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className={classes.ctaSection}>
        <div className={classes.ctaText}>
          {intl.formatMessage({
            id: "about.desc5",
            defaultMessage: "Принимая участие в OkieDokie!, вы не только улучшаете свой английский, но и становитесь более интересными собеседниками! Присоединяйтесь и вместе мы поговорим на разнообразные темы, поиграем в веселые настолки, и подружимся с людьми из разных уголков мира!",
          })}
        </div>
        <div className={classes.ctaTextLast}>
          {intl.formatMessage({
            id: "about.desc6",
            defaultMessage: "Чтобы не упустить последние новости и расписание специальных гостей, следуйте за новостями в нашей группе ВКонтакте!",
          })}
        </div>
        <div className={classes.socialChips}>
          <button className={classes.socialChip}>
            ВКонтакте
          </button>
          <button className={classes.socialChip}>
            Telegram
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <div className={classes.contactSection}>
        <div className={classes.contactTitle}>
          {intl.formatMessage({
            id: "about.contact.title",
            defaultMessage: "Есть вопросы?",
          })}
        </div>
        <div className={classes.contactText}>
          {intl.formatMessage({
            id: "about.desc7",
            defaultMessage: "Есть вопросы или идеи для занятий? Мы всегда рады вас выслушать и ответить! Пишите нам ВКонтакте или на email",
          })}{" "}
        </div>
      </div>
    </div>
  );
}

export default withWidth()(About);
