import React from "react";
import {
  makeStyles,
  withWidth,
  capitalize,
  Tooltip,
  Card,
  CardContent,
  Chip,
} from "@material-ui/core";
import { useIntl } from "react-intl";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import {
  School as SchoolIcon,
  Person as PersonIcon,
  Schedule as ScheduleIcon,
  Group as GroupIcon,
  CheckCircle as CheckCircleIcon
} from "@material-ui/icons";
import LessonDialog from "../../components/lessons/LessonDialog";
import { fetchLessons } from "../../actions/lesson";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    padding: '32px 16px',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    '@media (max-width: 600px)': {
      padding: '16px 8px',
    },
  },
  headerSection: {
    marginBottom: '32px',
    textAlign: 'center',
  },
  pageTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#2c3e50',
    marginBottom: '8px',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    '@media (max-width: 600px)': {
      fontSize: '2rem',
    },
  },
  filterSection: {
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    padding: '24px',
    marginBottom: '32px',
    border: '1px solid #e9ecef',
  },
  filterTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#2c3e50',
    marginBottom: '16px',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
  },
  toggleButtonGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
    },
  },
  styledToggleButton: {
    border: '2px solid #3498db',
    borderRadius: '8px',
    color: '#3498db',
    fontWeight: 600,
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    textTransform: 'none',
    padding: '8px 16px',
    '&.Mui-selected': {
      backgroundColor: '#3498db',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#2980b9',
      },
    },
    '&:hover': {
      borderColor: '#2980b9',
      backgroundColor: 'rgba(52, 152, 219, 0.04)',
    },
  },
  lessonsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gridAutoRows: '1fr',
    gap: '20px',
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
      gap: '16px',
    },
  },
  lessonCard: {
    borderRadius: 16,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    border: '1px solid #e0e0e0',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
    },
  },
  availableCard: {
    backgroundColor: '#fff',
    '&:hover': {
      borderColor: '#3498db',
    },
  },
  registeredCard: {
    backgroundColor: '#e8f5e8',
    borderColor: '#4caf50',
    '&:hover': {
      borderColor: '#45a049',
    },
  },
  cardContent: {
    padding: '24px',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  lessonHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px',
  },
  lessonTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#2c3e50',
    marginBottom: '4px',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    lineHeight: 1.3,
  },
  statusChip: {
    fontWeight: 600,
    fontSize: '0.75rem',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
  },
  availableChip: {
    backgroundColor: '#e3f2fd',
    color: '#1976d2',
  },
  registeredChip: {
    backgroundColor: '#4caf50',
    color: '#fff',
  },
  lessonDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    flex: 1,
  },
  detailRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  detailIcon: {
    fontSize: '20px',
    color: '#3498db',
  },
  detailText: {
    fontSize: '0.9rem',
    color: '#555',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
  },
  timeSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '16px',
    padding: '12px 16px',
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  timeText: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#2c3e50',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
  },
  dateText: {
    fontSize: '0.9rem',
    color: '#666',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
  },
  emptyState: {
    textAlign: 'center',
    padding: '64px 32px',
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    border: '1px solid #e9ecef',
  },
  emptyStateIcon: {
    fontSize: '64px',
    color: '#bdc3c7',
    marginBottom: '16px',
  },
  emptyStateText: {
    fontSize: '1.5rem',
    fontWeight: 500,
    color: '#7f8c8d',
    marginBottom: '8px',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
  },
  emptyStateSubtext: {
    fontSize: '1rem',
    color: '#95a5a6',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
  },
  groupBadge: {
    backgroundColor: '#3498db',
    color: '#fff',
    fontSize: '0.75rem',
    fontWeight: 600,
    padding: '4px 8px',
    borderRadius: 4,
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
  },
  tooltipContent: {
    maxWidth: 300,
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
  },
  tooltipTitle: {
    fontWeight: 600,
    marginBottom: '4px',
  },
  tooltipDescription: {
    fontSize: '0.875rem',
    lineHeight: 1.4,
  },
}));

