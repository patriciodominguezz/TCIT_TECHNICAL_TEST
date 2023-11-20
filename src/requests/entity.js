/* eslint-disable import/no-anonymous-default-export */

import axios from '../axios';

const postCreateEntity = async ({ name, description }) => {
  try {
    const { data } = await axios.post("/api/entity/create", {
      name,
      description,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

const getEntities = async ({ searchValue }) => {
  try {
    const { data } = await axios.get(
      `/api/entity/getAll?searchValue=${searchValue}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

const deleteEntity = async ({ id }) => {
  try {
    const { data } = await axios.delete(`/api/entity/delete/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export default {
  postCreateEntity,
  getEntities,
  deleteEntity,
};
