import { Box } from "./Box"
import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
             <Box as={'header'} borderBottom='2px solid black' p='5px'>
                <Box as={'nav'} display="flex">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/movies'>Movies</NavLink>
                </Box>
             </Box>
           
      
    )
}