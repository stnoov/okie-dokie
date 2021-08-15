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
import EditNewsDialog from "./EditNewsDialog";
import { toast } from "react-toastify";

const useStyles = makeStyles({
  table: {
    marginTop: theme.spacing(0.5),
  },
  styledContainer: {
    marginTop: theme.spacing(2),
  },
});

export default function PastNews() {
  const classes = useStyles();
  const [selectedNews, setSelectedNews] = React.useState();
  const [news, setNews] = React.useState();
  const [isEditOpen, setIsEditOpen] = React.useState();
  const handleEditOpen = (newValue) => {
    setSelectedNews(newValue);
    setIsEditOpen(true);
  };
  const handleEditClose = () => {
    setIsEditOpen(false);
  };
  const fetchNews = () => {
    axios
      .get("http://localhost:8080/api/news/get_news")
      .then((data) => {
        setNews(data.data.news);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteNews = (idToDelete) => {
    axios
      .post(
        "http://localhost:8080/api/news/delete_news",
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
        toast.success("News were updated", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        fetchNews();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(fetchNews, []);
  return (
    <>
      <TableContainer component={Paper} className={classes.table}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
            {news?.map((el, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {el.title}
                </TableCell>
                <TableCell align="right">
                  {new Date(el.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell align="right">
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <IconButton onClick={() => handleEditOpen(el)}>
                        <Edit />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton onClick={() => deleteNews(el.id)}>
                        <Delete />
                      </IconButton>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
      <EditNewsDialog
        open={isEditOpen}
        handleClose={handleEditClose}
        news={selectedNews}
        fetchNews={fetchNews}
      />
    </>
  );
}
