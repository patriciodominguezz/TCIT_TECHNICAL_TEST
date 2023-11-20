import React, { useEffect, useState } from 'react';

import entityRequests from '../../requests/entity';
import Table from './Table';
import useStyles from './styles';


const TableContainer = () => {
  const classes = useStyles();
  const [entities, setEntities] = useState([]);

  const getEntities = async () => {
    try {
      const data = await entityRequests.getEntities();
      console.log('data', data)
      setEntities(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEntities();
  }, []);

  return (
    <div className={classes.container}>
      <Table entities={entities} />
    </div>
  );
}

export default TableContainer;