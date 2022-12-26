import { Box } from "components/Box"

export const MovieList = ({title, movies}) => {
    return (
        <Box>
            {title && (<h2>{title}</h2>)}
            <ul>
                {movies.map(movie => {
                    return <li key={movie.id}>
                        <p>{movie.title}</p>
                    </li>
                })}
              
            </ul>
       </Box>
    )
}