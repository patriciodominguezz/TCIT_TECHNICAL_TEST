import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
} from "@mui/material";
import useStyles from "./styles";

const TableComponent = ({ entities, filters, setFilters, setSendQuery}) => {
  const classes = useStyles();
  const [currentEntities, setCurrentEntities] = useState([]);

  useEffect(() => {
    setCurrentEntities(entities);
  }, [entities]);

  const deleteEntity = (id) => {
    alert(`Delete entity with id: ${id}`);
  };

  const handleFiltersChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
    

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop={2}
    >
      <Box display="flex" marginBottom={2}>
        <TextField
          label="Filtrar por nombre"
          variant="outlined"
          className={classes.textField}
          value={filters.search}
          onChange={(e) => handleFiltersChange('searchValue', e.target.value || '')}
          />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setSendQuery((prev) => !prev)}
          style={{ marginLeft: 10 }}
        >
          Buscar
        </Button>
      </Box>
      <TableContainer         component={Paper}
        className={classes.scrollContainer}
        overflowY="auto">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center">Nombre</TableCell>
              <TableCell align="center">Descripción</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentEntities.map((entity) => (
              <TableRow key={entity.id}>
                <TableCell align="center">{entity.name}</TableCell>
                <TableCell align="center">{entity.description}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "red", color: "white" }}
                    className={classes.deleteButton}
                    onClick={() => deleteEntity(entity.id)}
                  >
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableComponent;
