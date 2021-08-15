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
import axios from "axios";
import { Edit, Delete } from "@material-ui/icons";
import { theme } from "../../../utils/themeConfig";
import { toast } from "react-toastify";
import EditLesson from "../dialogs/EditLessonDialog";

const useStyles = makeStyles({
  table: {
    marginTop: theme.spacing(0.5),
  },
  styledContainer: {
    marginTop: theme.spacing(2),
  },
});

export default function LessonsTable({ fetchLessons, lessons }) {
  const classes = useStyles();
  const [selectedLesson, setSelectedLesson] = React.useState();
  const [isEditOpen, setIsEditOpen] = React.useState();
  const handleEditOpen = (newValue) => {
    setSelectedLesson(newValue);
    setIsEditOpen(true);
  };
  const handleEditClose = () => {
    setIsEditOpen(false);
  };
  const deleteLesson = (idToDelete) => {
    axios
      .post(
        "http://localhost:8080/api/lessons/delete_lesson",
        {
          id: idToDelete,
        },
        {
          headers: {
            "x-access-token": localStorage.getItem("user"),
          },
        }
      )
      .then((response) => {
        toast.success("Lesson was deleted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        fetchLessons();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(fetchLessons, []);
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
                {lessons?.map((el, index) => (
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
                          <IconButton onClick={() => deleteLesson(el.id)}>
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
