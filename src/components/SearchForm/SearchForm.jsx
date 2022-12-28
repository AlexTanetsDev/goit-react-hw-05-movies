import { useSearchParams } from "react-router-dom";


export const SearchForm = ({onSubmit}) => {
   const [searchParams, setSearchParams] = useSearchParams();
   const name = searchParams.get("name") ?? "";
   

    const updateQueryString = (name) => {
       const nextParams = name !== "" ? { name } : {};
       setSearchParams(nextParams);
    };
  
  const hendleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
    }    
  
    return (
     <form action="" onSubmit={hendleSubmit}>
            <input
          type="text"
          value={name}
          onChange={e=>{updateQueryString(e.target.value)}}
        />
        <button type="submit">Sent</button>
     </form>
        
      
   
    
    
    )
}