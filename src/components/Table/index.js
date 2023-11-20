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
  const [reduxLoaded, setReduxLoaded] = useState(false);

  useEffect(() => {
    setFilters(reduxFilters);
    setReduxLoaded(true);
  }, [reduxFilters]);

  useEffect(() => {
    dispatch(entityActions.setFilters(filters));
  }, [filters, dispatch]);

  useEffect(() => {
    if (reduxLoaded) {
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
    }
  }, [sendQuery, reduxLoaded, filters]);

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
