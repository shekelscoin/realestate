import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '5c98500b69msh6b0d14457d305d3p18caacjsnc4ce1cb765e8' ,
    },
  });
    
  return data;
}


