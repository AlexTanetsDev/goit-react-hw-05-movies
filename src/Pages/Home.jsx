import { Box } from "components/Box"
import { useState, useEffect } from "react"
import { getTrendingMovies } from "apiServise"
import { MovieList } from "components/MovieList/MovieList"


export const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
     
        getTrendingMovies().then(res => {
      setMovies(res.data.results)
  })
   
    }, [])
    

    return (
        <>
             
            <Box>
                <MovieList movies={movies} title={ "Tranding today" } />
            </Box>  
            
        </>
     
   ) 
}