import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  withWidth,
  Card,
  CardContent,
  Chip,
  Dialog,
  Button,
  IconButton,
  Fade
} from "@material-ui/core";
import { Close as CloseIcon, ExpandMore as ExpandIcon } from "@material-ui/icons";
import { useIntl } from "react-intl";
import { fetchNews } from "../../actions/news";
import { useDispatch, useSelector } from "react-redux";
import Linkify from "react-linkify";

const useStyles = makeStyles((theme) => ({
  styledMainGrid: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    borderRadius: 12,
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
  },
  styledTitle: {
    fontWeight: 600,
    marginBottom: theme.spacing(1),
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    letterSpacing: '0.02em',
    fontSize: '2.125rem',
    lineHeight: 1.235,
  },
  newsCard: {
    height: '100%',
    borderRadius: 12,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: 'none',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
    },
    '&:hover $expandButton': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  newsCardContent: {
    padding: theme.spacing(3),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
  },
  newsTitle: {
    fontWeight: 600,
    fontSize: '1.1rem',
    lineHeight: 1.4,
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    letterSpacing: '0.01em',
    textRendering: 'optimizeLegibility',
  },
  newsContent: {
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
    marginBottom: theme.spacing(2),
    display: '-webkit-box',
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    flex: 1,
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    fontSize: '0.9rem',
    letterSpacing: '0.01em',
    textRendering: 'optimizeLegibility',
  },
  dateChip: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    fontSize: '0.75rem',
    height: 28,
    fontWeight: 500,
    alignSelf: 'flex-start',
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
  },
  newsGrid: {
    marginTop: theme.spacing(2),
  },
  emptyState: {
    textAlign: 'center',
    color: theme.palette.common.white,
    opacity: 0.7,
    padding: theme.spacing(4),
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: 1.6,
  },
  expandButton: {
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    opacity: 0,
    transform: 'translateY(8px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  modalHeader: {
    position: 'relative',
    padding: theme.spacing(3, 3, 2, 3),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  modalTitle: {
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: 1.3,
    letterSpacing: '0.01em',
    textRendering: 'optimizeLegibility',
    color: theme.palette.text.primary,
    paddingRight: theme.spacing(5),
  },
  modalContent: {
    padding: theme.spacing(3),
  },
  modalContentText: {
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    fontSize: '1rem',
    lineHeight: 1.7,
    letterSpacing: '0.01em',
    textRendering: 'optimizeLegibility',
    color: theme.palette.text.primary,
  },
  modalActions: {
    padding: theme.spacing(2, 3, 3, 3),
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  modalDateChip: {
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
  },
  readMoreButton: {
    fontFamily: '"Roboto", "PT Sans", "Open Sans", "Segoe UI", "Arial", sans-serif',
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: 8,
  },
}));

function ProfileInfo({ width }) {
  const classes = useStyles();
  const intl = useIntl();
  const dispatch = useDispatch();
  const { news: newsItems } = useSelector((state) => state);
  const [selectedNews, setSelectedNews] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  React.useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleNewsClick = (newsItem) => {
    setSelectedNews(newsItem);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedNews(null);
  };

  const isContentTruncated = (content) => {
    return content && content.length > 200;
  };

  const renderNewsItems = () => {
    if (!newsItems.items || newsItems.items.length === 0) {
      return (
        <Grid item xs={12}>
          <div className={classes.emptyState}>
            {intl.formatMessage({
              id: "news.no_items",
              defaultMessage: "Нет доступных новостей",
            })}
          </div>
        </Grid>
      );
    }

    return newsItems.items.map((item, index) => (
      <Grid item xs={12} sm={6} md={4} key={item.id || index}>
        <Card
          className={classes.newsCard}
          onClick={() => handleNewsClick(item)}
        >
          <CardContent className={classes.newsCardContent}>
            <div>
              <div className={classes.newsTitle}>
                {item.title}
              </div>
              <div className={classes.newsContent}>
                <Linkify>{item.content}</Linkify>
              </div>
            </div>
            <Chip
              label={formatDate(item.createdAt)}
              className={classes.dateChip}
              size="small"
            />
            {isContentTruncated(item.content) && (
              <IconButton
                className={classes.expandButton}
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNewsClick(item);
                }}
              >
                <ExpandIcon />
              </IconButton>
            )}
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  return (
    <>
      <Grid container className={classes.styledMainGrid} spacing={0}>
        <Grid item xs={12}>
          <div className={classes.styledTitle}>
            {intl.formatMessage({
              id: "fields.latest_news",
              defaultMessage: "Последние новости",
            })}
          </div>
        </Grid>
        <Grid item xs={12} className={classes.newsGrid}>
          <Grid container spacing={3}>
            {renderNewsItems()}
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        open={modalOpen}
        onClose={handleModalClose}
        maxWidth="md"
        fullWidth
        TransitionComponent={Fade}
        transitionDuration={300}
      >
        {selectedNews && (
          <>
            <div className={classes.modalHeader}>
              <div className={classes.modalTitle}>
                {selectedNews.title}
              </div>
              <IconButton
                className={classes.closeButton}
                onClick={handleModalClose}
              >
                <CloseIcon />
              </IconButton>
            </div>
            <div className={classes.modalContent}>
              <Chip
                label={formatDate(selectedNews.createdAt)}
                className={classes.modalDateChip}
                size="small"
              />
              <div className={classes.modalContentText}>
                <Linkify>{selectedNews.content}</Linkify>
              </div>
            </div>
            <div className={classes.modalActions}>
              <Button
                onClick={handleModalClose}
                color="primary"
                variant="contained"
                className={classes.readMoreButton}
              >
                {intl.formatMessage({
                  id: "common.close",
                  defaultMessage: "Закрыть",
                })}
              </Button>
            </div>
          </>
        )}
      </Dialog>
    </>
  );
}

export default withWidth()(ProfileInfo);
