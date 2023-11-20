// En tu nuevo archivo components/CreateForm.js
import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import entityRequests from "../../requests/entity";
import { useSnackbar } from "notistack";
import useStyles from "./styles";

const CreateForm = ({ setSendQuery }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleCreate = async () => {
    try {
      await entityRequests.postCreateEntity({
        name,
        description,
      });
      enqueueSnackbar("Entidad creada correctamente", { variant: "success", });

      setSendQuery((prev) => !prev);
    } catch (error) {
      enqueueSnackbar(error.response.data.error, { variant: "error" });
    }

    setName("");
    setDescription("");
  };

  return (
    <Box className={classes.createForm}>
      <Box className={classes.column}>
        <TextField
          label="Nombre"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={classes.textField}
          margin="normal"
        />
      </Box>
      <Box className={classes.column}>
        <TextField
          label="Descripción"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          className={classes.textField}
          margin="normal"
        />
      </Box>
      <Box className={classes.column}>
        <Button
          variant="contained"
          color="success"
          onClick={handleCreate}
          className={classes.createButton}
        >
          Crear
        </Button>
      </Box>
    </Box>
  );
};

export default CreateForm;
