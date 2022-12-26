import { Box } from "components/Box"
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import { getMovie } from "apiServise"
import { MovieList } from "components/MovieList/MovieList"

export const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
     
        getMovie().then(res => {
      setMovies(res.data.results)
  })
   
    }, [])
    

    return (
        <>
            
        <Box as={'header'}  width="100vw" p='15px' borderBottom = '2px solid black'>
            <Box as={'nav'} display="flex" gap='10px'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/movies'>Movies</NavLink>
            </Box>
        </Box>
            
            <Box>
                <MovieList movies={movies} title={ "Tranding today" } />
            </Box>    
        </>
     
   ) 
}