function Lessons({ width }) {
  const classes = useStyles();
  const intl = useIntl();
  const dispatch = useDispatch();

  const [groups, setGroups] = React.useState(
    JSON.parse(localStorage.getItem("lesson_groups"))
  );
  React.useEffect(() => {
    dispatch(fetchLessons(groups));
  }, [groups, dispatch]);
  const { lesson: lessonItems } = useSelector((state) => state);
  const { user: currentUser } = useSelector((state) => state.auth);
  const [selectedLesson, setSelectedLesson] = React.useState();
  const [isLessonDialogOpen, setIsLessonDialogOpen] = React.useState(false);

  const handleChangeGroups = (event, newFormats) => {
    localStorage.setItem("lesson_groups", JSON.stringify(newFormats));
    setGroups(newFormats);
  };

  const handleOpenLessonDialog = (lesson) => {
    setSelectedLesson(lesson);
    setIsLessonDialogOpen(true);
  };

  const handleCloseLessonDialog = () => {
    setSelectedLesson();
    setIsLessonDialogOpen(false);
  };

  const formatGroupName = (group) => {
    return capitalize(group).replace("_", "-");
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const locale = localStorage.getItem("locale") || 'ru-RU';

    // Get the day of the week and date
    const dayOfWeek = date.toLocaleDateString(locale, { weekday: 'long' });
    const dateFormatted = date.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
    });

    // Capitalize first letter of the day
    const capitalizedDay = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);

    return `${capitalizedDay}, ${dateFormatted}`;
  };

  const getPluralForm = (count, forms) => {
    if (count % 10 === 1 && count % 100 !== 11) {
      return forms[0]; // участник
    } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
      return forms[1]; // участника
    } else {
      return forms[2]; // участников
    }
  };

  const getGroupIcon = (group) => {
    switch (group) {
      case 'elementary':
        return '🎨';
      case 'pre_intermediate':
        return '📚';
      case 'intermediate':
        return '🎯';
      case 'adults':
        return '💼';
      default:
        return '📖';
    }
  };

  const renderLessons = () => {
    if (!lessonItems.items?.length) {
      return (
        <div className={classes.emptyState}>
          <SchoolIcon className={classes.emptyStateIcon} />
          <div className={classes.emptyStateText}>
            {intl.formatMessage({
              id: "text.nothing_to_show",
              defaultMessage: "Нет доступных занятий",
            })}
          </div>
          <div className={classes.emptyStateSubtext}>
            Попробуйте выбрать другую группу или вернитесь позже
          </div>
        </div>
      );
    }

    const upcomingLessons = lessonItems.items.filter(lesson => {
      const lessonDate = new Date(lesson.date + "T" + lesson.time + ":00");
      lessonDate.setHours(lessonDate.getHours() + 1);
      return Date.now() < lessonDate;
    });

    if (!upcomingLessons.length) {
      return (
        <div className={classes.emptyState}>
          <ScheduleIcon className={classes.emptyStateIcon} />
          <div className={classes.emptyStateText}>
            Нет предстоящих занятий
          </div>
          <div className={classes.emptyStateSubtext}>
            Все занятия для выбранных групп уже прошли
          </div>
        </div>
      );
    }

    return (
      <div className={classes.lessonsGrid}>
        {upcomingLessons.map((lesson, index) => {
          const alreadyRegistered = lesson.user.find(
            (el) => el.id === currentUser.id
          );

          return (
            <Card
              key={index}
              className={`${classes.lessonCard} ${alreadyRegistered ? classes.registeredCard : classes.availableCard
                }`}
              onClick={() => handleOpenLessonDialog(lesson)}
            >
              <CardContent className={classes.cardContent}>
                <div className={classes.lessonHeader}>
                  <div>
                    <div className={classes.lessonTitle}>
                      {getGroupIcon(lesson.group)} {lesson.title}
                    </div>
                    <span className={classes.groupBadge}>
                      {formatGroupName(lesson.group)}
                    </span>
                  </div>
                  <Chip
                    icon={alreadyRegistered ? <CheckCircleIcon /> : <SchoolIcon />}
                    label={
                      alreadyRegistered
                        ? intl.formatMessage({
                          id: "status.registered",
                          defaultMessage: "Записан",
                        })
                        : intl.formatMessage({
                          id: "status.available",
                          defaultMessage: "Доступно",
                        })
                    }
                    className={`${classes.statusChip} ${alreadyRegistered ? classes.registeredChip : classes.availableChip
                      }`}
                    size="small"
                  />
                </div>

                <div className={classes.lessonDetails}>
                  <div className={classes.detailRow}>
                    <PersonIcon className={classes.detailIcon} />
                    <span className={classes.detailText}>
                      {intl.formatMessage({
                        id: "fields.teacher",
                        defaultMessage: "Преподаватель",
                      })}: {lesson.teacher}
                    </span>
                  </div>

                  <div className={classes.detailRow}>
                    <GroupIcon className={classes.detailIcon} />
                    <span className={classes.detailText}>
                      {lesson.user.length} {getPluralForm(lesson.user.length, [
                        intl.formatMessage({
                          id: "fields.participant_single",
                          defaultMessage: "участник",
                        }),
                        intl.formatMessage({
                          id: "fields.participant_few",
                          defaultMessage: "участника",
                        }),
                        intl.formatMessage({
                          id: "fields.participant_many",
                          defaultMessage: "участников",
                        })
                      ])}
                    </span>
                  </div>
                </div>

                <div className={classes.timeSection}>
                  <div>
                    <div className={classes.timeText}>
                      <ScheduleIcon style={{ fontSize: '18px', marginRight: '4px', verticalAlign: 'middle' }} />
                      {lesson.time}
                    </div>
                    <div className={classes.dateText}>
                      {formatDate(lesson.date)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className={classes.rootContainer}>
        {/* <div className={classes.headerSection}>
          <div className={classes.pageTitle}>
            {intl.formatMessage({
              id: "routes.meetings",
              defaultMessage: "Занятия",
            })}
          </div>
        </div> */}

        <div className={classes.filterSection}>
          <div className={classes.filterTitle}>
            {intl.formatMessage({
              id: "actions.choose_your_group",
              defaultMessage: "Выберите свою группу",
            })}:
          </div>

          <ToggleButtonGroup
            value={groups}
            onChange={handleChangeGroups}
            className={classes.toggleButtonGroup}
          >

            <ToggleButton
              className={classes.styledToggleButton}
              value="starter"
            >
              <Tooltip
                title={intl.formatMessage({
                  id: "group.starter_description",
                  defaultMessage: "Вы только начинаете изучать язык.Никаких предварительных знаний не требуется.",
                })}
              >
                <span>
                  💼 {intl.formatMessage({
                    id: "fields.starter",
                    defaultMessage: "Starter",
                  })}
                </span>
              </Tooltip>
            </ToggleButton>

            <ToggleButton
              value="elementary"
              className={classes.styledToggleButton}
            >
              <Tooltip
                title={intl.formatMessage({
                  id: "group.elementary_description",
                  defaultMessage: "Вы уже знаете простые слова и фразы, умеете читать и понимать короткие тексты.",
                })}
              >
                <span>
                  🎨 {intl.formatMessage({
                    id: "fields.elementary",
                    defaultMessage: "Elementary",
                  })}
                </span>
              </Tooltip>
            </ToggleButton>

            <ToggleButton
              className={classes.styledToggleButton}
              value="pre_intermediate"
            >
              <Tooltip
                title={intl.formatMessage({
                  id: "group.pre_intermediate_description",
                  defaultMessage: "Вы уже умеете использовать базовые слова и фразы, общаться на простые темы, читать небольшие тексты.",
                })}
              >
                <span>
                  📚 {intl.formatMessage({
                    id: "fields.pre_intermediate",
                    defaultMessage: "Pre-intermediate",
                  })}
                </span>
              </Tooltip>
            </ToggleButton>

            <ToggleButton
              className={classes.styledToggleButton}
              value="intermediate"
            >
              <Tooltip
                title={intl.formatMessage({
                  id: "group.intermediate_description",
                  defaultMessage: "Вы уже понимаете и умеете поддерживать разговор на простые темы, строить более сложные предложения, читать тексты средней сложности.",
                })}
              >
                <span>
                  🎯 {intl.formatMessage({
                    id: "fields.intermediate",
                    defaultMessage: "Intermediate",
                  })}
                </span>
              </Tooltip>
            </ToggleButton>

          </ToggleButtonGroup>
        </div>

        {renderLessons()}
      </div>

      <LessonDialog
        open={isLessonDialogOpen}
        handleClose={handleCloseLessonDialog}
        lesson={selectedLesson}
      />
    </>
  );
}

export default withWidth()(Lessons);
