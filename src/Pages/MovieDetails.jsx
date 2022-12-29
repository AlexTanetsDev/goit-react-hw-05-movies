import { Box } from "components/Box"
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getMovieDetails } from "apiServise";
import defaultImage from "images/default-Img.jpg";
import styled from "styled-components";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const [navPath] = useState(location.state?.from);

    const backLinkHref = navPath ?? "/";


    useEffect(() => {
        getMovieDetails(movieId).then(response => {
          setMovie(response.data)
      })
    }, [movieId])

  



    if (movie) {
        const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : defaultImage;
        const score = Math.round(movie.vote_average)
       return (
        <Box p='15px'  display='grid' gridGap="10px">
               <StyledBackLink to={backLinkHref}>Go back</StyledBackLink>
               
            <Box display='grid' gridTemplateColumns="250px 1fr" maxWidth='600px' gridGap="10px" >
                   
                <img src={poster} alt="" />

                <Box>
                    <h2>{ movie.title}</h2>
                    <p>User score {score * 10 }%</p>
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
               
            <Box borderBottom='1px solid black'>
                <p>Additional information</p>
                <Box as={'ul'} display='grid' gridTemplateColumns="100px 100px" gridGap='10px' pl="5px" mt='5px' mb='10px'>
                    <StyledBackLink to="cast">Cast</StyledBackLink>
                    <StyledBackLink to="reviews">Reviews</StyledBackLink>
                </Box>
            </Box>
               
            <Outlet/>
        </Box>
    )
}
 
}



const StyledBackLink = styled(NavLink)`
       padding: 5px;
    width: 100px;
    border-radius: 10px;
    text-decoration: none;
    background-color: #e2e2e2;
    color: black;
    text-align:center;
    font-size: 18px;

    :hover{
         background-color: #fc7d07;
        color: #fff;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
    }

`