import axios from 'axios';

export const baseUrl ='https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '333ddcee42msha1e991fa1447fcfp158b1ejsn8248d0749f75',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data;
}