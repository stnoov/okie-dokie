import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@material-ui/core";
import { useIntl } from "react-intl";

export default function SuccessfulSignup({ open, handleClose, lesson }) {
  const intl = useIntl();
  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h4" style={{ letterSpacing: 0 }}>
            {intl.formatMessage({
              id: "lesson.successful_signup",
              defaultMessage: `Вы успешно записались на мероприятие!`,
            })}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h4" color="textSecondary">
                {intl.formatMessage({
                  id: "lesson.successful_signup_description",
                  defaultMessage: `Ссылка отправлена вам на почту, а также будет доступна на главной странице сайта, на картинке забронированного мероприятия, за 15 минут до его начала.`,
                })}
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleClose}>
            {intl.formatMessage({
              id: "action.close",
              defaultMessage: `Close`,
            })}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
