import axios from "axios"



export const getMovie = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=a2727c53ad7bc6b37deeb1325e6f895c');

    return response;

    
}