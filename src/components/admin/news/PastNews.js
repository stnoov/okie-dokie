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
import EditNewsDialog from "./EditNewsDialog";
import { deleteNews, fetchNews } from "../../../actions/news";
import { useDispatch, useSelector } from "react-redux";
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
  const dispatch = useDispatch();
  const [selectedNews, setSelectedNews] = React.useState();
  const [isEditOpen, setIsEditOpen] = React.useState();
  const { news: newsItems } = useSelector((state) => state);
  const handleEditOpen = (newValue) => {
    setSelectedNews(newValue);
    setIsEditOpen(true);
  };
  const handleEditClose = () => {
    setIsEditOpen(false);
  };
  React.useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

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
            {newsItems.items?.map((el, index) => (
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
                      <IconButton onClick={() => dispatch(deleteNews(el.id))}>
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
