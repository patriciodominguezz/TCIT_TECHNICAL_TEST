/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import entityRequests from "../../requests/entity";
import Table from "./Table";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import entityFiltersActions from "../../actions/entityActions";

const TableContainer = () => {
  const classes = useStyles();
  const [entities, setEntities] = useState([]);
  const [filters, setFilters] = useState({
    searchValue: "",
  });
  const [sendQuery, setSendQuery] = useState(false);
  const entityRedux = useSelector((state) => state.entity);
  const [reduxFilters, setReduxFilters] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const setReduxInfo = async () => {
      if (Object.keys(entityRedux.entityFilters).length > 0) {
        setFilters({ ...filters, ...entityRedux.entityFilters });
        setSendQuery((prev) => !prev);
      }
      setReduxFilters(true);
    };
    setReduxInfo();
  }, []);

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

    const setEntityFilters = async () => {
      dispatch(entityFiltersActions.setEntityFilters(filters));
    };
    if (reduxFilters) {
      getAllEntities();
      setEntityFilters();
    }
  }, [sendQuery, reduxFilters]);

  return (
    <div className={classes.container}>
      <Table
        entities={entities}
        filters={filters}
        setFilters={setFilters}
        setSendQuery={setSendQuery}
      />
    </div>
  );
};

export default TableContainer;
