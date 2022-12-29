import { Box } from "components/Box"
import { useState, useEffect } from "react"
import { getTrendingMovies } from "apiServise"
import { MovieList } from "components/MovieList/MovieList"
import { useLocation } from "react-router-dom"


export const Home = () => {
    const [movies, setMovies] = useState([]);
 const location = useLocation();

    useEffect(() => {
     
        getTrendingMovies().then(res => {
      setMovies(res.data.results)
  })
   
    }, [])
    

    return (
        <>
             
            <Box p='15px'>
                <MovieList movies={movies} title={ "Tranding today" } state={ {from: location}} />
            </Box>  
            
        </>
     
   ) 
}