// En tu archivo containers/TableContainer.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import entityActions from "../../actions/entityActions";
import entityRequests from "../../requests/entity";
import Table from "./Table";
import CreateForm from "./CreateForm";
import useStyles from "./styles";

const TableContainer = () => {
  const classes = useStyles();
  const [entities, setEntities] = useState([]);
  const [sendQuery, setSendQuery] = useState(false);
  const dispatch = useDispatch();
  const reduxFilters = useSelector((state) => state.entity.filters);
  const [filters, setFilters] = useState(reduxFilters);

  useEffect(() => {
    // Guardar los filtros en el estado de Redux
    dispatch(entityActions.setFilters(reduxFilters));
  }, [reduxFilters, dispatch]);

  useEffect(() => {
    const getAllEntities = async () => {
      try {
        const data = await entityRequests.getEntities({
          searchValue: filters.searchValue,
        });
        setEntities(data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllEntities();
  }, [sendQuery, filters.searchValue]);

  return (
    <div className={classes.container}>
      <Table
        entities={entities}
        filters={filters}
        setFilters={setFilters}
        setSendQuery={setSendQuery}
      />
      <CreateForm setSendQuery={setSendQuery} />
    </div>
  );
};

export default TableContainer;
