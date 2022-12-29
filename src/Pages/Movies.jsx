import { useState, useEffect } from "react"
import { SearchForm } from "components/SearchForm/SearchForm"
import { getMovieByQuery } from "apiServise";
import { MovieList } from "components/MovieList/MovieList"
import { useLocation, useSearchParams } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

 const Movies = () => { 
    const [searchParams] = useSearchParams();
    const paramsQuery = searchParams.get('query');
    
    const [movies, setMovies] = useState(null);
    const [searchQuery, setSearchQuery] = useState(paramsQuery);
    const location = useLocation();
    

    useEffect(() => {
        if (!searchQuery) {
            return;
        }

        try {
            getMovieByQuery(searchQuery).then(response => {
                if (response.data.results.length === 0) {
                    Notify.failure(`We don't have any results rof this keyword, please try another`)
                    return;
              }
            
            setMovies(response.data.results);
        });
        } catch (error) {
            Notify.failure('OOOOOpps... Something wrong(((')
        }
        
     

    }, [searchQuery])

    
    const hendleFormSubmit = (query) => {
        setSearchQuery(query)
       
    }

    return (
        <>
           
            <SearchForm onSubmit={hendleFormSubmit} />
            {movies && <MovieList movies={movies} state={ {from: location}} />}
        </>
       
    )
 }


export default Movies;