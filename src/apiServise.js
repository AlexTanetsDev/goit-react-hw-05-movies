import axios from "axios"

const KEY = 'a2727c53ad7bc6b37deeb1325e6f895c'
const BASE_URL = 'https://api.themoviedb.org/3'


export const getTrendingMovies = async () => {
    const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${KEY}&language=en-US`);

    return response;
  
};

export const getMovieDetails = async (id) => {
    
    const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US`);

    return response;
};


export const getMovieCast = async (id) => {
    const response = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`);
    return response;
};

export const getTVCast = async (id) => {
    const ressponse = await axios.get(`${BASE_URL}/tv/${id}/credits?api_key=<<api_key>>&language=en-US`);
    return ressponse;

};

export const getMovieReview = async (id) => {
    const response = await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`)

    return response;
};

export const getTVReview = async (id) => {
    const response = await axios.get();
    return response;
}

export const getMovieByQuery = async (query) => {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`);

    return response;
};

export const getTVDetails = async (id) => {
    const response = await axios.get(`${BASE_URL}/tv/${id}?api_key=${KEY}&language=en-US`);

    return response;
};