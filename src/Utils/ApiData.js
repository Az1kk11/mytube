import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com'

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
      'X-RapidAPI-Key': 'dfecd65feamsh4f42ff352673002p157974jsn7ab3fb9a56d8' ,
    }
  };

export const fetchDataApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data
}
