import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { toast } from "react-toastify";
import authHeader from "../../../services/auth.header";

export default function DeleteStudentDialog({
  open,
  handleClose,
  fetchStudents,
  userToEdit,
}) {
  const handleDelete = () => {
    axios
      .post(
        "https://okiedokie-backend.herokuapp.com/api/users/delete_user",
        {
          email: userToEdit.email,
        },
            { headers: authHeader() }
          )
      .then(() => {
        toast.success("User has been deleted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        fetchStudents();
        handleClose();
      });
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h4" style={{ letterSpacing: 0.75 }}>
            Delete student
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2">
            Are you sure you want to delete {userToEdit?.email}?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
