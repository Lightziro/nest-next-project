import React, { useState, Fragment } from "react";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  IconButton,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { FULL_GRID, HALF_GRID } from "../../../items/ui";
import { axios } from "../../../services/services";
import classes from "./contact-modal.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { ContactSchema } from "../../../ts/schemas/contact.schema";
import {
  ERROR_CONTACT_ALERT,
  SUCCESS_CONTACT_ALERT,
} from "../../../ts/consts/alert.consts";
import { Alert as AlertType } from "../../../ts/types/additional";

interface ContactModal {
  open: boolean;
  handleOpen: () => void;
}

export const ContactModal: React.FC<ContactModal> = ({ open, handleOpen }) => {
  const [alert, setAlert] = useState<AlertType>({
    open: false,
    text: null,
    status: null,
  });
  const handleSubmit = async (form) => {
    try {
      await axios.post("/orders/", form);
      setAlert(SUCCESS_CONTACT_ALERT);
    } catch (e) {
      setAlert(ERROR_CONTACT_ALERT);
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    validationSchema: ContactSchema,
    onSubmit: handleSubmit,
  });
  const onCloseAlert = () => setAlert((prev) => ({ ...prev, open: false }));
  return (
    <Fragment>
      <Dialog
        open={open}
        keepMounted
        onClose={handleOpen}
        fullWidth
        disableScrollLock={true}
        aria-describedby="alert-dialog-slide-description"
      >
        <form onSubmit={formik.handleSubmit}>
          <Stack
            className={classes.wrapperTitle}
            direction="row"
            justifyContent="space-between"
          >
            <span className={classes.title}>{"СВЯЗАТЬСЯ С НАМИ"}</span>
            <IconButton onClick={handleOpen}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item {...FULL_GRID}>
                <TextField
                  margin="dense"
                  label="Имя"
                  fullWidth
                  variant="outlined"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={
                    formik.touched.name && String(formik.errors.name || "")
                  }
                />
              </Grid>
              <Grid item container spacing={4}>
                <Grid item {...HALF_GRID}>
                  <TextField
                    margin="dense"
                    name="phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    label="Телефон"
                    fullWidth
                    variant="outlined"
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={
                      formik.touched.phone && String(formik.errors.phone || "")
                    }
                  />
                </Grid>
                <Grid item {...HALF_GRID}>
                  <TextField
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    margin="dense"
                    label="E-mail"
                    fullWidth
                    variant="outlined"
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={
                      formik.touched.email && String(formik.errors.email || "")
                    }
                  />
                </Grid>
              </Grid>
            </Grid>
            <p className={classes.consent}>
              Нажав на кнопку "Отправить" вы даете согласие на обработку
              персональных данных
            </p>
          </DialogContent>
          <DialogActions>
            <Button type="submit">Отправить</Button>
          </DialogActions>
        </form>
      </Dialog>
      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={onCloseAlert}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          sx={{ textAlign: "center" }}
          onClose={onCloseAlert}
          severity={alert.status}
        >
          {alert.text}
        </Alert>
      </Snackbar>
    </Fragment>
  );
};
