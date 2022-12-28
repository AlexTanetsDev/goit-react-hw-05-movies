import { useState } from "react"
import { SearchForm } from "components/SearchForm/SearchForm"



export const Movies = () => {

    const [movies, setMovies] = useState(null);


    const hendleFormSubmit = (e) => {
        
        console.log(e)
}

    return (
        <>
           
            <SearchForm onSubmit={hendleFormSubmit} />
        </>
       
    )
}