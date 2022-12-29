import { useState, useEffect } from "react"
import { SearchForm } from "components/SearchForm/SearchForm"
import { getMovieByQuery } from "apiServise";
import { MovieList } from "components/MovieList/MovieList"
import { useLocation, useSearchParams } from "react-router-dom";

export const Movies = () => { 
    const [searchParams] = useSearchParams();
    const paramsQuery = searchParams.get('query');
    
    const [movies, setMovies] = useState(null);
    const [searchQuery, setSearchQuery] = useState(paramsQuery);
    const location = useLocation();
    

    useEffect(() => {
        if (!searchQuery) {
            return;
        }
        
        getMovieByQuery(searchQuery).then(response => {
           
            setMovies(response.data.results);
        });

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