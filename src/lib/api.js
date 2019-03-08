import axios from 'axios';

export function getAPOD(date = ''){
  const api_key = "vFZe2YttP54Falo0dCLFK3fBYLJRPVC01Vi0Ku4e";
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`);
}