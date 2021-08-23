import React from "react";
import {
  makeStyles,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { theme } from "../../../utils/themeConfig";
import EditLesson from "../dialogs/EditLessonDialog";
import { useDispatch, useSelector } from "react-redux";
import { deleteLesson, fetchLessons } from "../../../actions/lesson";
const useStyles = makeStyles({
  table: {
    marginTop: theme.spacing(0.5),
  },
  styledContainer: {
    marginTop: theme.spacing(2),
  },
});

export default function LessonsTable() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { lesson: lessonItems } = useSelector((state) => state);
  const [selectedLesson, setSelectedLesson] = React.useState();
  const [isEditOpen, setIsEditOpen] = React.useState();
  const handleEditOpen = (newValue) => {
    setSelectedLesson(newValue);
    setIsEditOpen(true);
  };
  const handleEditClose = () => {
    setIsEditOpen(false);
  };
  React.useEffect(() => {
    dispatch(fetchLessons());
  }, [dispatch]);
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <TableContainer component={Paper} className={classes.table}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Time</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {lessonItems.items?.map((el, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {el.title}
                    </TableCell>
                    <TableCell align="right">{el.date}</TableCell>
                    <TableCell align="right">{el.time}</TableCell>
                    <TableCell align="right">
                      <Grid container justifyContent="flex-end">
                        <Grid item>
                          <IconButton onClick={() => handleEditOpen(el)}>
                            <Edit />
                          </IconButton>
                        </Grid>
                        <Grid item>
                          <IconButton
                            onClick={() => dispatch(deleteLesson(el.id))}
                          >
                            <Delete />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <EditLesson
        open={isEditOpen}
        handleClose={handleEditClose}
        lesson={selectedLesson}
        fetchLessons={fetchLessons}
      />
    </>
  );
}
