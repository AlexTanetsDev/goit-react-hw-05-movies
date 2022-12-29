import { Box } from "components/Box"
import { useState, useEffect } from "react"
import { getTrendingMovies } from "apiServise"
import { MovieList } from "components/MovieList/MovieList"
import { useLocation } from "react-router-dom"
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Home = () => {
    const [movies, setMovies] = useState([]);
 const location = useLocation();

    useEffect(() => {
     try {
                getTrendingMovies().then(res => {
      setMovies(res.data.results)
  })
     } catch (error) {
        Notify.failure(error.message)
     }

   
    }, [])
    

    return (
        <>
             
            <Box p='15px'>
                <MovieList movies={movies} title={ "Tranding today" } state={ {from: location}} />
            </Box>  
            
        </>
     
   ) 
}