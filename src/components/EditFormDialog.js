import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { CLOSE_EDIT_FORM, UPDATE_USER } from "../constants/action-types";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name Required"),
  role: Yup.string().required("Role Required"),
  status: Yup.string().required("Status Required")
});

const EditFormDialog = ({ userData, handleClose, handleSave }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(userData.uiState.openEditDialog);
  }, [userData]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth={"lg"}
      >
        <Formik
          initialValues={userData.uiState.userToEdit.user}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              handleSave(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              <DialogTitle id="form-dialog-title">Update User</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Name*"
                  value={values.name}
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && errors.name}

                <FormControl fullWidth>
                  <InputLabel id="role">Role*</InputLabel>
                  <Select
                    labelId="role"
                    id="role"
                    name="role"
                    value={values.role}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value="Admin">Admin</MenuItem>
                    <MenuItem value="Partner">Partner</MenuItem>
                  </Select>
                </FormControl>
                {errors.role && touched.role && errors.role}

                <FormControl fullWidth>
                  <InputLabel id="role">Status*</InputLabel>
                  <Select
                    labelId="status"
                    id="status"
                    name="status"
                    value={values.status}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">Inactive</MenuItem>
                  </Select>
                </FormControl>
                {errors.status && touched.status && errors.status}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button color="primary" type="submit" disabled={isSubmitting}>
                  Save
                </Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  handleClose: () =>
    dispatch({
      type: CLOSE_EDIT_FORM
    }),
  handleSave: user => {
    dispatch({
      type: UPDATE_USER,
      payload: user
    });
    dispatch({
      type: CLOSE_EDIT_FORM
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditFormDialog);
