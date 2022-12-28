import { Box } from "components/Box"
import { Link, useLocation } from "react-router-dom"

export const MovieList = ({ title, movies }) => {
    const location = useLocation();

    return (
        <Box>
            {title && (<h2>{title}</h2>)}
            <ul>
                {movies.map(movie => {
                    return <li key={movie.id}>
                        <Link to={`movies/${movie.id}`} state={{from: location}}><p>{movie.title}</p></Link>   
                    </li>
                })}
              
            </ul>
       </Box>
    )
}