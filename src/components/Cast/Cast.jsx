import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { getMovieCast} from "apiServise";
import { Box } from "components/Box";
import { useState } from "react";
import  defaultImage  from "images/default-Img.jpg";

export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null)
   

    useEffect(() => {
        getMovieCast(movieId).then(response => {
            setCast(response.data.cast);
      })
    }, [movieId])
    
    if (!cast) {
        return;
    }
    return (
        <Box as={'ul'}>
            {cast.map(actor => {
                const profile = actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : defaultImage;

                return <li key={actor.id}>
                    <img src={profile} alt="" width='200px'/>
                    <p>{actor.name}</p>
                    <p>Character : { actor.character}</p>
                </li>
            })}
        </Box>
        
    )
}