import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
  makeStyles,
  IconButton,
  Chip,
  Divider,
} from "@material-ui/core";
import {
  Close as CloseIcon,
  Schedule as ScheduleIcon,
  Person as PersonIcon,
  AccountBalanceWallet as WalletIcon,
  EventSeat as SeatIcon,
  CalendarToday as CalendarIcon,
  School as SchoolIcon,
} from "@material-ui/icons";
import { signUpForALesson } from "../../actions/lesson";
import { useDispatch } from "react-redux";
import SuccessfulSignup from "./SuccessfulSignup";
import { useIntl } from "react-intl";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    borderRadius: 16,
    maxWidth: 600,
    margin: 16,
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
  },
  dialogTitle: {
    padding: '24px 24px 16px 24px',
    position: 'relative',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    borderRadius: '16px 16px 0 0',
  },
  titleText: {
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    fontWeight: 700,
    fontSize: '1.75rem',
    lineHeight: 1.2,
    letterSpacing: '0.01em',
    paddingRight: theme.spacing(5),
    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.8)',
    '&:hover': {
      color: '#fff',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  dialogContent: {
    padding: '24px',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
  },
  descriptionSection: {
    marginBottom: '24px',
  },
  descriptionText: {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: '#444',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    backgroundColor: '#f8f9fa',
    padding: '16px',
    borderRadius: 8,
    borderLeft: '4px solid #3498db',
  },
  detailsGrid: {
    marginBottom: '24px',
  },
  detailCard: {
    backgroundColor: '#fff',
    border: '1px solid #e9ecef',
    borderRadius: 12,
    padding: '16px',
    textAlign: 'center',
    transition: 'all 0.2s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      borderColor: '#3498db',
      boxShadow: '0 4px 12px rgba(52, 152, 219, 0.1)',
    },
  },
  detailIcon: {
    fontSize: '2.5rem',
    color: '#3498db',
    marginBottom: '12px',
    width: '33%',
    height: 'auto',
  },
  detailLabel: {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: '#666',
    marginBottom: '4px',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  detailValue: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#2c3e50',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
  },
  filledChip: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    fontWeight: 600,
    fontSize: '0.875rem',
  },
  availableChip: {
    backgroundColor: '#27ae60',
    color: '#fff',
    fontWeight: 600,
    fontSize: '0.875rem',
  },
  signUpButton: {
    padding: '12px 24px',
    fontSize: '1.1rem',
    fontWeight: 600,
    borderRadius: 8,
    textTransform: 'none',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
      boxShadow: '0 6px 16px rgba(102, 126, 234, 0.4)',
      transform: 'translateY(-2px)',
    },
    '&:disabled': {
      background: '#bdc3c7',
      color: '#7f8c8d',
      boxShadow: 'none',
      transform: 'none',
    },
  },
  divider: {
    margin: '20px 0',
    backgroundColor: '#e9ecef',
  },
  sectionTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#2c3e50',
    marginBottom: '16px',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
}));

export default function LessonDialog({ open, handleClose, lesson }) {
  const classes = useStyles();
  const intl = useIntl();
  const [isOpenSuccessDialog, setIsOpenSuccessDialog] = React.useState(false);
  const handleCloseSuccessDialog = () => {
    setIsOpenSuccessDialog(false);
  };
  const dispatch = useDispatch();
  const handleSignUp = () => {
    dispatch(signUpForALesson(lesson?.id, setIsOpenSuccessDialog));
    handleClose();
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(
      localStorage.getItem("locale") || 'ru-RU',
      {
        day: "numeric",
        month: "short",
      }
    );
  };

  const isLessonFull = lesson?.num_students === "0" || lesson?.num_students === 0;

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        classes={{ paper: classes.dialogPaper }}
      >
        <DialogTitle className={classes.dialogTitle} disableTypography>
          <Typography className={classes.titleText}>
            <SchoolIcon style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            {lesson?.title}
          </Typography>
          <IconButton
            className={classes.closeButton}
            onClick={handleClose}
            size="small"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent className={classes.dialogContent}>
          {lesson?.description && (
            <div className={classes.descriptionSection}>
              <div className={classes.sectionTitle}>
                📖 {intl.formatMessage({
                  id: "fields.description",
                  defaultMessage: "Описание",
                })}
              </div>
              <div className={classes.descriptionText}>
                {lesson.description}
              </div>
            </div>
          )}

          <Divider className={classes.divider} />

          <div className={classes.sectionTitle}>
            📋 {intl.formatMessage({
              id: "fields.lesson_details",
              defaultMessage: "Детали занятия",
            })}
          </div>

          <Grid container spacing={2} className={classes.detailsGrid}>
            <Grid item xs={6} sm={3}>
              <div className={classes.detailCard}>
                <WalletIcon className={classes.detailIcon} />
                <div className={classes.detailLabel}>
                  {intl.formatMessage({
                    id: "fields.price",
                    defaultMessage: "Цена",
                  })}
                </div>
                <div className={classes.detailValue}>
                  {lesson?.price}
                </div>
              </div>
            </Grid>

            <Grid item xs={6} sm={3}>
              <div className={classes.detailCard}>
                <CalendarIcon className={classes.detailIcon} />
                <div className={classes.detailLabel}>
                  {intl.formatMessage({
                    id: "fields.date",
                    defaultMessage: "Дата",
                  })}
                </div>
                <div className={classes.detailValue}>
                  {formatDate(lesson?.date)}
                </div>
              </div>
            </Grid>

            <Grid item xs={6} sm={3}>
              <div className={classes.detailCard}>
                <ScheduleIcon className={classes.detailIcon} />
                <div className={classes.detailLabel}>
                  {intl.formatMessage({
                    id: "fields.time",
                    defaultMessage: "Время",
                  })}
                </div>
                <div className={classes.detailValue}>
                  {lesson?.time}
                </div>
              </div>
            </Grid>

            <Grid item xs={6} sm={3}>
              <div className={classes.detailCard}>
                <SeatIcon className={classes.detailIcon} />
                <div className={classes.detailLabel}>
                  {intl.formatMessage({
                    id: "fields.places_left",
                    defaultMessage: "Свободных мест",
                  })}
                </div>
                {isLessonFull ? (
                  <Chip
                    label={intl.formatMessage({
                      id: "fields.filled",
                      defaultMessage: "Заполнено",
                    })}
                    className={classes.filledChip}
                    size="small"
                  />
                ) : (
                  <div className={classes.detailValue}>
                    {lesson?.num_students}
                  </div>
                )}
              </div>
            </Grid>
          </Grid>

          <Divider className={classes.divider} />

          <Button
            fullWidth
            variant="contained"
            className={classes.signUpButton}
            onClick={() => handleSignUp(lesson?.id)}
            disabled={isLessonFull}
            startIcon={<PersonIcon />}
          >
            {isLessonFull
              ? intl.formatMessage({
                id: "actions.lesson_full",
                defaultMessage: "Занятие заполнено",
              })
              : intl.formatMessage({
                id: "actions.sign_up",
                defaultMessage: "Записаться",
              })
            }
          </Button>
        </DialogContent>
      </Dialog>

      <SuccessfulSignup
        open={isOpenSuccessDialog}
        handleClose={handleCloseSuccessDialog}
      />
    </>
  );
}
