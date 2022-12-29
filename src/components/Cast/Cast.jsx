import { useParams} from "react-router-dom"
import { useEffect } from "react";
import { getMovieCast} from "apiServise";
import { Box } from "components/Box";
import { useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import  defaultImage  from "images/default-Img.jpg";
import { CastItem } from "./Cast.styled";



 const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null)
  

     useEffect(() => {
      try {
              getMovieCast(movieId).then(response => {
            setCast(response.data.cast);
      })
        } catch (error) {
            Notify.failure('OOOOOpps... Something wrong(((');
        }   
     
      
    }, [movieId])
    
    if (!cast) {
        return;
    }
    return (
        <Box as={'ul'} display='grid' gridTemplateColumns='250px 250px 250px 250px' gridGap='10px' ml='auto' mr='auto'>
            {cast.map(actor => {
                const profile = actor.profile_path ? `https://image.tmdb.org/t/p/w300${actor.profile_path}` : defaultImage;

                return <CastItem key={actor.id}>
                    <img src={profile} alt="" width='250px' />
                    <Box p="5px">
                    <p>{actor.name}</p>
                        <p>Character : {actor.character}</p>
                    </Box>
                </CastItem>
            })}
        </Box>
        
    )
 }

export default Cast;