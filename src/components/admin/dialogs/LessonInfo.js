import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

export default function LessonInfo({ open, handleClose, lesson }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h4" style={{ letterSpacing: 0.75 }}>
            Lesson participants
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={1}>
            <List>
              {lesson?.user?.map((el) => {
                return (
                  <ListItem>
                    <ListItemText
                      primary={`${el.name}, ${el.age}`}
                      secondary={el.email}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
