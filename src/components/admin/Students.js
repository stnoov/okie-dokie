import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { Delete, Edit } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import EditStudentDialog from "./dialogs/EditStudentDialog";
import DeleteStudentDialog from "./dialogs/DeleteStudentDialog";
const useStyles = makeStyles({
  table: {
    borderRadius: 0,
  },
});

export default function Students() {
  const classes = useStyles();
  const [students, setStudents] = React.useState();
  const [userToEdit, setUserToEdit] = React.useState();
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  const handleOpenDelete = (user) => {
    setUserToEdit(user);
    setOpenDelete(true);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  const handleOpenEdit = (user) => {
    setUserToEdit(user);
    setOpenEdit(true);
  };
  const fetchStudents = async () => {
    await axios
      .get("https://okiedokie-backend.herokuapp.com/api/users/get_all_users")
      .then((data) => {
        setStudents(data.data.users);
      })
      .catch((err) => {
        console.log(err);
        setStudents([]);
      });
  };
  React.useEffect(() => {
    fetchStudents();
  }, []);
  return (
    <>
      <TableContainer component={Paper} className={classes.table}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Balance</TableCell>
              <TableCell align="right">OkieDokie points</TableCell>
              <TableCell align="right">Completed classes</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students?.map((student, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {student.email}
                </TableCell>
                <TableCell align="right">{student.name}</TableCell>
                <TableCell align="right">{student.age}</TableCell>
                <TableCell align="right">{student.balance}</TableCell>
                <TableCell align="right">{student.okie_dokie_points}</TableCell>
                <TableCell align="right">{student.classes_completed}</TableCell>
                <TableCell align="right">
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <IconButton onClick={() => handleOpenEdit(student)}>
                        <Edit />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton onClick={() => handleOpenDelete(student)}>
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
      <EditStudentDialog
        handleClose={handleCloseEdit}
        open={openEdit}
        fetchStudents={fetchStudents}
        userToEdit={userToEdit}
      />
      <DeleteStudentDialog
        handleClose={handleCloseDelete}
        open={openDelete}
        fetchStudents={fetchStudents}
        userToEdit={userToEdit}
      />
    </>
  );
}
