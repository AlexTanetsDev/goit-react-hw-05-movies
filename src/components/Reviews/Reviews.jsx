import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getMovieReview } from "apiServise"
import { Box } from "components/Box";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
 const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    
     useEffect(() => {
        try {
               getMovieReview(movieId).then(response => {
            setReviews(response.data.results);
      })
        } catch (error) {
            Notify.failure('OOOOOpps... Something wrong(((');
        }
     

    }, [movieId])
    
    if (reviews) {

        return (
            <Box maxWidth='1000px'>

                {reviews.length !== 0
                    ? (<Box as={"ul"}>
                            {reviews.map(review => {

                            return <li key={review.id}>
                                       <h3>Author: {review.author}</h3>
                                       <p>{ review.content }</p>
                                    </li>
                            })}
                      </Box>)
                    : (<p>We don't have any reviews for this movie.</p>)}
                
            </Box>
      

      
    )
    }


 }

export default Reviews;