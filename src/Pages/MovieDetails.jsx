import { Box } from "components/Box"
import { Link, Outlet, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getMovieDetails } from "apiServise";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        getMovieDetails(movieId).then(response => {
          setMovie(response.data)
      })
    }, [movieId])

    const hendleClick = () => {
        
    }



    if (movie) {
       return (
        <Box>
               <button type="button">Go back</button>
               
            <Box display='grid' gridTemplateColumns="200px 1fr">
                   
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />

                <Box>
                    <h2>{ movie.title}</h2>
                    <p>User score { movie.vote_average}</p>
                    <h3>Overview</h3>
                    <p>{movie.overview }</p>
                    <h3>Genres</h3>
                       
                    <Box as={'ul'} display='flex'>
                        {movie.genres.map(gen => {
                            return <li key={gen.id}>{gen.name}</li>
                        })}
                    </Box> 
                </Box>
         
            </Box>
               
            <Box>
                <p>Additional information</p>
                <ul>
                    <Link to="cast">Cast</Link>
                    <Link to="reviews">Reviews</Link>
                </ul>
            </Box>
               
            <Outlet/>
        </Box>
    )
}
 
}