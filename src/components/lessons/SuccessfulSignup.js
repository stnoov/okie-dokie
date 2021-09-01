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

export default function SuccessfulSignup({ open, handleClose, lesson }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h4" style={{ letterSpacing: 0 }}>
            Вы были успешно записаны на занятие
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h4" color="textSecondary">
                Ссылка на подключение к мероприятию будет доступна на Главной
                странице сайте, на картинке забронированного мероприятия, за 15
                минут до его начала
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
