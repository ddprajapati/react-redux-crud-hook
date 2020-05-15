import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { DELETE_USER, OPEN_EDIT_FORM } from "../constants/action-types";

const styles = () => ({
  table: {
    minWidth: 650
  }
});

const ListUsers = ({
  classes,
  openEditDialog,
  handleDelete,
  userData: { users = [] } = {}
}) => (
  <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Role</TableCell>
          <TableCell align="right">Created</TableCell>
          <TableCell align="right">Status</TableCell>
          <TableCell align="right">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map(user => (
          <TableRow key={user.id}>
            <TableCell component="th" scope="user">
              {user.name}
            </TableCell>
            <TableCell align="right">{user.role}</TableCell>
            <TableCell align="right">{user.created}</TableCell>
            <TableCell align="right">{user.status}</TableCell>
            <TableCell align="right">
              <IconButton
                aria-label="Comments"
                onClick={() => openEditDialog(user)}
              >
                <CommentIcon />
              </IconButton>
              <IconButton
                aria-label="Comments"
                onClick={() => handleDelete(user.id)}
              >
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  handleDelete: id =>
    dispatch({
      type: DELETE_USER,
      payload: { id }
    }),
  openEditDialog: user =>
    dispatch({
      type: OPEN_EDIT_FORM,
      payload: { user }
    })
});

const ListUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUsers);

export default withStyles(styles)(ListUserContainer);
