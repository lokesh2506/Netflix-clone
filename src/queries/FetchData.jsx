import axios from 'axios';

export const fetchData = async (endpoint) => {
  const response =await axios.get(endpoint);
  return response.data.results;
};

export const fetchDetails = async (endpoint) => {
  const response = await axios.get(endpoint);
  return response.data;
};
