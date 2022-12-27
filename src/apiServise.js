import axios from "axios"

const KEY = 'a2727c53ad7bc6b37deeb1325e6f895c'
const BASE_URL = 'https://api.themoviedb.org/3'


export const getTrendingMovies = async () => {
    const response = await axios.get(`${BASE_URL}/trending/all/day?api_key=${KEY}`);

    return response;

    
}

export const getMovieDetails = async (id) => {
    
        const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US`);

    return response;
}


export const getMovieCast = async (id) => {
    const response = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`);
    return response;
}

export const getMovieReview = async (id) => {
    const response = await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`)

    return response;
}