import React, { useEffect, useState } from 'react';

import entityRequests from '../../requests/entity';
import Table from './Table';
import useStyles from './styles';


const TableContainer = () => {
  const classes = useStyles();
  const [entities, setEntities] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const getAllEntities = async () => {
      try {
        const data = await entityRequests.getEntities({ searchValue });
        console.log('data', data)
        setEntities(data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllEntities();
  }, [searchValue]);

  return (
    <div className={classes.container}>
      <Table entities={entities} setSearchValue={setSearchValue} />
    </div>
  );
}

export default TableContainer;