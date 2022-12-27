import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getMovieReview } from "apiServise"
import { Box } from "components/Box";

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    
    useEffect(() => {
        getMovieReview(movieId).then(response => {
            setReviews(response.data.results);
      })

    }, [movieId])
    
    if (reviews) {

        return (
            <div>

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
                
            </div>
      

      
    )
    }


}