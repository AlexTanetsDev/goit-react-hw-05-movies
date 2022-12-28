import { Box } from "components/Box"
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getMovieDetails } from "apiServise";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    useEffect(() => {
        getMovieDetails(movieId).then(response => {
          setMovie(response.data)
      })
    }, [movieId])

  



    if (movie) {
       return (
        <Box>
               <NavLink to={backLinkHref}>Go back</NavLink>
               
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