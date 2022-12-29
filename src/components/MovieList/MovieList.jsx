import { Box } from "components/Box"
import { useLocation } from "react-router-dom"
import { StyledLink, StyledList } from "./MovieList.styled";

export const MovieList = ({ title, movies, state }) => {
    const location = useLocation();
   
    const path = location.pathname === "/" ? "movies/" : "";
    return (
        <Box maxWidth='500px'>
            {title && (<h2>{title}</h2>)}
            <StyledList>
                {movies.map(movie => {
                    return <li key={movie.id}>
                        <StyledLink to={`${path}${movie.id}`} state={state}><p>- {movie.title ?? movie.name}</p></StyledLink>   
                    </li>
                })}
              
            </StyledList>
       </Box>
    )
}